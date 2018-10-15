<template>
  <dx-button :text='text' icon='plus'/>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { DxButton } from "devextreme-vue/ui/button";

@Component({
  components: {
    DxButton
  }
})
export default class ButtomExample extends Vue {
  text = 'click me'
}
</script>

</script>
