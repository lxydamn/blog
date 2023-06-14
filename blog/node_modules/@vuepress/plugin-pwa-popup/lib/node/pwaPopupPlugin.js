"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pwaPopupPlugin = void 0;
const utils_1 = require("@vuepress/utils");
const pwaPopupPlugin = ({ locales = {} } = {}) => (app) => {
    const plugin = {
        name: '@vuepress/plugin-pwa-popup',
    };
    if (app.env.isDev) {
        return plugin;
    }
    return {
        ...plugin,
        clientConfigFile: utils_1.path.resolve(__dirname, '../client/config.js'),
        define: {
            __PWA_POPUP_LOCALES__: locales,
        },
    };
};
exports.pwaPopupPlugin = pwaPopupPlugin;
