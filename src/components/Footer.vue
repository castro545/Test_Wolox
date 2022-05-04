<template>
  <div id="container">
    <div>
      <h1>
        {{ $t("footer.thanks") }} <span> {{ $t("footer.complet") }}</span>
      </h1>
    </div>
    <div id="items">
      <div>
        <h2>{{ $t("footer.invit") }}</h2>
      </div>
      <div>
        <button
          type="button"
          onclick="window.open('https://www.wolox.com.ar/')"
          class="btnConocer btnConocer-animate"
        >
          {{ $t("btn.learn") }}
        </button>
      </div>
      <div>
        <img :src="require('../assets/Ic_Wolox_Footer.svg')" />
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
img {
  max-width: 90px;
  height: auto;
}
#container {
  display: grid;
  max-width: 100vw;
  background-image: url("../assets/Backgrounds/Bg_Footer.png");
  height: 200px;
  grid-template-columns: 100%;
  grid-template-rows: repeat(6, 1fr);
}
#items {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}
h1 {
  text-align: center;
  font-family: "MontserratBold";
  color: black;
  font-style: bold;
  font-size: 30px;
}
h2 {
  text-align: center;
  font-family: "Montserrat";
  color: black;
  font-size: 20px;
}
span {
  font-family: "MontserratBold";
}
span:first-child {
  font-weight: 500;
  color: #2197cd;
}
</style>
