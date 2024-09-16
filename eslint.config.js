import pluginJs from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

export default [
	{ files: ["**/*.{js,mjs,cjs,jsx}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	{ settings: { react: { version: "detect" } } },
	{ ignores: ["build/*"] },
	{
		plugins: { jsdoc },
		rules: {
			"react/react-in-jsx-scope": "off",
			"react/jsx-max-depth": [2, { max: 4 }],
			"jsdoc/require-description": "warn",
		},
	},
];
