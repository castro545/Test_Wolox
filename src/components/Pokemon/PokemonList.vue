<template>
  <div class="list">
    <div v-for="(pokemon, index) in pokemons" :key="'poke' + index" @click="setPokemonUrl(pokemon.url)" name="pokemons">
      <img :src="imageUrl + pokemon.id + '.png'" width="90" height="90" alt="" />
      <h3>{{ pokemon.name }}</h3>
    </div>
  </div>
  <ul class="pagination">
    <li><a class="btnLogin btnLogin-animate" @click="previusPage()">Atras</a></li>

    <li><a class="btnLogin btnLogin-animate" @click="nextPage()">Siguiente</a></li>
  </ul>
</template>
<script>
import axios from "axios";
export default {
  name: 'PokemonList',
  props: [
    'imageUrl',
    'apiUrl'
  ],
  data: () => {
    return {
      elementPage: 20,
      pokemons: [],
      nextUrl: "",
      currentUrl: "",
    };
  },
  methods: {
    async listData() {
      try {
        const response = await axios.get(this.currentUrl);
        let data = response.data;
        this.previusUrl = data.previous;
        this.nextUrl = data.next;
        data.results.forEach((pokemon) => {
          pokemon.id = pokemon.url
            .split("/")
            .filter(function (part) {
              return !!part;
            })
            .pop();
          this.pokemons.push(pokemon);
          return data;
        })
      } catch (error) {
        console.log(error);
      }
    },
    previusPage() {
      this.pokemon = [];
      this.pokemons = [];
      this.currentUrl = this.previusUrl;
      this.listData();
    },
    nextPage() {
      this.pokemon = [];
      this.pokemons = [];
      this.currentUrl = this.nextUrl;
      this.listData();
    },
    setPokemonUrl(url) {
      this.$emit('setPokemonUrl', url);
    }
  },
  created() {
    this.currentUrl = this.apiUrl;
    this.listData();
  },
};
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-gap: 10px;
  width: 100%;
  max-width: 80%;
}

.list div {
  height: 150px;
  background-color: #ebebeb;
  text-align: center;
  border: 2px solid #2197cd;
  border-radius: 5px;
  text-transform: capitalize;
  cursor: pointer;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}

.list div h3 {
  margin: 0;
  font-size: 15px;
}

ul.pagination {
  display: inline-block;
  padding: 0;
  margin-top: 10px;
}

ul.pagination li {
  display: inline;
}

ul.pagination li a {
  color: black;
  float: left;
  text-decoration: none;
}

.pagination li:first-child a {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.pagination li:last-child a {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

ul.pagination li a.active {
  color: white;
}
</style>
 