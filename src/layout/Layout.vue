<template>
  <div
    :style="{
      backgroundImage:
        'url(' + require('@/assets/Backgrounds/Bg_Header.png') + ')',
    }"
  >
    <Header />
  </div>
</template>
<script setup>
import Header from "@/components/Header.vue";
</script>
<style></style>
