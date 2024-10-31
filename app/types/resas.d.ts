// src/types/resas.d.ts
export interface Prefecture {
	prefCode: number;
	prefName: string;
}

export interface ResasResponse<T> {
	message: string | null;
	result: T;
}
