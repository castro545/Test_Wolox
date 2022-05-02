<template>
  <div class="home">
    <Welcome />
    <Container />
    <section id="Beneficios"><Beneficios /></section>
    <Footer />
  </div>
</template>

<script setup>
import Welcome from "@/components/Welcome.vue";
import Beneficios from "@/components/Beneficios.vue";
import Container from "@/components/Container.vue";
import Footer from "@/components/Footer.vue";
</script>
