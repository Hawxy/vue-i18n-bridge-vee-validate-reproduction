const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const VueI18nPlugin = require("@intlify/unplugin-vue-i18n/webpack");

module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugin("define").tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_I18N_FULL_INSTALL__: JSON.stringify(true),
        __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_I18N_LEGACY_API__: JSON.stringify(false)
      });
      return definitions;
    });
  },
  configureWebpack: {
    plugins: [
      VueI18nPlugin({
        include: [path.resolve(__dirname, "./src/lang/**")]
      })
    ],
    resolve: {
      alias: {
        "vue-i18n-bridge":
          "vue-i18n-bridge/dist/vue-i18n-bridge.runtime.esm-bundler.js"
      }
    }
  }
});
