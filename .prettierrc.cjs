/** @type {import("prettier").Config} */
const config = {
	trailingComma: "es5",
	semi: true,
	singleQuote: true,
	jsxBracketSameLine: false,
	arrowParens: "avoid",
	printWidth: 80,
	tabWidth: 2,
	jsxSingleQuote: true,
	bracketSpacing: true,
	bracketSameLine: true,
	importOrder: ["^vue/(.*)$", "^naive-ui/(.*)$", "^@/(.*)$", "^[./]"],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	plugins: ["@trivago/prettier-plugin-sort-imports"],
};

module.exports = config;
