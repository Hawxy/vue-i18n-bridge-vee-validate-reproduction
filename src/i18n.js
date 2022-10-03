import Vue from "vue";
import { createI18n, castToVueI18n } from "vue-i18n-bridge";
import VueI18n from "vue-i18n";
import includedMessages from "@intlify/unplugin-vue-i18n/messages";

Vue.use(VueI18n, { bridge: true });

export const i18n = castToVueI18n(
  createI18n(
    {
      locale: navigator.language.split("-")[0],
      fallbackLocale: "en",
      silentTranslationWarn: true,
      legacy: false,
      messages: includedMessages
    },
    VueI18n
  )
);
