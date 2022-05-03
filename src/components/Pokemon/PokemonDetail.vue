<template>
    <div class="detail">
        <div class="detail-view" v-if="show">
            <div v-if="pokemon" class="image">
                <img :src="imageUrl + pokemon.id + '.png'" alt="">
            </div>
            <div v-if="pokemon" class="data">
                <h2>{{ pokemon.name }}</h2>


            </div>
            <h2 v-else>No existe</h2>
            <button class="close" @click="closeDetail">Cerrar</button>
        </div>
        <i v-else class="fas fa-spinner fa-spin"></i>
    </div>
</template>

<script>
export default {
    props: [
        'pokemonUrl',
        'imageUrl'
    ],
    data: () => {
        return {
            show: false,
            pokemon: {}
        }
    },
    methods: {
        fetchData() {
            let req = new Request(this.pokemonUrl);
            fetch(req)
                .then((resp) => {
                    if (resp.status === 200)
                        return resp.json();
                })
                .then((data) => {
                    this.pokemon = data;
                    this.show = true;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        closeDetail() {
            this.$emit('closeDetail');
        }
    },
    created() {
        this.fetchData();
    }
}
</script>


<style scoped>
.detail {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    top: 25%;
    left: 0;
    padding: 90px 10px 10px;
    width: calc(100% - 20px);
    height: calc(30vh - 10px);
}

.detail-view {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 250px;
    padding: 50px 0 0;
    background-color: #eae7e7;
    border-radius: 5px;
    border: 2px solid #2197cd;

    box-shadow: 0 15px 30px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
}

.detail-view .image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -60px;
    width: 120px;
    height: 120px;
    background-color: #f8f1f1;
    border: 2px solid #2197cd;

    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
}

.detail-view h2 {
    margin: 30px 15% -10px 15%;
    text-transform: capitalize;
}

.detail-view .data {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 40px;
}

.close {
    outline: none;
    border: none;
    border-radius: 5px;
    border: 2px solid #2197cd;
    background-color: rgb(253, 253, 253);
    color: #4a6d82;
    padding: 10px 20px;
    margin-bottom: 20px;
    font-size: 1.2rem;
    cursor: pointer;
}

.close:link,
.close:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: #2197cd;
    color: #fff !important;
}

.close:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.close::after {
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

.close:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
    background: #fff;
    color: #318aac !important;
}

.close-animated {
    animation: moveInBottom 6s ease-out;
    animation-fill-mode: backwards;
}

.detail i {
    font-size: 2rem;
    color: #e0d5d5;
}
</style>
