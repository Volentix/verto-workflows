<template>
  <div class="fileStorage">
    <div class="container">
      <div class="notification">
        <h1>File Storage</h1>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CUSy7bVnnVg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <br>
        <p>
          The process is as follows:
          <ol>
            <li>
              The application will turn off wifi and bluetooth.
            </li>
            <li>
              You will choose a directory, preferably on a usb or other offline storage mechanic.
            </li>
            <li>
              Prompted for password and confirmation password
            </li>
            <li>
              Submit
            </li>
          </ol>
        </p>
        <br><br>
        <h2>Choosing a Password</h2>
        <p>
          Choose a password long in length. A lyric from a song, or a line from a movie. Make it person. In short, the longer the password the better.
          GIVE MORE INFORMATION ON CREATING PASSWOORDS... LOTS OF WORDS OVER WEIRD SYMBOLS. EXPLAIN THIS.
        </p>
        <br><br>
        Choose all that apply:
        <br>
        <div class="field">
            <b-checkbox>Generated passwords are better</b-checkbox>
            <br>
            <b-checkbox>The longer the password the better</b-checkbox>
        </div>
        <button id="myButton" class="foo bar" onclick="window.location.href='/inputPassword'">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'fileStorage',
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
