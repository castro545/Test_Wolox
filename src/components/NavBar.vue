<template>
  <div id="nav">
    <div>
      <img :src="require('../assets/logo_full_color.svg')" />
    </div>
    <div>
      <router-link to="/">{{ $t("btn.home") }}</router-link>
    </div>
    <div>
      <a href="/#beneficios">{{ $t("btn.benefit") }}</a>
    </div>
    <div>
      <button
        type="button"
        onclick="window.open('https://www.accenture.com/Authentication/LogOnModal/Signup?returnUrl=%2fco-es%2fcareers')"
        class="btnLogin btnLogin-animate"
      >
        Login
      </button>
    </div>
    <div>
      <router-link to="/Pokemon">
        <div class="btnPoke btnPoke-animate"></div>
      </router-link>
    </div>
    <div>
      <select v-model="$i18n.locale" class="rounded-md p-1">
        <option value="es">
          <p>{{ $t("select.spanish") }}</p>
        </option>
        <option value="en">
          <p>{{ $t("select.english") }}</p>
        </option>
      </select>
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
