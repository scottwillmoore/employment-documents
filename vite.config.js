import react from "@vitejs/plugin-react-swc";
import lightningcss from "vite-plugin-lightningcss";

/** @type {import("vite").UserConfig} */
export default {
	plugins: [lightningcss(), react()],
	build: {
		outDir: "./outputs",
	},
};
