<template>
  <div id="app">{{ t("SomeString") }}</div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n-bridge";
export default defineComponent({
  name: "App",
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
