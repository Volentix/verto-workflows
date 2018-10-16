<template>
  <div class="welcome">
    <div class="container">
      <div class="notification">
        <h1>Welcome</h1>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CUSy7bVnnVg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <br>
        <h2>Introducing: Verto</h2>
        <br>
        <p>
          Verto is designed to be your portal into the Volentix ecosystem. Not just a wallet, but a smart manager that is able to serve you with a
          secure, reliable, simple, and familiar experience from the begining. In order to accomplish this goal, Verto will be built upon the following
          three pillars:
          <ol>
            <li>
              Security: Verto NEVER has access to your private information. It is not stored by us anywhere.
            </li>
            <li>
              Simple: Ease of use baked in. Simple patterns, best practices, principles, and disipline make Verto simple, intuative, and fun to use.
            </li>
            <li>
              Learnable: Users are guided through tooling in order to learn what they need when they need to know it.
            </li>
          </ol>
        </p>
        <br>
        <p>
          With the pillars in place, Verto becomes an ecosystem for Volentix partners, and app developers to create enhancements for the community.
          Once you have created your wallet you will be able to start installing applications best suited for your exerience. Currently, we support the
          following, however, once the MVP is complete, the team will focus on promoting integration with others:
          <ol>
            <li>
              KYC
            </li>
            <li>
              Buy VTX
            </li>
          </ol>
        </p>
        <br>
        <p>
          Verto is open sourced under an MIT license.
        </p>
        <br>
        <br>
        <div class="field">
            <b-checkbox>I agree with the Terms &amp; Conditions</b-checkbox>
        </div>
        <button id="myButton" class="foo bar" onclick="window.location.href='/keyStorage'">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'copykey',
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
