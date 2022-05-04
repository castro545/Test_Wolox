<template>
  <div class="container">
    <h1>Pokemon's</h1>
    <PokemonSearch :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl" />
    <PokemonList
      :imageUrl="imageUrl"
      :apiUrl="apiUrl"
      @setPokemonUrl="setPokemonUrl"
    />
    <PokemonDetail
      v-if="showDetail"
      :pokemonUrl="pokemonUrl"
      :imageUrl="imageUrl"
      @closeDetail="closeDetail"
    />
  </div>
</template>

<script>
import PokemonSearch from "./PokemonSearch.vue";
import PokemonList from "./PokemonList.vue";
import PokemonDetail from "./PokemonDetail.vue";
import API from "../../API/ApiUrl";
export default {
  data: () => {
    return {
      imageUrl: API.PokemonImg,
      apiUrl: API.PokemonApi,
      pokemonUrl: "",
      showDetail: false,
    };
  },
  components: {
    PokemonSearch,
    PokemonList,
    PokemonDetail,
  },
  methods: {
    setPokemonUrl(url) {
      this.pokemonUrl = url;
      this.showDetail = true;
    },
    closeDetail() {
      this.pokemonUrl = "";
      this.showDetail = false;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 5%;
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
