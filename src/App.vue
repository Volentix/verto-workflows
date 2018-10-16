<template>
  <div class="generatekeys" id="root">
    <header-component></header-component>
    <main-section></main-section>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    'header-component': Welcome
  }
}
</script>
