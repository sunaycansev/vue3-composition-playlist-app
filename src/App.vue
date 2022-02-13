<script setup>
import Navbar from "./components/shared/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style>
.content {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}
</style>
