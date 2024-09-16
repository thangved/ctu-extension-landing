import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
const _plugins = [
	react(),
	imagetools({
		defaultDirectives: () => {
			return new URLSearchParams({
				format: "webp",
			});
		},
	}),
];
_plugins.unshift(MillionLint.vite());
export default defineConfig({
	base: "/",
	plugins: _plugins,
	build: {
		outDir: "build",
	},
});
