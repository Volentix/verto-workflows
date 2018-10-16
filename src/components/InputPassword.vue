<template>
  <div class="inputPassword">
    <div class="container">
      <div class="notification">
        <h1>Warning</h1>
        <p>
          It is recommended to save your key file on a removable storage device.
        </p>
        <br>
        <b-field label="File">
          <b-input >
          </b-input>
        </b-field>
        <b-field label="Password">
          <b-input type="password"
              value=""
              password-reveal>
          </b-input>
        </b-field>
        <b-field label="Confirm Password">
          <b-input type="password"
              value=""
              password-reveal>
          </b-input>
        </b-field>
        <br>
        <button id="myButton" class="foo bar" onclick="window.location.href='/congrats'">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'inputPassword',
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
