<template>
  <dx-button :text='text' icon='plus' ref='button' @click='click'/>
</template>

<script lang="ts">
import { DxButton } from "devextreme-vue/ui/button";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {
    DxButton
  }
})
export default class ButtomExample extends Vue {
  public $refs: Vue["$refs"] & {
    button?: DxButton
  } = {};

  text = 'click me';

  click() {
    const button = this.$refs.button;
    if(button) {
      button.icon = button.icon === "plus" ? "box" : "plus";
    }
  };
}
</script>

</script>
