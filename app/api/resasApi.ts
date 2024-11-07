// src/api/resasApi.ts
import type {
	FetchPopulationOptions,
	PopulationCompositionResponse,
	Prefecture,
	ResasResponse,
} from "~/types/resas";
import axiosClient from "~/utils/axiosClient";

export const fetchPrefectures = async (): Promise<Prefecture[]> => {
	try {
		const response =
			await axiosClient.get<ResasResponse<Prefecture[]>>("/prefectures");
		return response.data.result;
	} catch (error) {
		console.error("Error fetching prefectures: ", error);
		throw error;
	}
};

export const fetchPopulationComposition = async ({
	prefCode,
}: FetchPopulationOptions): Promise<PopulationCompositionResponse> => {
	try {
		const response = await axiosClient.get<
			ResasResponse<PopulationCompositionResponse>
		>("/population/composition/perYear", {
			params: {
				prefCode,
			},
		});
		return response.data.result;
	} catch (error) {
		console.error("Error fetching population composition: ", error);
		throw error;
	}
};
