"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var enviroments_json_1 = __importDefault(require("../config/enviroments/enviroments.json"));
var environments = {
    hml: enviroments_json_1.default.hml,
    local: enviroments_json_1.default.local,
};
var dev = {
    Node_Env: process.env.NODE_ENV || "hml",
    dev: (_a = process.env.DEV) === null || _a === void 0 ? void 0 : _a.includes("true"),
};
var SelectEnv = dev.dev || ["hml"].includes(dev.Node_Env)
    ? dev.Node_Env
    : (dev.Node_Env = "local");
var Environments = {
    setEnv: function () {
        if (environments.hasOwnProperty(SelectEnv)) {
            return environments[SelectEnv];
        }
        else {
            throw new Error("Environment '".concat(SelectEnv, "' not defined"));
        }
    },
};
var SetEnviroments = function () {
    var Envs = {
        server: Environments.setEnv().server || process.env.url || typeof undefined,
        headless: dev.dev === true
            ? (Environments.setEnv().headless = false)
            : Environments.setEnv().headless || true,
        envA: Environments.setEnv().envA ||
            process.env.ENVA ||
            process.env.envA ||
            typeof undefined,
        envB: Environments.setEnv().envB ||
            process.env.ENVB ||
            process.env.envB ||
            typeof undefined,
    };
    return Envs;
};
exports.default = SetEnviroments;
