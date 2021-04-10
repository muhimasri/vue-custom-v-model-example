<template>
  <div id="app">
    <wired-input v-custom-model="txtValue" />
    {{txtValue}}
  </div>
</template>

<script>
import 'wired-input';
import CustomModelDirective from './directives/custom-model';

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      txtValue: ''
    }
  },
  directives: {
    CustomModelDirective
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
