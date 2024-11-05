import type { PopulationComposition } from "~/types/resas";

export enum PopulationCategory {
	TotalPopulation = "総人口",
	YoungPopulation = "年少人口",
	WorkingAgePopulation = "生産年齢人口",
	ElderlyPopulation = "老年人口",
}

interface YearlyData {
	year: number;
	[prefCode: string]: number;
}

export type TransformedData = {
	[key in PopulationCategory]: YearlyData[];
};

export function transformPopulationData(
	prefectureCodes: string[],
	data: { boundaryYear: number; data: PopulationComposition[] }[],
): TransformedData {
	const result: TransformedData = {
		[PopulationCategory.TotalPopulation]: [],
		[PopulationCategory.YoungPopulation]: [],
		[PopulationCategory.WorkingAgePopulation]: [],
		[PopulationCategory.ElderlyPopulation]: [],
	};

	for (const [index, prefectureData] of data.entries()) {
		const prefCode = prefectureCodes[index];

		for (let i = 0; i < prefectureData.data.length; i++) {
			const category = Object.values(PopulationCategory)[i];

			for (const { year, value } of prefectureData.data[i].data) {
				// 該当カテゴリと年次データの項目を探すか、無ければ新規作成
				let yearData = result[category].find((data) => data.year === year);
				if (!yearData) {
					yearData = { year };
					result[category].push(yearData);
				}
				// 都道府県コードをキーに値を追加
				yearData[prefCode] = value;
			}
		}
	}

	// 各カテゴリごとの年次データを昇順に並べる
	for (const key of Object.keys(result) as Array<PopulationCategory>) {
		result[key].sort((a, b) => a.year - b.year);
	}

	return result;
}
