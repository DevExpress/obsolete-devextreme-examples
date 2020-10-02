<template>
  <dx-button text="click me" :icon="icon" @click="onClick" />
</template>

<script lang="ts">
import { DxButton } from "devextreme-vue/ui/button";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    DxButton,
  },
  data() {
    return{
      icon: "plus"
    }
  },
  methods: {
    onClick() {
      this.icon = this.icon === "plus" ? "box" : "plus";
    }
  }
});
</script>
