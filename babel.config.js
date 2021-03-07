const presets = [
    ["@babel/preset-env", { useBuiltIns: 'entry' }],
    "@babel/preset-react"
];
const plugins = [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    // необходимость
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from",

    // удобство
    // https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
    "@babel/plugin-proposal-optional-chaining",

    // оптимизация
    // https://babeljs.io/docs/en/next/babel-plugin-transform-regexp-constructors
    'babel-plugin-transform-regexp-constructors',

    // https://babeljs.io/docs/en/next/babel-plugin-minify-type-constructors
    'babel-plugin-minify-type-constructors',

    // https://babeljs.io/docs/en/next/babel-plugin-minify-constant-folding
    'babel-plugin-minify-constant-folding',

    // https://babeljs.io/docs/en/next/babel-plugin-transform-minify-booleans
    'babel-plugin-transform-minify-booleans',

    // https://babeljs.io/docs/en/next/babel-plugin-transform-merge-sibling-variables
    'babel-plugin-transform-merge-sibling-variables'
];

if (process.env.ENV === "production") {
    [
        "@babel/plugin-transform-react-constant-elements",
        "@babel/plugin-transform-react-inline-elements",
        "babel-plugin-transform-react-remove-prop-types"
    ].forEach(plugin => plugins.push(plugin));
}

module.exports = { presets, plugins };
