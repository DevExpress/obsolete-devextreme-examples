<template>
    <dx-button
    text="click me"
    v-on:click="greet" />
</template>

<script>
import { DxButton } from "devextreme-vue/ui/button";

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
