<script setup>
import { useRootStore } from "@/stores/root";

const rootStore = useRootStore()

function clearIngredient() {
  rootStore.setIngredient(null)
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="clearIngredient">Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cocktail-random" class="nav-link" >Случайный коктейль</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>