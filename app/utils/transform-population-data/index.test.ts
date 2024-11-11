import type { PopulationComposition } from "~/types/resas";
import { PopulationCategory, transformPopulationData } from "./";

describe("transformPopulationData", () => {
	it("should transform population data correctly", () => {
		const prefectureCodes = ["01", "02", "03"];
		const data: { boundaryYear: number; data: PopulationComposition[] }[] = [
			{
				boundaryYear: 2020,
				data: [
					{
						label: "総人口",
						data: [
							{ year: 2020, value: 1000 },
							{ year: 2021, value: 2000 },
							{ year: 2022, value: 3000 },
						],
					},
					{
						label: "年少人口",
						data: [
							{ year: 2020, value: 1000 },
							{ year: 2021, value: 2000 },
							{ year: 2022, value: 3000 },
						],
					},
					{
						label: "生産年齢人口",
						data: [
							{ year: 2020, value: 1000 },
							{ year: 2021, value: 2000 },
							{ year: 2022, value: 3000 },
						],
					},
					{
						label: "老年人口",
						data: [
							{ year: 2020, value: 1000 },
							{ year: 2021, value: 2000 },
							{ year: 2022, value: 3000 },
						],
					},
				],
			},
			{
				boundaryYear: 2021,
				data: [
					{
						label: "総人口",
						data: [
							{ year: 2020, value: 4000 },
							{ year: 2021, value: 5000 },
							{ year: 2022, value: 6000 },
						],
					},
					{
						label: "年少人口",
						data: [
							{ year: 2020, value: 4000 },
							{ year: 2021, value: 5000 },
							{ year: 2022, value: 6000 },
						],
					},
					{
						label: "生産年齢人口",
						data: [
							{ year: 2020, value: 4000 },
							{ year: 2021, value: 5000 },
							{ year: 2022, value: 6000 },
						],
					},
					{
						label: "老年人口",
						data: [
							{ year: 2020, value: 4000 },
							{ year: 2021, value: 5000 },
							{ year: 2022, value: 6000 },
						],
					},
				],
			},
			{
				boundaryYear: 2022,
				data: [
					{
						label: "総人口",
						data: [
							{ year: 2020, value: 7000 },
							{ year: 2021, value: 8000 },
							{ year: 2022, value: 9000 },
						],
					},
					{
						label: "年少人口",
						data: [
							{ year: 2020, value: 7000 },
							{ year: 2021, value: 8000 },
							{ year: 2022, value: 9000 },
						],
					},
					{
						label: "生産年齢人口",
						data: [
							{ year: 2020, value: 7000 },
							{ year: 2021, value: 8000 },
							{ year: 2022, value: 9000 },
						],
					},
					{
						label: "老年人口",
						data: [
							{ year: 2020, value: 7000 },
							{ year: 2021, value: 8000 },
							{ year: 2022, value: 9000 },
						],
					},
				],
			},
		];

		const transformedData = transformPopulationData(prefectureCodes, data);

		// keys of transformedData should be PopulationCategory
		expect(Object.keys(transformedData)).toEqual(
			Object.values(PopulationCategory),
		);

		expect(transformedData[PopulationCategory.TotalPopulation]).toEqual([
			{ year: 2020, "01": 1000, "02": 4000, "03": 7000 },
			{ year: 2021, "01": 2000, "02": 5000, "03": 8000 },
			{ year: 2022, "01": 3000, "02": 6000, "03": 9000 },
		]);

		expect(transformedData[PopulationCategory.YoungPopulation]).toEqual([
			{ year: 2020, "01": 1000, "02": 4000, "03": 7000 },
			{ year: 2021, "01": 2000, "02": 5000, "03": 8000 },
			{ year: 2022, "01": 3000, "02": 6000, "03": 9000 },
		]);

		expect(transformedData[PopulationCategory.WorkingAgePopulation]).toEqual([
			{ year: 2020, "01": 1000, "02": 4000, "03": 7000 },
			{ year: 2021, "01": 2000, "02": 5000, "03": 8000 },
			{ year: 2022, "01": 3000, "02": 6000, "03": 9000 },
		]);

		expect(transformedData[PopulationCategory.ElderlyPopulation]).toEqual([
			{ year: 2020, "01": 1000, "02": 4000, "03": 7000 },
			{ year: 2021, "01": 2000, "02": 5000, "03": 8000 },
			{ year: 2022, "01": 3000, "02": 6000, "03": 9000 },
		]);
	});
});
