<template>
  <div class="displayKey">
    <div class="container">
      <div class="notification">
        <h1>Display Key</h1>
        <h2>
          EOSsdlknsd080shfdnwcoe...
        </h2>
        <br><br>
        <h2>Confirm</h2>
        <br>
        <p>
          Type the following in the textfield below:
        </p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key copied
        <b-input placeholder="No label" rounded></b-input>
        <button id="myButton" class="foo bar" onclick="window.location.href='/congrats'">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'displayKey',
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
