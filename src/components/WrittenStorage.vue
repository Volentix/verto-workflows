<template>
  <div class="writtenStorage">
    <div class="container">
      <div class="notification">
        <h1>Written Storage</h1>
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
              The private key is displayed.
            </li>
            <li>
              You write it down or take an analogue photo.
            </li>
            <li>
              Type in a confirmation code.
            </li>
            <li>
              Store the physical paper, polariod, roll of film, microdot, etc.
            </li>
          </ol>
        </p>
        <br><br>
        <p>
          Do Not
          <ol>
            <li>
              Take a photo/video with your cellphone or digital camera.
            </li>
            <li>
              Take a screenshot.
            </li>
          </ol>
        </p>
        <br><br>
        <div class="field">
            <b-checkbox>I am responsible for the managment of my private key</b-checkbox>
            <br/>
            <b-checkbox>I understand that Volentix, nor any of its partners, are able to restore my private key</b-checkbox>
        </div>
        <button id="myButton" class="foo bar" onclick="window.location.href='/displayKey'">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'writtenStorage',
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
