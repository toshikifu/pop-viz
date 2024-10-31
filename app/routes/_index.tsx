import { useLoaderData } from "@remix-run/react";
import { fetchPrefectures } from "~/api/resasApi";
import type { Prefecture } from "~/types/resas";

export const clientLoader = async (): Promise<Prefecture[]> => {
	const prefectures = await fetchPrefectures();
	return prefectures;
};

export default function Index() {
	const prefectures = useLoaderData<typeof clientLoader>();
	return (
		<div>
			{prefectures.map((prefecture) => (
				<div key={prefecture.prefCode}>{prefecture.prefName}</div>
			))}
		</div>
	);
}
