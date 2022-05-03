<template>
  <div id="nav">
    <div>
      <img :src="require('../assets/logo_full_color.svg')" />
    </div>
    <div>
      <router-link to="/">Inicio</router-link>
    </div>
    <div>
      <a href="/#beneficios">Beneficios</a>
    </div>
    <div>
      <button type="button"
        onclick="window.open('https://www.accenture.com/Authentication/LogOnModal/Signup?returnUrl=%2fco-es%2fcareers')"
        class="btnLogin btnLogin-animate">
        Login
      </button>
    </div>
    <div>
      <router-link to="/Pokemon">
        <div class="btnPoke btnPoke-animate"></div>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
img {
  margin-left: 15%;
  width: 150px;
  height: 70px;
}

.imgPoke {
  width: 50px;
  height: 50px;
}
</style>
