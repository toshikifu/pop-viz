import {
	type ClientLoaderFunctionArgs,
	Form,
	useLoaderData,
	useSearchParams,
} from "@remix-run/react";
import { fetchPopulationComposition, fetchPrefectures } from "~/api/resasApi";
import Button from "~/src/ui/Button";
import Card from "~/src/ui/Card";
import Checkbox from "~/src/ui/Checkbox";

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
				<div className="flex items-center gap-2">
					<h2 className="text-4xl">都道府県</h2>
					<Button className="w-20 h-12" type="submit">
						決定
					</Button>
				</div>

				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-2 mt-4">
					{prefectures.map((prefecture) => (
						<label
							key={prefecture.prefCode}
							htmlFor={prefecture.prefCode.toString()}
							className="flex items-center gap-2"
						>
							<Checkbox
								name="prefCode"
								id={prefecture.prefCode}
								value={prefecture.prefCode}
								defaultChecked={searchParams
									.getAll("prefCode")
									.includes(prefecture.prefCode.toString())}
							/>
							<p>{prefecture.prefName}</p>
						</label>
					))}
				</div>
			</Form>

			<h2 className="mt-6 text-4xl">人口推移グラフ</h2>
			<Card className="p-3">
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
			</Card>
		</>
	);
}
