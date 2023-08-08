/** @type {import("prettier").Config} */
const config = {
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    trailingComma: "es5",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "always",
    endOfLine: "auto",
}

module.exports = config
