module.exports = {
    parser: false,
    plugins: {
        'postcss-import': {}, // This plugin should probably be used as the first plugin of your list
        'postcss-mixins': {}, // Note, that you must set this plugin before postcss-simple-vars and postcss-nested
        'postcss-calc': {},
        'postcss-custom-media': {},
        'postcss-custom-properties': {},
        'postcss-nested': {},
        'postcss-url': { url: 'rebase' },
        autoprefixer: {} // use ../.browserslistrc
    }
};
