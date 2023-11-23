"use strict";
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
var playwright_1 = __importDefault(require("@axe-core/playwright"));
var fs_1 = __importDefault(require("fs"));
function axeCore(page, url) {
    return __awaiter(this, void 0, void 0, function () {
        var acessibilityScanResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.goto(url, { timeout: 800000 })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, new playwright_1.default({ page: page }).analyze()];
                case 2:
                    acessibilityScanResults = _a.sent();
                    fs_1.default.writeFileSync("report/acessibilidade/acessibilidade_report.json", JSON.stringify(acessibilityScanResults.violations, null, 2));
                    assertAcessibility(acessibilityScanResults.violations);
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = axeCore;
var assertAcessibility = function (violations) {
    if (violations.lenght) {
        var errorMessage_1 = "Encontradas violação de acessibilidade:\n\n";
        violations.forEach(function (violation, index) {
            errorMessage_1 += "# Viola\u00E7\u00E3o ".concat(index + 1, " Descr\u00E7\u00E3o: ").concat(violation.description, ":\n");
            errorMessage_1 += "# Impacto: ".concat(violation.impact, "\n");
            errorMessage_1 += "# Elementos afetados: ".concat(violation.nodes
                .map(function (node) { return node.target; })
                .join(","), "\n");
            var occurences = violation.nodes;
            occurences.forEach(function (occurence) {
                errorMessage_1 += "## Ocorr\u00EAncia:\n\n";
                errorMessage_1 += "## Resumo da falha: ".concat(occurence.failureSumary, "\n");
                errorMessage_1 += "## Resumo da falha html: ".concat(occurence.html, "\n");
                errorMessage_1 += "\n";
            });
        });
        throw new Error(errorMessage_1);
    }
};
