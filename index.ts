import TestFunctions from "./src/basepage/TestFunctions"
import SetEnv from "./src/support/SetEnviroment"
import {
    Locale,
    Cookie,
    IApiOptions,
    IClickoptions,
    IFill,
    ILocator,
    IRoleoptions,
    IgotoOptions,
    IoptionsPage,
    Pagestate,
    Serializable,
    TypeElementOptions,
    authFile,
    commomOptions,
    elementRole,
} from "./src/types/ElementsTypes"
import { executions } from "./src/jobs/scriptExecutions/executions/executions"
import {
    getScriptExec,
    genReporter,
    getScriptMultExec,
    params,
} from "./src/jobs/scriptExecutions/script"

import { Reporter } from "./src/loaders/allure-report/allure-reporter"
import global from "./src/types/globalthis"
import { playLighthouse } from "./src/utils/lighthouse/playLighthouse"
import {
    ICustomWorld,
    compareToBaseImage,
} from "./src/loaders/compare_images/compareImages"
import axeCore from "./src/loaders/axe_core/acessibility"
import CreateDirectory from "./src/helpers/create_directory/CreateDirectory"
import GetBrowser, {
    browserTypes,
    browserType,
} from "./src/helpers/getbrowser/getBrowser"

export {
    GetBrowser,
    browserTypes,
    browserType,
    CreateDirectory,
    axeCore,
    ICustomWorld,
    compareToBaseImage,
    TestFunctions,
    Reporter,
    global,
    playLighthouse,
    getScriptExec,
    genReporter,
    getScriptMultExec,
    params,
    executions,
    SetEnv,
    Locale,
    Cookie,
    IApiOptions,
    IClickoptions,
    IFill,
    ILocator,
    IRoleoptions,
    IgotoOptions,
    IoptionsPage,
    Pagestate,
    Serializable,
    TypeElementOptions,
    authFile,
    commomOptions,
    elementRole,
}
