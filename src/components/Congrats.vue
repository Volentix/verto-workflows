<template>
  <div class="congrats">
    <div class="container">
      <div class="notification">
        <h1>Congrats</h1>
        <br>
        <p>
          Blah blah blah:
        </p>
        <button id="myButton" class="foo bar" onclick="window.location.href='/done'">Done</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'congrats',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
