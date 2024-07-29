import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/",
	plugins: [
		react(),
		imagetools({
			defaultDirectives: (url) => {
				return new URLSearchParams({
					format: "webp",
				});
			},
		}),
	],
	build: {
		outDir: "build",
	},
});
