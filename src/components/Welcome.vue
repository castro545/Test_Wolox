<template>
  <div>
    <div
      class="flexbox-container"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/Backgrounds/Bg_Header.png') + ')',
      }"
    >
      <div>
        <p>
          Bienvenido a tu <span>Entrevista Técnica </span>en
          <span> WOLOX</span>
        </p>
      </div>
      <div>
        <img
          :srcset="
            require('../assets/ImgHero/Ic_ilustra_Hero@2x.png') +
            ' 1x, ' +
            require('../assets/ImgHero/Ic_ilustra_Hero@3x.png') +
            ' 2x'
          "
          :src="require('../assets/ImgHero/Ic_ilustra_Hero.png')"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
img {
  width: 100%;
  height: auto;
}
.content {
  width: 100vw;
  grid-auto-columns: minmax(100px, auto);
  column-gap: 40px;
  overflow: hidden;
  display: grid;
  align-items: center;
  margin: 15px 0px 15px 25px;
}
.flexbox-container {
  width: 90vw;
  height: 100vh;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  margin-top: 82px;
}

.flexbox-container > div {
  width: 50%;
  padding: 10px;
}

.flexbox-container > div:first-child {
  margin-right: 20px;
}
/* .content div:first-child {
  grid-column-start: 1;
  grid-column-end: 3;
}
.content div:last-child {
  grid-column-start: 4;
} */
p {
  text-align: justify;
  font-family: "Montserrat";
  color: black;
  font-style: bold;
  font-size: 45px;
}
span {
  font-family: "MontserratBold";
}
span:first-child {
  font-weight: 600;
}
span:last-child {
  color: #97cf00;
}
</style>
