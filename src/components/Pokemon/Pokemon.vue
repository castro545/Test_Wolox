<template>
  <div class="container">
    <h1>Pokemon's</h1>
    <PokemonSearch :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl" />
    <PokemonList />
  </div>
</template>

<script setup>
import PokemonSearch from "./PokemonSearch.vue";
import PokemonList from "./PokemonList.vue";
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  min-height: calc(100vh - 20px);
  font-size: 1rem;
  font-weight: normal;
}

h1 {
  font-family: "Montserrat";
  letter-spacing: 5px;
  margin-left: 30px;

  color: #0a0909;
}
</style>
