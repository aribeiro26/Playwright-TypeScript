"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.testFunctions = void 0;
var globalthis_1 = __importDefault(require("../types/globalthis"));
var test_1 = require("@playwright/test");
var testFunctions = /** @class */ (function () {
    function testFunctions() {
        var _this = this;
        /**
         * Executa Debug do E2E - Abrindo Ispect do Playwright
         * Exemplo de Uso
         * js
         * await this.Debug()
         *
         */
        this.Debug = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, globalthis_1.default.page.pause()
                    /**
                     * Executa um clique em um elemento ou em um elemento com um papel (role).
                     *
                     * @param element - O seletor CSS do elemento a ser clicado
                     * @param locatorOptions - As opções do seletor utilizado para localizar o elemento
                     * @param role - O papel (role) do elemento a ser clicado
                     * @param options - As opções utilizadas para localizar o elemento por papel (role)
                     * @param clickOptions - As opções utilizadas para realizar o clique
                     * @param clickOptions.timeout - O tempo máximo em segundos para esperar o elemento estar disponível antes de clicar (padrão: 60 segundos)
                     *
                     * @returns Uma promessa que será resolvida assim que o clique for realizado com sucesso
                     *
                     * @throws Um erro se os parâmetros fornecidos forem inválidos ou se o clique não for bem sucedido
                     * Exemplo de Uso
                     * js
                     * await this.Executeclick('directions',{hastext:"ola")
                     * await this.Executeclick('directions',{hastext:"ola"},undefined,{},{timeout: 50})
                     *
                     */
                ];
                case 1: return [2 /*return*/, _a.sent()
                    /**
                     * Executa um clique em um elemento ou em um elemento com um papel (role).
                     *
                     * @param element - O seletor CSS do elemento a ser clicado
                     * @param locatorOptions - As opções do seletor utilizado para localizar o elemento
                     * @param role - O papel (role) do elemento a ser clicado
                     * @param options - As opções utilizadas para localizar o elemento por papel (role)
                     * @param clickOptions - As opções utilizadas para realizar o clique
                     * @param clickOptions.timeout - O tempo máximo em segundos para esperar o elemento estar disponível antes de clicar (padrão: 60 segundos)
                     *
                     * @returns Uma promessa que será resolvida assim que o clique for realizado com sucesso
                     *
                     * @throws Um erro se os parâmetros fornecidos forem inválidos ou se o clique não for bem sucedido
                     * Exemplo de Uso
                     * js
                     * await this.Executeclick('directions',{hastext:"ola")
                     * await this.Executeclick('directions',{hastext:"ola"},undefined,{},{timeout: 50})
                     *
                     */
                ];
            }
        }); }); };
        /**
         * Insere um texto em um elemento de entrada.
         *
         * @param element - O seletor CSS do elemento de entrada
         * @param locatorOptions - As opções do seletor utilizado para localizar o elemento
         * @param text - O texto a ser inserido no elemento de entrada
         * @param role - O papel (role) do elemento de entrada
         * @param options - As opções utilizadas para localizar o elemento por papel (role)
         * @param fillOp - As opções utilizadas para preencher o texto no elemento de entrada
         * @param fillOp.noWaitAfter - Se verdadeiro, não aguardará ações de rede após o preenchimento (padrão: true)
         * @param fillOp.timeout - O tempo máximo em milissegundos para esperar o elemento estar disponível antes de preencher (padrão: 60 segundos)
         * @returns Uma promessa que será resolvida assim que o texto for preenchido com sucesso
         * @throws Um erro se os parâmetros fornecidos forem inválidos ou se a operação de preenchimento falhar
         * Exemplo de Uso
         * js
         * await this.TypeText('input',{hastext:"ola")
         * await this.TypeText('input',{hastext:"ola"},undefined,{},{timeout: 50})
         *
         */
        this.TypeText = function (element, locatorOptions, text, role, options, fillOp) {
            if (locatorOptions === void 0) { locatorOptions = {}; }
            if (options === void 0) { options = {}; }
            if (fillOp === void 0) { fillOp = {
                noWaitAfter: true,
                timeout: 60,
            }; }
            return __awaiter(_this, void 0, void 0, function () {
                var timeoutSeconds;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            timeoutSeconds = fillOp.timeout ? fillOp.timeout * 1000 : 60000;
                            if (!(role === undefined && element !== "")) return [3 /*break*/, 2];
                            return [4 /*yield*/, globalthis_1.default.page
                                    .locator(element, locatorOptions)
                                    .fill(text, __assign(__assign({}, fillOp), { timeout: timeoutSeconds }))];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            if (!(element !== "" && role !== undefined)) return [3 /*break*/, 4];
                            return [4 /*yield*/, globalthis_1.default.page
                                    .locator(element, locatorOptions)
                                    .getByRole(role, options)
                                    .fill(text, __assign(__assign({}, __assign(__assign({}, fillOp), { timeout: timeoutSeconds })), { timeout: timeoutSeconds }))];
                        case 3: return [2 /*return*/, _a.sent()];
                        case 4:
                            if (!(element === "" && role !== undefined)) return [3 /*break*/, 6];
                            return [4 /*yield*/, globalthis_1.default.page
                                    .getByRole(role, options)
                                    .fill(text, __assign(__assign({}, fillOp), { timeout: timeoutSeconds }))];
                        case 5: return [2 /*return*/, _a.sent()];
                        case 6: throw new Error("Parâmetros inválidos.");
                    }
                });
            });
        };
        /**
         * Retorna um objeto do tipo Locator que representa o elemento encontrado na página.
         *
         * @async
         * @function GetElement
         * @param {string} element - O seletor do elemento que se deseja encontrar na página.
         * @param {ILocator} [options] - Informações adicionais para localizar o elemento.
         * @returns {Promise<Locator>} Um objeto do tipo Locator que representa o elemento encontrado.
         * Exemplo de Uso
         * js
         * await this.GetElement('input',{hastext:"ola")
         * await this.GetElement('input',{hastext:"ola"})
         *
         */
        this.GetElement = function (element, locatorOptions) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, globalthis_1.default.page.locator(element, locatorOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /**
         * Salva o estado de armazenamento da página.
         *
         * @async
         * @param {authFile} [authfile={ path: 'playwright/.auth/user.json' }] - O arquivo de autenticação.
         * @returns {Promise<void>} - Uma Promise que resolve quando o estado de armazenamento da página é salvo.
         *
         * @example
         * // Salva o estado de armazenamento da página.
         * await SetStorage();
         */
        this.SetStorage = function (authfile) {
            if (authfile === void 0) { authfile = { path: "playwright/.auth/user.json" }; }
            return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, globalthis_1.default.page.context().storageState(authfile)
                    /**
                     * Obtém uma nova página com os parâmetros especificados.
                     *
                     * @async
                     * @param {*} [params]
                     * @param {IoptionsPage} [options={ timeout: 15000 }] - As opções de espera da nova página.
                     * @returns {Promise<Page>} - Uma Promise que resolve com a nova página.
                     *
                     * @example
                     * // Obtém uma nova página com os parâmetros especificados.
                     * const newPage = await GetNewPage();
                     * global.page = await newPage
                     *
                     */
                ];
            }); });
        };
        /**
         * Obtém uma nova página com os parâmetros especificados.
         *
         * @async
         * @param {*} [params]
         * @param {IoptionsPage} [options={ timeout: 15000 }] - As opções de espera da nova página.
         * @returns {Promise<Page>} - Uma Promise que resolve com a nova página.
         *
         * @example
         * // Obtém uma nova página com os parâmetros especificados.
         * const newPage = await GetNewPage();
         * global.page = await newPage
         *
         */
        this.GetNewPage = function (params, options) {
            if (options === void 0) { options = { timeout: 15000 }; }
            return __awaiter(_this, void 0, void 0, function () {
                var newPage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.all([
                                globalthis_1.default.context.waitForEvent("page", options),
                                params,
                            ])];
                        case 1:
                            newPage = (_a.sent())[0];
                            return [2 /*return*/, newPage];
                    }
                });
            });
        };
        /**
         * Este metodo aguarda tempo definido em segundos
         * @param options.timeout - O tempo máximo em segundos para esperar antes de ir para próximo de método (padrão: 60 segundos)
         * Exemplo de uso
         * js
         * await this.WaitForTimeout({timeout: 60});
         *
         */
        this.WaitForTimeout = function (options) { return __awaiter(_this, void 0, void 0, function () {
            var timeoutSeconds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timeoutSeconds = options.timeout ? options.timeout * 1000 : 60000;
                        return [4 /*yield*/, globalthis_1.default.page.waitForTimeout(timeoutSeconds)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Executa uma função no contexto da página.
         *
         * @async
         * @param {Function} fn - A função a ser executada.
         * @returns {Promise<any>} - Uma Promise que resolve com o resultado da função.
         *
         * @example
         * // Imprime "Olá, mundo!" no console do navegador.
         * await ExecuteJS(() => {
         *     console.log('Olá, mundo!');
         * });
         */
        this.ExecuteJS = function (fn) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, globalthis_1.default.page.evaluate(fn)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /**
         * Limpa os cookies do contexto atual.
         */
        this.ClearCookies = function () { return globalthis_1.default.context.clearCookies(); };
        /**
         * Adiciona cookies ao contexto atual.
         *
         * @param {Cookie[]} cookies - Os cookies a serem adicionados.
         */
        this.AddCookies = function (cookies) { return globalthis_1.default.context.addCookies(cookies); };
        /**
         * Faz uma requisição GET no endpoint especificado.
         *
         * @async
         * @param {string} endpoint - O endpoint da API.
         * @param {IApiOptions} headers - As opções de cabeçalho da requisição.
         * @returns {Promise<any>} - Uma Promise que resolve com o resultado da requisição.
         *
         * @example
         * // Faz uma requisição GET para a URL especificada.
         * const result = await GetRequest('https://exemplo.com/api', { headers: { 'Authorization': 'Bearer token' } });
         */
        this.GetRequest = function (endpoint, headers) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, globalthis_1.default.page.request.get(endpoint, headers)
                    /**
                     * Faz uma requisição POST no endpoint especificado.
                     *
                     * @async
                     * @param {string} endpoint - O endpoint da API.
                     * @param {IApiOptions} headers - As opções de cabeçalho da requisição.
                     * @returns {Promise<any>} - Uma Promise que resolve com o resultado da requisição.
                     *
                     * @example
                     * // Faz uma requisição POST para a URL especificada.
                     * const result = await PostRequest('https://exemplo.com/api', { headers: { 'Authorization': 'Bearer token' }, data: { 'campo1': 'valor1', 'campo2': 'valor2' } });
                     */
                ];
                case 1: return [2 /*return*/, _a.sent()
                    /**
                     * Faz uma requisição POST no endpoint especificado.
                     *
                     * @async
                     * @param {string} endpoint - O endpoint da API.
                     * @param {IApiOptions} headers - As opções de cabeçalho da requisição.
                     * @returns {Promise<any>} - Uma Promise que resolve com o resultado da requisição.
                     *
                     * @example
                     * // Faz uma requisição POST para a URL especificada.
                     * const result = await PostRequest('https://exemplo.com/api', { headers: { 'Authorization': 'Bearer token' }, data: { 'campo1': 'valor1', 'campo2': 'valor2' } });
                     */
                ];
            }
        }); }); };
        /**
         * Faz uma requisição POST no endpoint especificado.
         *
         * @async
         * @param {string} endpoint - O endpoint da API.
         * @param {IApiOptions} headers - As opções de cabeçalho da requisição.
         * @returns {Promise<any>} - Uma Promise que resolve com o resultado da requisição.
         *
         * @example
         * // Faz uma requisição POST para a URL especificada.
         * const result = await PostRequest('https://exemplo.com/api', { headers: { 'Authorization': 'Bearer token' }, data: { 'campo1': 'valor1', 'campo2': 'valor2' } });
         */
        this.PostRequest = function (endpoint, headers) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, globalthis_1.default.page.request.post(endpoint, headers)
                    /**
                     * Redireciona a página atual para uma nova URL.
                     *
                     * @async
                     * @function Redirect
                     * @param {string} url - A URL para onde a página deve ser redirecionada.
                     * @param {IgotoOptions} [gotoOptions] - As opções para o redirecionamento da página.
                     * @param {number} [gotoOptions.timeout=60] - O tempo máximo em segundos que a página deve aguardar o redirecionamento.
                     * @param {LoadEvent} [gotoOptions.waitUntil='load'] - O evento de carregamento que a página deve aguardar antes de considerar o redirecionamento concluído.
                     * @returns {Promise<void>} Uma Promise que resolve quando o redirecionamento é concluído.
                     * Exemplo de Uso
                     * js
                     * await this.Redirect("url",{ timeout: 60 })
                     * await this.Redirect("url",{ timeout:" 60,waitUntil: 'load' })
                     *
                     */
                ];
                case 1: return [2 /*return*/, _a.sent()
                    /**
                     * Redireciona a página atual para uma nova URL.
                     *
                     * @async
                     * @function Redirect
                     * @param {string} url - A URL para onde a página deve ser redirecionada.
                     * @param {IgotoOptions} [gotoOptions] - As opções para o redirecionamento da página.
                     * @param {number} [gotoOptions.timeout=60] - O tempo máximo em segundos que a página deve aguardar o redirecionamento.
                     * @param {LoadEvent} [gotoOptions.waitUntil='load'] - O evento de carregamento que a página deve aguardar antes de considerar o redirecionamento concluído.
                     * @returns {Promise<void>} Uma Promise que resolve quando o redirecionamento é concluído.
                     * Exemplo de Uso
                     * js
                     * await this.Redirect("url",{ timeout: 60 })
                     * await this.Redirect("url",{ timeout:" 60,waitUntil: 'load' })
                     *
                     */
                ];
            }
        }); }); };
        /**
         * Redireciona a página atual para uma nova URL.
         *
         * @async
         * @function Redirect
         * @param {string} url - A URL para onde a página deve ser redirecionada.
         * @param {IgotoOptions} [gotoOptions] - As opções para o redirecionamento da página.
         * @param {number} [gotoOptions.timeout=60] - O tempo máximo em segundos que a página deve aguardar o redirecionamento.
         * @param {LoadEvent} [gotoOptions.waitUntil='load'] - O evento de carregamento que a página deve aguardar antes de considerar o redirecionamento concluído.
         * @returns {Promise<void>} Uma Promise que resolve quando o redirecionamento é concluído.
         * Exemplo de Uso
         * js
         * await this.Redirect("url",{ timeout: 60 })
         * await this.Redirect("url",{ timeout:" 60,waitUntil: 'load' })
         *
         */
        this.Redirect = function (url, gotoOptions) {
            if (gotoOptions === void 0) { gotoOptions = { timeout: 200, waitUntil: "load" }; }
            return __awaiter(_this, void 0, void 0, function () {
                var timeoutSeconds;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            timeoutSeconds = gotoOptions.timeout
                                ? gotoOptions.timeout * 1000
                                : 60000;
                            return [4 /*yield*/, globalthis_1.default.page.goto(url, __assign(__assign({}, gotoOptions), { timeout: timeoutSeconds }))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Valida se o texto de um elemento é igual ao texto especificado.
         *
         * @async
         * @param {string} element - O seletor do elemento.
         * @param {string} text - O texto a ser validado.
         *
         * @example
         * // Valida se o texto do elemento <h1> é igual a 'Título'.
         * await ValidateText('h1', 'Título');
         */
        this.ValidateText = function (element, text) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, test_1.expect)(globalthis_1.default.page.locator(element)).toHaveText(text)
                    /**
                     * Valida se a URL atual começa com a URL especificada.
                     *
                     * @async
                     * @param {string} url - A URL a ser validada.
                     * @param {commomOptions} [commomOptions={ timeout: 60 }] - As opções comuns de espera.
                     *
                     * @example
                     * // Valida se a URL atual começa com 'https://exemplo.com'.
                     * await ValidateUrl('https://exemplo.com', { timeout: 30 });
                     */
                ];
                case 1: return [2 /*return*/, _a.sent()
                    /**
                     * Valida se a URL atual começa com a URL especificada.
                     *
                     * @async
                     * @param {string} url - A URL a ser validada.
                     * @param {commomOptions} [commomOptions={ timeout: 60 }] - As opções comuns de espera.
                     *
                     * @example
                     * // Valida se a URL atual começa com 'https://exemplo.com'.
                     * await ValidateUrl('https://exemplo.com', { timeout: 30 });
                     */
                ];
            }
        }); }); };
        /**
         * Valida se a URL atual começa com a URL especificada.
         *
         * @async
         * @param {string} url - A URL a ser validada.
         * @param {commomOptions} [commomOptions={ timeout: 60 }] - As opções comuns de espera.
         *
         * @example
         * // Valida se a URL atual começa com 'https://exemplo.com'.
         * await ValidateUrl('https://exemplo.com', { timeout: 30 });
         */
        this.ValidateUrl = function (url, commomOptions) {
            if (commomOptions === void 0) { commomOptions = { timeout: 60 }; }
            return __awaiter(_this, void 0, void 0, function () {
                var timeoutSeconds;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            timeoutSeconds = commomOptions.timeout
                                ? commomOptions.timeout * 1000
                                : 60000;
                            return [4 /*yield*/, globalthis_1.default.page.waitForURL(function (currentUrl) { return currentUrl.href.startsWith(url); }, __assign(__assign({}, commomOptions), { timeout: timeoutSeconds }))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Pressiona uma tecla ou combinação de teclas no teclado.
         *
         * @async
         * @param {string} [element=''] - O seletor do elemento onde a tecla deve ser pressionada. Se não for especificado, a tecla será pressionada no contexto da página.
         * @param {string} keys - A tecla ou combinação de teclas a ser pressionada.
         *
         * @example
         * // Pressiona a tecla Enter no contexto da página.
         * await KeyBoard('', 'Enter');
         *
         * // Pressiona a tecla Tab no elemento <input>.
         * await KeyBoard('input', 'Tab');
         */
        this.KeyBoard = function (element, keys) {
            if (element === void 0) { element = ""; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(element === "")) return [3 /*break*/, 2];
                            return [4 /*yield*/, globalthis_1.default.page.keyboard.press(keys)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [4 /*yield*/, globalthis_1.default.page.locator(element).press(keys)];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Espera até que a página carregue completamente, de acordo com o estado definido em 'stat'.
         * @async
         * @param {string} [stat='load'] O estado em que a página deve estar para considerar que o carregamento foi concluído.
         * Pode ser uma das seguintes opções: 'load' (padrão), 'domcontentloaded' ou 'networkidle'.
         * @param {Object} [options={ timeout: 60 }] As opções de configuração para a espera.
         * @param {number} [options.timeout=60] O tempo máximo de espera, em segundos.
         * Exemplo de Uso
         * js
         * await this.WaitLoadPage("load",{ timeout: 60 })
         *
         */
        this.WaitLoadPage = function (stat, options) {
            if (stat === void 0) { stat = "load"; }
            if (options === void 0) { options = { timeout: 60 }; }
            return __awaiter(_this, void 0, void 0, function () {
                var timeoutSeconds;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            timeoutSeconds = options.timeout ? options.timeout * 1000 : 60000;
                            return [4 /*yield*/, globalthis_1.default.page.waitForLoadState(stat, __assign(__assign({}, options), { timeout: timeoutSeconds }))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Insere uma senha em um formulário de 6 dígitos.
         *
         * @async
         *
         * @example
         * // Insere a senha "123456" em um formulário.
         * await Passwd();
         */
        this.Passwd = function () { return __awaiter(_this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.WaitLoadPage("domcontentloaded")];
                    case 1:
                        _a.sent();
                        i = 1;
                        _a.label = 2;
                    case 2:
                        if (!(i < 7)) return [3 /*break*/, 5];
                        return [4 /*yield*/, globalthis_1.default.page.click("*text= " + i.toString())];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        /**
         * Valida se um elemento existe na página.
         *
         * @async
         * @param {string} element - O seletor do elemento a ser validado.
         * @returns {Promise<void>} - Uma Promise que resolve quando o elemento existe na página.
         *
         * @example
         * // Valida se o elemento <h1> existe na página.
         * await ValidateElementExist('h1');
         */
        this.ValidateElementExist = function (element) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, globalthis_1.default.page
                            .locator(element)
                            .waitFor({ state: "attached", timeout: 50000 })
                        /**
                         * Valida se um elemento é visível na página.
                         *
                         * @async
                         * @param {string} element - O seletor do elemento a ser validado.
                         * @param {ILocator} [locatorOptions={}] - As opções de localização do elemento.
                         * @param {IoptionsPage} [options] - As opções de espera do elemento.
                         * @returns {Promise<boolean>} - Uma Promise que resolve com um valor booleano indicando se o elemento é visível na página.
                         *
                         * @example
                         * // Valida se o elemento <h1> é visível na página.
                         * await isVisible('h1');
                         */
                    ];
                    case 1: return [2 /*return*/, _a.sent()
                        /**
                         * Valida se um elemento é visível na página.
                         *
                         * @async
                         * @param {string} element - O seletor do elemento a ser validado.
                         * @param {ILocator} [locatorOptions={}] - As opções de localização do elemento.
                         * @param {IoptionsPage} [options] - As opções de espera do elemento.
                         * @returns {Promise<boolean>} - Uma Promise que resolve com um valor booleano indicando se o elemento é visível na página.
                         *
                         * @example
                         * // Valida se o elemento <h1> é visível na página.
                         * await isVisible('h1');
                         */
                    ];
                }
            });
        }); };
        /**
         * Valida se um elemento é visível na página.
         *
         * @async
         * @param {string} element - O seletor do elemento a ser validado.
         * @param {ILocator} [locatorOptions={}] - As opções de localização do elemento.
         * @param {IoptionsPage} [options] - As opções de espera do elemento.
         * @returns {Promise<boolean>} - Uma Promise que resolve com um valor booleano indicando se o elemento é visível na página.
         *
         * @example
         * // Valida se o elemento <h1> é visível na página.
         * await isVisible('h1');
         */
        this.isVisible = function (element, locatorOptions, options) {
            if (locatorOptions === void 0) { locatorOptions = {}; }
            return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, globalthis_1.default.page.locator(element, locatorOptions).isVisible(options)
                        /**
                         * Aguarda até que um elemento seja carregado na página de acordo com as opções fornecidas.
                         *
                         * @async
                         * @function WaitElementLoad
                         * @param {string} element - O seletor do elemento que se deseja aguardar o carregamento.
                         * @param {ILocator} [locatorOptions] - Informações adicionais para localizar o elemento.
                         * @param {TypeElementOptions} [stat='visible'] - O estado que o elemento deve estar antes de ser considerado carregado.
                         * @param {elementRole} [role=undefined] - O papel que o elemento deve ter para ser considerado carregado.
                         * @param {IRoleoptions} [optionsRole] - Informações adicionais para localizar o elemento por papel.
                         * @param {IoptionsPage} [options] - Informações adicionais para aguardar o carregamento do elemento.
                         * @throws {Error} Parâmetros inválidos.
                         * @returns {Promise<void>} Uma Promise que resolve quando o elemento é carregado.
                         * Exemplo de Uso
                         * js
                         * await this.TypeText('input',{hastext:"ola","visible")
                         * await this.TypeText('input',{hastext:"ola","visible",undefined,{},{timeout: 50})
                         *
                         */
                    ];
                    case 1: return [2 /*return*/, _a.sent()
                        /**
                         * Aguarda até que um elemento seja carregado na página de acordo com as opções fornecidas.
                         *
                         * @async
                         * @function WaitElementLoad
                         * @param {string} element - O seletor do elemento que se deseja aguardar o carregamento.
                         * @param {ILocator} [locatorOptions] - Informações adicionais para localizar o elemento.
                         * @param {TypeElementOptions} [stat='visible'] - O estado que o elemento deve estar antes de ser considerado carregado.
                         * @param {elementRole} [role=undefined] - O papel que o elemento deve ter para ser considerado carregado.
                         * @param {IRoleoptions} [optionsRole] - Informações adicionais para localizar o elemento por papel.
                         * @param {IoptionsPage} [options] - Informações adicionais para aguardar o carregamento do elemento.
                         * @throws {Error} Parâmetros inválidos.
                         * @returns {Promise<void>} Uma Promise que resolve quando o elemento é carregado.
                         * Exemplo de Uso
                         * js
                         * await this.TypeText('input',{hastext:"ola","visible")
                         * await this.TypeText('input',{hastext:"ola","visible",undefined,{},{timeout: 50})
                         *
                         */
                    ];
                }
            }); });
        };
        /**
         * Aguarda até que um elemento seja carregado na página de acordo com as opções fornecidas.
         *
         * @async
         * @function WaitElementLoad
         * @param {string} element - O seletor do elemento que se deseja aguardar o carregamento.
         * @param {ILocator} [locatorOptions] - Informações adicionais para localizar o elemento.
         * @param {TypeElementOptions} [stat='visible'] - O estado que o elemento deve estar antes de ser considerado carregado.
         * @param {elementRole} [role=undefined] - O papel que o elemento deve ter para ser considerado carregado.
         * @param {IRoleoptions} [optionsRole] - Informações adicionais para localizar o elemento por papel.
         * @param {IoptionsPage} [options] - Informações adicionais para aguardar o carregamento do elemento.
         * @throws {Error} Parâmetros inválidos.
         * @returns {Promise<void>} Uma Promise que resolve quando o elemento é carregado.
         * Exemplo de Uso
         * js
         * await this.TypeText('input',{hastext:"ola","visible")
         * await this.TypeText('input',{hastext:"ola","visible",undefined,{},{timeout: 50})
         *
         */
        this.WaitElementLoad = function (element, locatorOptions, stat, role, optionsRole, Ioptions) {
            if (locatorOptions === void 0) { locatorOptions = {}; }
            if (stat === void 0) { stat = "visible"; }
            if (role === void 0) { role = undefined; }
            if (optionsRole === void 0) { optionsRole = {}; }
            if (Ioptions === void 0) { Ioptions = { timeout: 60 }; }
            return __awaiter(_this, void 0, void 0, function () {
                var timeoutSeconds, handle, result, handle, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            timeoutSeconds = Ioptions.timeout
                                ? Ioptions.timeout * 1000
                                : 60000;
                            if (!(role === undefined && element !== "")) return [3 /*break*/, 4];
                            return [4 /*yield*/, globalthis_1.default.page.$(element)];
                        case 1:
                            handle = _a.sent();
                            return [4 /*yield*/, (handle === null || handle === void 0 ? void 0 : handle.waitForElementState(stat, __assign(__assign({}, Ioptions), { timeout: timeoutSeconds })))];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, globalthis_1.default.page.locator(element, locatorOptions)];
                        case 3:
                            result = _a.sent();
                            (0, test_1.expect)(result == null ? false : true).toBeTruthy();
                            return [3 /*break*/, 9];
                        case 4:
                            if (!(element !== "" && role !== undefined)) return [3 /*break*/, 8];
                            return [4 /*yield*/, globalthis_1.default.page.$(element)];
                        case 5:
                            handle = _a.sent();
                            return [4 /*yield*/, (handle === null || handle === void 0 ? void 0 : handle.waitForElementState(stat, __assign(__assign({}, Ioptions), { timeout: timeoutSeconds })))];
                        case 6:
                            _a.sent();
                            return [4 /*yield*/, globalthis_1.default.page
                                    .locator(element, locatorOptions)
                                    .getByRole(role, optionsRole)];
                        case 7:
                            result = _a.sent();
                            (0, test_1.expect)(result == null ? false : true).toBeTruthy();
                            return [3 /*break*/, 9];
                        case 8: throw new Error("Parâmetros inválidos.");
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Valida se o título da página é igual ao texto especificado.
         *
         * @async
         * @param {string} textTitle - O texto a ser validado.
         *
         * @example
         * // Valida se o título da página é igual a 'Minha Página'.
         * await ValidateTitle('Minha Página');
         */
        this.ValidateTitle = function (textTitle) { return __awaiter(_this, void 0, void 0, function () {
            var result, validadeTitle;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, globalthis_1.default.page.title()];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); };
                        return [4 /*yield*/, result()];
                    case 1:
                        validadeTitle = (_a.sent()) == textTitle ? true : false;
                        return [4 /*yield*/, (0, test_1.expect)(validadeTitle).toBeTruthy()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Executa uma ação em todos os elementos correspondentes a um seletor.
         *
         * @async
         * @param {string} element - O seletor dos elementos a serem selecionados.
         * @param {(el: ElementHandle) => Promise<void>} action - A ação a ser executada em cada elemento.
         *
         * @example
         * // Clica em todos os elementos <a>.
         * await ExecuteActionsElements('a', async (el) => {
         *     await el.click();
         * });
         */
        this.ExecuteActionsElements = function (element, action) { return __awaiter(_this, void 0, void 0, function () {
            var elements, _i, elements_1, el;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, globalthis_1.default.page.$$(element)];
                    case 1:
                        elements = _a.sent();
                        _i = 0, elements_1 = elements;
                        _a.label = 2;
                    case 2:
                        if (!(_i < elements_1.length)) return [3 /*break*/, 5];
                        el = elements_1[_i];
                        return [4 /*yield*/, action(el)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
    }
    /**
     * Executa um clique em um elemento ou em um elemento com um papel (role).
     *
     * @param element - O seletor CSS do elemento a ser clicado
     * @param locatorOptions - As opções do seletor utilizado para localizar o elemento
     * @param role - O papel (role) do elemento a ser clicado
     * @param options - As opções utilizadas para localizar o elemento por papel (role)
     * @param clickOptions - As opções utilizadas para realizar o clique
     * @param clickOptions.timeout - O tempo máximo em segundos para esperar o elemento estar disponível antes de clicar (padrão: 60 segundos)
     *
     * @returns Uma promessa que será resolvida assim que o clique for realizado com sucesso
     *
     * @throws Um erro se os parâmetros fornecidos forem inválidos ou se o clique não for bem sucedido
     * Exemplo de Uso
     * js
     * await this.Executeclick('directions',{hastext:"ola")
     * await this.Executeclick('directions',{hastext:"ola"},undefined,{},{timeout: 50})
     *
     */
    testFunctions.prototype.Executeclick = function (element, locatorOptions, role, options, clickOptions) {
        if (locatorOptions === void 0) { locatorOptions = {}; }
        if (role === void 0) { role = undefined; }
        if (options === void 0) { options = {}; }
        if (clickOptions === void 0) { clickOptions = { timeout: 60 }; }
        return __awaiter(this, void 0, void 0, function () {
            var timeoutSeconds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timeoutSeconds = clickOptions.timeout
                            ? clickOptions.timeout * 1000
                            : 60000;
                        if (!(role !== undefined && element === "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, globalthis_1.default.page
                                .getByRole(role, options)
                                .click(__assign(__assign({}, clickOptions), { timeout: timeoutSeconds }))];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!(element !== "" && role === undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, globalthis_1.default.page
                                .locator(element, locatorOptions)
                                .click(__assign(__assign({}, clickOptions), { timeout: timeoutSeconds }))];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        if (!(element !== "" && role !== undefined)) return [3 /*break*/, 6];
                        return [4 /*yield*/, globalthis_1.default.page
                                .locator(element, locatorOptions)
                                .getByRole(role, options)
                                .click(__assign(__assign({}, clickOptions), { timeout: timeoutSeconds }))];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: throw new Error("Parâmetros inválidos.");
                }
            });
        });
    };
    return testFunctions;
}());
exports.testFunctions = testFunctions;
