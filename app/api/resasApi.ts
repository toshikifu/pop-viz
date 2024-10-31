// src/api/resasApi.ts
import type { Prefecture, ResasResponse } from "~/types/resas";
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
