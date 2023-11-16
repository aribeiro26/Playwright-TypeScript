"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDifference = exports.compareToBaseImage = exports.getImagePath = void 0;
var config_1 = require("../../support/config");
var fs_extra_1 = require("fs-extra");
var pixelmatch_1 = __importDefault(require("pixelmatch"));
var pngjs_1 = require("pngjs");
var fs = __importStar(require("fs"));
var fs_1 = require("fs");
var path_1 = require("path");
function getImagePath(customWorld, name, options) {
    var _a;
    return (0, path_1.join)("report/screenshots", ((_a = customWorld.feature) === null || _a === void 0 ? void 0 : _a.uri) || "", (options === null || options === void 0 ? void 0 : options.skipOs) ? "" : process.platform, process.env.BRWS || "chrome", "".concat(name, ".png"));
}
exports.getImagePath = getImagePath;
function compareToBaseImage(customWorld, name, screenshot, threshold) {
    return __awaiter(this, void 0, void 0, function () {
        var baseImage, baseImagePath, baseImgExist, img1, difference;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    baseImagePath = getImagePath(customWorld, name);
                    return [4 /*yield*/, (0, fs_extra_1.pathExists)(baseImagePath)];
                case 1:
                    baseImgExist = _a.sent();
                    if (!baseImgExist) return [3 /*break*/, 2];
                    baseImage = pngjs_1.PNG.sync.read(fs.readFileSync(baseImagePath));
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, (0, fs_extra_1.ensureFile)(baseImagePath)];
                case 3:
                    _a.sent();
                    (0, fs_1.writeFileSync)(baseImagePath, screenshot);
                    customWorld.log("The base Image doesn't exist, a screenshot was taken to ".concat(baseImagePath, " so it can be used for next run"));
                    return [2 /*return*/];
                case 4:
                    img1 = pngjs_1.PNG.sync.read(screenshot);
                    difference = getDifference(name, img1, baseImage, threshold);
                    if (!difference) return [3 /*break*/, 6];
                    return [4 /*yield*/, customWorld.attach(difference, "image/png;base64")];
                case 5:
                    _a.sent();
                    throw new Error("Screenshot does not match : ".concat(baseImagePath));
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.compareToBaseImage = compareToBaseImage;
/**
 * Returns the difference between 2 images
 * @param img1
 * @param img2
 * @param threshold the difference threshold
 */
function getDifference(name, img1, img2, threshold) {
    if (threshold === void 0) { threshold = config_1.visualcompConfig.IMG_THRESHOLD; }
    var width = img2.width, height = img2.height;
    var diff = new pngjs_1.PNG({ width: width, height: height });
    var difference = (0, pixelmatch_1.default)(img1.data, img2.data, diff.data, width, height, threshold);
    if (difference > 0) {
        (0, fs_1.writeFileSync)("report/screenshots/".concat(process.platform, "/").concat(process.env.BRWS || "chrome", "/").concat(name, "_diff.png"), pngjs_1.PNG.sync.write(diff));
        return pngjs_1.PNG.sync.write(diff);
    }
    return undefined;
}
exports.getDifference = getDifference;
