/// <reference types="node" />
/// <reference types="node" />
import { Locator } from "@playwright/test";
import { ReadStream } from "fs";
export type elementRole = "alert" | "alertdialog" | "application" | "article" | "banner" | "blockquote" | "button" | "caption" | "cell" | "checkbox" | "code" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "deletion" | "dialog" | "directory" | "document" | "emphasis" | "feed" | "figure" | "form" | "generic" | "grid" | "gridcell" | "group" | "heading" | "img" | "insertion" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "meter" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "none" | "note" | "option" | "paragraph" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "strong" | "subscript" | "superscript" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "time" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem" | undefined;
export interface IClickoptions {
    button?: "left" | "right" | "middle";
    clickCount?: number;
    delay?: number;
    force?: boolean;
    modifiers?: Array<"Alt" | "Control" | "Meta" | "Shift">;
    noWaitAfter?: boolean;
    position?: {
        x: number;
        y: number;
    };
    timeout?: number | 50000;
    trial?: boolean;
}
export type Cookie = {
    name: string;
    value: string;
    url?: string;
    domain?: string;
    path?: string;
    expires?: number;
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: "Strict" | "Lax" | "None";
};
export interface IRoleoptions {
    checked?: boolean;
    disabled?: boolean;
    exact?: boolean;
    expanded?: boolean;
    includeHidden?: boolean;
    level?: number;
    name?: string | RegExp;
    pressed?: boolean;
    selected?: boolean;
}
export type authFile = {
    path: string;
};
export type Pagestate = "load" | "domcontentloaded" | "networkidle";
export interface IoptionsPage {
    timeout?: number | 50000;
}
export interface IgotoOptions {
    referer?: string;
    timeout?: number | 50000;
    waitUntil?: "load" | "domcontentloaded" | "networkidle" | "commit";
}
export interface ILocator {
    has?: Locator;
    hasNot?: Locator;
    hasNotText?: string | RegExp;
    hasText?: string | RegExp;
}
export interface IFill {
    force?: boolean;
    noWaitAfter?: boolean;
    timeout?: number | 50000;
}
export interface commomOptions {
    timeout?: number | 50000;
    waitUntil?: "load" | "domcontentloaded" | "networkidle" | "commit";
}
export type Serializable = any;
export interface IApiOptions {
    data?: string | Buffer | Serializable;
    failOnStatusCode?: boolean;
    form?: {
        [key: string]: string | number | boolean;
    };
    headers?: {
        [key: string]: string;
    };
    ignoreHTTPSErrors?: boolean;
    maxRedirects?: number;
    multipart?: {
        [key: string]: string | number | boolean | ReadStream | {
            name: string;
            mimeType: string;
            buffer: Buffer;
        };
    };
    params?: {
        [key: string]: string | number | boolean;
    };
    timeout?: number | 50000;
}
export type TypeElementOptions = "visible" | "hidden" | "stable" | "enabled" | "disabled" | "editable";
/**
 * Configuração para o usuário.
 *
 * @typedef {Object} ILocale
 * @property {string} locale - 'en-US' - para inglês americano | 'pt-BR' - para português brasileiro | 'es-ES' - para espanhol da Espanha| 'fr-FR' - para francês da França | 'de-DE' - para alemão da Alemanha | 'it-IT' - para italiano da Itália| 'ja-JP' - para japonês do Japão | 'ko-KR' -para coreano da Coreia do Sul | 'ru-RU' -para russo da Rússia | 'zh-CN' - para chinês simplificado da China
 *
 * @description Use a opção "locale" para definir o idioma e a região para a interface do usuário.
 */
export type Locale = "en-US" | "pt-BR" | "es-ES" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "ko-KR" | "ru-RU" | "zh-CN";
