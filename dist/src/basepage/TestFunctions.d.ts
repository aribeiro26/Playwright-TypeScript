import { ElementHandle } from "@playwright/test";
import { elementRole, IRoleoptions, Cookie, IClickoptions, authFile, Pagestate, IoptionsPage, IgotoOptions, ILocator, IFill, commomOptions, IApiOptions, TypeElementOptions } from "../types/ElementsTypes";
export default class testFunctions {
    /**
     * Executa Debug do E2E - Abrindo Ispect do Playwright
     * Exemplo de Uso
     * js
     * await this.Debug()
     *
     */
    Debug: () => Promise<void>;
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
    Executeclick(element: string | "", locatorOptions?: ILocator, role?: elementRole, options?: IRoleoptions, clickOptions?: IClickoptions): Promise<void>;
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
    TypeText: (element: string, locatorOptions: ILocator | undefined, text: string, role?: elementRole, options?: IRoleoptions, fillOp?: IFill) => Promise<void>;
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
    GetElement: (element: string, locatorOptions?: ILocator) => Promise<import("playwright-core").Locator>;
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
    SetStorage: (authfile?: authFile) => Promise<{
        cookies: {
            name: string;
            value: string;
            domain: string;
            path: string;
            expires: number;
            httpOnly: boolean;
            secure: boolean;
            sameSite: "Strict" | "Lax" | "None";
        }[];
        origins: {
            origin: string;
            localStorage: {
                name: string;
                value: string;
            }[];
        }[];
    }>;
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
    GetNewPage: (params?: any, options?: IoptionsPage) => Promise<import("playwright-core").Page>;
    /**
     * Este metodo aguarda tempo definido em segundos
     * @param options.timeout - O tempo máximo em segundos para esperar antes de ir para próximo de método (padrão: 60 segundos)
     * Exemplo de uso
     * js
     * await this.WaitForTimeout({timeout: 60});
     *
     */
    WaitForTimeout: (options: IoptionsPage) => Promise<void>;
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
    ExecuteJS: (fn: () => any) => Promise<any>;
    /**
     * Limpa os cookies do contexto atual.
     */
    ClearCookies: () => Promise<void>;
    /**
     * Adiciona cookies ao contexto atual.
     *
     * @param {Cookie[]} cookies - Os cookies a serem adicionados.
     */
    AddCookies: (cookies: Cookie[]) => Promise<void>;
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
    GetRequest: (endpoint: string, headers: IApiOptions) => Promise<import("playwright-core").APIResponse>;
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
    PostRequest: (endpoint: string, headers: IApiOptions) => Promise<import("playwright-core").APIResponse>;
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
    Redirect: (url: string, gotoOptions?: IgotoOptions) => Promise<void>;
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
    ValidateText: (element: string, text: string) => Promise<void>;
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
    ValidateUrl: (url: string, commomOptions?: commomOptions) => Promise<void>;
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
    KeyBoard: (element: string | undefined, keys: string) => Promise<void>;
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
    WaitLoadPage: (stat?: Pagestate, options?: IoptionsPage) => Promise<void>;
    /**
     * Insere uma senha em um formulário de 6 dígitos.
     *
     * @async
     *
     * @example
     * // Insere a senha "123456" em um formulário.
     * await Passwd();
     */
    Passwd: () => Promise<void>;
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
    ValidateElementExist: (element: string) => Promise<void>;
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
    isVisible: (element: string, locatorOptions?: ILocator, options?: IoptionsPage) => Promise<boolean>;
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
    WaitElementLoad: (element: string, locatorOptions?: ILocator, stat?: TypeElementOptions, role?: elementRole, optionsRole?: IRoleoptions, Ioptions?: IoptionsPage) => Promise<void>;
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
    ValidateTitle: (textTitle: string) => Promise<void>;
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
    ExecuteActionsElements: (element: string, action: (el: ElementHandle) => Promise<void>) => Promise<void>;
}
