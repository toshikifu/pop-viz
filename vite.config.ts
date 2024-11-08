/// <reference types="vitest/config" />
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
	interface Future {
		v3_singleFetch: true;
	}
}

export default defineConfig({
	base: "/pop-viz/",
	plugins: [
		!process.env.VITEST &&
			remix({
				basename: "/pop-viz/",
				ssr: false,
				future: {
					v3_fetcherPersist: true,
					v3_relativeSplatPath: true,
					v3_throwAbortReason: true,
					v3_singleFetch: true,
					v3_lazyRouteDiscovery: true,
				},
			}),
		tsconfigPaths(),
	],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./vitest-setup.ts"],
	},
});
