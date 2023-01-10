<template>
    <dx-button
    text="click me"
    v-on:click="greet" />
</template>

<script>
import { DxButton } from "../dist/devextreme-vue-bundle.mjs";

export default {
  components: {
    DxButton
  },
  methods: {
    greet: function () {
      alert("Hello!");
    }
  }
};
</script>
