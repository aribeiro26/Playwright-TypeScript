"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SetEnvironments = function (envConfig) {
    if (envConfig === void 0) { envConfig = defaultEnvConfig; }
    var nodeEnv = process.env.NODE_ENV || "local";
    var selectedEnvConfig = envConfig[nodeEnv] || envConfig['default'] || defaultEnvConfig['default'];
    if (!selectedEnvConfig) {
        throw new Error("Environment '".concat(nodeEnv, "' not defined"));
    }
    var envs = {};
    for (var key in defaultEnvConfig['default']) {
        envs[key] = selectedEnvConfig[key] !== undefined ? selectedEnvConfig[key] : defaultEnvConfig['default'][key];
    }
    return envs;
};
var defaultEnvConfig = {
    default: {
        server: "http://google.com.br",
        headless: true,
    }
};
exports.default = SetEnvironments;
