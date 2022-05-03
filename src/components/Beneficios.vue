<template>
  <div id="container">
    <div id="item1">
      <p>Entre los beneficios que te ofrecemos se encuentran <span>;)</span></p>
    </div>
    <div id="item2">
      <div>
        <img :src="require('../assets/Ic_Hour.svg')" />
        <h2>Flexibilidad Horaria</h2>
      </div>
      <div>
        <img :src="require('../assets/Ic_HomeOffice.svg')" />
        <h2>Home Office</h2>
      </div>
      <div>
        <img :src="require('../assets/Ic_Workshops.svg')" />
        <h2>Capacitaciones y workshops</h2>
      </div>
      <div>
        <img :src="require('../assets/Ic_DrinkSnacks.svg')" />
        <h2>Snacks,frutas y bebidas gratis</h2>
      </div>
      <div>
        <img :src="require('../assets/Ic_laptop.svg')" />
        <h2>Semana remota</h2>
      </div>
      <div>
        <img :src="require('../assets/Ic_brain.svg')" />
        <h2>Trabajar en ultimas tecnologías</h2>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
img {
  max-width: 20vw;
  height: 10vh;
}

#container {
  margin-top: 30px;
  margin-bottom: 130px;
  display: grid;
  max-width: 100vw;
  height: 200px;
  grid-template-columns: 100%;
  grid-template-rows: repeat(6, 1fr);
}

#item1 {
  background-color: #fff;
}

#item2 {
  grid-row: 2 / 4;
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}

@media (min-width: 400px) {
  #item2 {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 600px) {
  #item2 {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 800px) {
  #item2 {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 1000px) {
  #item2 {
    grid-template-columns: repeat(6, 1fr);
  }
}

p {
  text-align: center;
  font-family: "Montserrat";
  color: black;
  font-style: bold;
  font-size: 30px;
}

h2 {
  text-align: center;
  font-family: "Montserrat";
  color: black;
  font-style: bold;
  font-size: 15px;
}

span {
  font-family: "MontserratBold";
}

span:first-child {
  font-weight: 500;
  color: #2197cd;
}
</style>
