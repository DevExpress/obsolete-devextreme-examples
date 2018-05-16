<template>
  <dx-button :text='text' icon='plus'/>
</template>

<script>

import { DxButton } from "devextreme-vue/ui/button";

export default {
  components: {
    DxButton
  },
  data: function() {
    return {
      text: 'click me' 
    }
  }
};
</script>
