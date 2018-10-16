<template>
  <div class="keyStorage">
    <div class="container">
      <div class="notification">
        <h1>Key Storage</h1>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CUSy7bVnnVg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <br>
        <h2>About</h2>
        <br>
        <p>
          Before continuing, it is important to note that you are entirely responsible for the management, safety, protection, and recovery of
          your private key. No one else including partners of the Volentix ecosystem.
        </p>
        <br>
        <p>
          You have 2 choices on persisting your private key. Both methods are designed to ensure your private key remains safe.
          <ol>
            <li>
                The first choice is to write your key down.
            </li>
            <li>
                The second choice is to encrypt your key in a password protected  file.
            </li>
          </ol>
        </p>
        <br>
        <p>
          Regarless of your selection above, you will need to plan a strategy for the physical storage of your private key. This storage strategy
          should include long term thinking, including:
          <ol>
            <li>
              Physical Security: Vaults of any kind that provide the protection you are seeking. Think of somewhere you know its safe from
              theft as well as the elements. In some cases, you will choose a bank or lawyer.
              In others you may prefer to bury it in your backyard. The choice is yours.
            </li>
            <li>
              Legacy: Things happen. Life ends. You need to plan for the transference of your wallet to someone you else. In some cases that may
              be through a will, while in others it becomes a scavanger hunt. The choice is yours.
            </li>
          </ol>
        </p>
        <br>
        <h2>Quiz</h2>
        <p>
          Check All That Apply
          <br/>
          <b-checkbox>I am entirely responsible for the security managment of my private key</b-checkbox>
          <br/>
          <b-checkbox>Volentix and/or partners, store a copy of my public key for me</b-checkbox>
        </p>
        <br>
        <button id="myButton" class="foo bar" onclick="window.location.href='/fileStorage'">File Storage</button>
        <button id="myButton" class="foo bar" onclick="window.location.href='/writtenStorage'">Write It Down</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'keyStorage',
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
