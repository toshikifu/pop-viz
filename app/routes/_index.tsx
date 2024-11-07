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
import PopulationChart from "~/src/views/PopulationChart";
import {
	PopulationCategory,
	transformPopulationData,
} from "~/utils/transform-population-data";

export const clientLoader = async ({ request }: ClientLoaderFunctionArgs) => {
	const prefectures = await fetchPrefectures();

	const searchParams = new URLSearchParams(request.url.split("?")[1]);

	const prefCodes = searchParams.getAll("prefCode");

	if (prefCodes) {
		const requests = prefCodes.map((prefCode) =>
			fetchPopulationComposition({ prefCode }),
		);
		const responses = await Promise.all(requests);
		return { prefectures, populationData: responses };
	}
	return { prefectures };
};

export default function Index() {
	const { prefectures, populationData } = useLoaderData<typeof clientLoader>();
	const [searchParams] = useSearchParams();
	const prefCodes = searchParams.getAll("prefCode");

	const getPrefNameByIndex = (index: number) => {
		return prefectures.at(index)?.prefName;
	};

	const getPrefNameByCode = (prefCode: string) => {
		console.log(prefCode);
		return (
			prefectures.find((pref) => Number(pref.prefCode) === Number(prefCode))
				?.prefName || prefCode
		);
	};

	const transformedData = transformPopulationData(
		prefCodes,
		populationData || [],
	);
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
								defaultChecked={prefCodes.includes(
									prefecture.prefCode.toString(),
								)}
							/>
							<p>{prefecture.prefName}</p>
						</label>
					))}
				</div>
			</Form>

			<h2 className="mt-6 text-4xl">人口推移グラフ</h2>
			<Card className="p-4 mt-4 h-96">
				<PopulationChart
					data={transformedData[PopulationCategory.TotalPopulation]}
					xKey={"year"}
					lineKeys={prefCodes}
					legendFormatter={getPrefNameByCode}
				/>{" "}
			</Card>
		</>
	);
}
