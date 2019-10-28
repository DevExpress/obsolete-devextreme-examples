<template>
  <dx-button :text='text' :icon='icon' @click='onClick'/>
</template>

<script lang="ts">
import { DxButton } from "devextreme-vue/ui/button";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    DxButton
  }
})
export default class ButtonExample extends Vue {
  icon: "plus" | "box" = "plus";

  text = 'click me';

  onClick() {
    this.icon = this.icon === "plus" ? "box" : "plus";
  };
}
</script>
