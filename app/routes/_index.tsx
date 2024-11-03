import {
	type ClientLoaderFunctionArgs,
	Form,
	useLoaderData,
	useSearchParams,
} from "@remix-run/react";
import { fetchPopulationComposition, fetchPrefectures } from "~/api/resasApi";

export const clientLoader = async ({ request }: ClientLoaderFunctionArgs) => {
	const prefectures = await fetchPrefectures();

	const searchParams = new URLSearchParams(request.url.split("?")[1]);

	const prefCodes = searchParams.getAll("prefCode");

	const prefCode = prefCodes.shift();

	const addArea = prefCodes.length
		? prefCodes.map((code) => `${code}_`).join(",")
		: undefined;

	if (prefCode) {
		const populationData = await fetchPopulationComposition({
			prefCode,
			addArea,
		});
		return { prefectures, populationData };
	}
	return { prefectures };
};

export default function Index() {
	const { prefectures, populationData } = useLoaderData<typeof clientLoader>();
	const [searchParams] = useSearchParams();
	return (
		<>
			<Form method="get">
				{prefectures.map((prefecture) => (
					<label key={prefecture.prefCode}>
						<input
							type="checkbox"
							name="prefCode"
							value={prefecture.prefCode}
							defaultChecked={searchParams
								.getAll("prefCode")
								.includes(prefecture.prefCode)}
						/>
						{prefecture.prefName}
					</label>
				))}
				<button type="submit">Submit</button>
			</Form>
			<div>
				{populationData?.data.map((data) => (
					<div key={data.label}>
						<h2>{data.label}</h2>
						{data.data.map((item) => (
							<div key={item.year}>
								<h3>{item.year}</h3>
								<p>{item.value}</p>
								<p>{item.rate}</p>
							</div>
						))}
					</div>
				))}
			</div>
		</>
	);
}
