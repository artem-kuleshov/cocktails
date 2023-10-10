<script setup>
import Navbar from "@/components/Navbar";
</script>

<template>
  <Navbar />
  <h1>APP</h1>
  <div class="container">
    <router-view></router-view>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
