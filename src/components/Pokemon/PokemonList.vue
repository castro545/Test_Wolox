<template>
  <div class="list">
    <div v-for="(pokemon, index) in pokemons" :key="'poke' + index">
      <img
        :src="imageUrl + pokemon.id + '.png'"
        width="90"
        height="90"
        alt=""
      />
      <h3>{{ pokemon.name }}</h3>
    </div>
  </div>
  <ul class="pagination">
    <li><a @click="previusPage()">Atras</a></li>

    <li><a @click="nextPage()">Siguiente</a></li>
  </ul>
</template>
<script>
import API from "../../API/ApiUrl";
export default {
  data: () => {
    return {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      apiUrl: API.PokemonApi,
      elementPage: 20,
      pokemons: [],
      nextUrl: "",
      currentUrl: "",
    };
  },
  methods: {
    fetchData() {
      console.log(this.currentUrl);
      let req = new Request(this.currentUrl);
      fetch(req)
        .then((resp) => {
          if (resp.status === 200) return resp.json();
        })
        .then((data) => {
          this.nextUrl = data.next;
          data.results.forEach((pokemon) => {
            pokemon.id = pokemon.url
              .split("/")
              .filter(function (part) {
                return !!part;
              })
              .pop();
            this.pokemons.push(pokemon);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    totalPages() {
      console.log(this.pokemons);
      this.pages = Math.ceil(this.pokemons.length / this.elementPage);
    },
    previusPage() {},
    nextPage() {
      this.pokemon = [];
      this.pokemons = [];
      this.currentUrl = this.nextUrl;
      this.fetchData();
    },
  },
  created() {
    this.currentUrl = this.apiUrl;
    this.fetchData();
  },
};
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  grid-gap: 10px;
  width: 100%;
  max-width: 80%;
}
.list div {
  height: 150px;
  background-color: #e0d5d5;
  text-align: center;
  text-transform: capitalize;
  border-radius: 2px;
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
  background-color: #e0d5d5;
}

ul.pagination li {
  display: inline;
}

ul.pagination li a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
}

.pagination li:first-child a {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.pagination li:last-child a {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

ul.pagination li a.active {
  background-color: #7484af;
  color: white;
  border: 1px solid #7484af;
}

ul.pagination li a:hover:not(.active) {
  background-color: #ddd;
}
</style>
