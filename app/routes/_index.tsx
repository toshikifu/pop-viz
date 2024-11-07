import {
	type ClientLoaderFunctionArgs,
	Form,
	useLoaderData,
	useSearchParams,
} from "@remix-run/react";
import { useState } from "react";
import { fetchPopulationComposition, fetchPrefectures } from "~/api/resasApi";
import Button from "~/src/ui/Button";
import Card from "~/src/ui/Card";
import Checkbox from "~/src/ui/Checkbox";
import PopulationChart from "~/src/views/PopulationChart";
import Select from "~/src/views/Select";
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

	const [selectedCategory, setSelectedCategory] = useState<PopulationCategory>(
		PopulationCategory.TotalPopulation,
	);

	const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCategory(e.target.value as PopulationCategory);
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

			<div className="flex items-center mt-6 gap-4">
				<h2 className="text-4xl">人口推移グラフ</h2>
				<div className="flex items-center gap-2">
					<h3 className="text-lg">表示カテゴリ: </h3>
					<Select value={selectedCategory} onChange={handleCategoryChange} />
				</div>
			</div>
			<Card className="p-4 mt-4 h-96">
				<PopulationChart
					data={transformedData[selectedCategory]}
					xKey={"year"}
					lineKeys={prefCodes}
					legendFormatter={getPrefNameByCode}
				/>{" "}
			</Card>
		</>
	);
}
