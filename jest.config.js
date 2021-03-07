module.exports = {
    verbose: true,
    testURL: "http://localhost/",
    "roots": [
        "<rootDir>/src"
    ],
    "testRegex": "^.+\\.test\\.(js|jsx)$",
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|svg)$": "node-noop",
        "\\.(css|pcss)$": "identity-obj-proxy"
    },
    setupFiles: [
        "./config/jest-setup.js"
    ]
};
