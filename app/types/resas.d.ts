// src/types/resas.d.ts
export interface Prefecture {
	prefCode: string;
	prefName: string;
}

export interface ResasResponse<T> {
	message: string | null;
	result: T;
}

export interface PopulationData {
	year: number;
	value: number;
	rate?: number;
}

export interface PopulationComposition {
	label: string;
	data: PopulationData[];
}

export interface PopulationCompositionResponse {
	boundaryYear: number;
	data: PopulationComposition[];
}

export interface ResasResponse<T> {
	message: string | null;
	result: T;
}
export interface FetchPopulationOptions {
	prefCode: string;
}
