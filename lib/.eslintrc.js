module.exports = {
    
    env: {
        browser: true,
        es2021: true,
    
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    rules: {
    
        indent: ["error", 4],
        quotes: "off",
        "comma-dangle": "off",
        "no-extra-semi": "off",
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": " never",
            "asyncArrow": "always",

        }]
    }

}