<template>
  <div id="container">
    <div>
      <img
        :srcset="
          require('../assets/img_woloxer@2x.png') +
          ' 1x, ' +
          require('../assets/img_woloxer@3x.png') +
          ' 2x'
        "
        :src="require('../assets/img_woloxer.png')"
      />
      <div class="centrado">
        <p>
          <span :style="{ color: '#97cf00' }">350 +</span
          ><span :style="{ color: '#2197cd' }"> Wolowers</span>
        </p>
        <div id="sub-container">
          <div>
            <img
              :src="require('../assets/Ic_twitter.svg')"
              :style="{ verticalAlign: 'middle' }"
            />
            <span :style="{ color: '#fff' }"> @ Wolox </span>
          </div>
        </div>
        <div>
          <button
            type="button"
            onclick="window.open('https://twitter.com/wolox')"
            @click="showAlert()"
            class="btn btn-animate"
          >
            Siguenos
          </button>
        </div>
      </div>
    </div>
    <div :style="{ width: '75%' }">
      <p>
        Trabajamos para <span>convertir </span><span>ideas </span>en productos.
      </p>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
img {
  max-width: 100%;
  height: 90%;
}
#container {
  background-color: #b4b8a938;
  max-width: 100vw;
  grid-template-columns: 250px 80px 150px;
  column-gap: 40px;
  overflow: hidden;
  display: grid;
  align-items: center;
}
#container div:first-child {
  position: relative;
  display: inline-block;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 5;
}
#container div:last-child {
  grid-column-start: 6;
  grid-column-end: 7;
}
.sub-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.centrado {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
p {
  text-align: center;
  font-family: "Montserrat";
  color: black;
  font-style: bold;
  font-size: 40px;
}
span {
  font-family: "MontserratBold";
}
span:first-child {
  font-weight: 500;
  color: #2197cd;
}
span:last-child {
  color: #97cf00;
}
.btn {
  font-family: "Fira Sans";
  border: 2px solid #2197cd;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  background-color: transparent;
  width: 180px;
  color: #fff;
  font-weight: lighter;
  height: 25px;
  transition-duration: 0.4s;
}
.btn:link,
.btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background: #318aac;
  color: #fff !important;
}
.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
  background: #318aac;
  color: #fff !important;
}

.btn-animated {
  animation: moveInBottom 6s ease-out;
  animation-fill-mode: backwards;
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
