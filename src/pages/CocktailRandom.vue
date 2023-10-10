<script setup>
import axios from "axios";
import { COCKTAIL_RANDOM_URL } from "@/constants";
import {ref} from "vue";
import Cocktail from "@/components/Cocktail";

const cocktail = ref(null)

async function getRandomCocktail() {
  const data = await axios.get(COCKTAIL_RANDOM_URL)
  cocktail.value = data?.data?.drinks[0]
}

</script>

<template>
  <button class="btn btn-success m-2" @click="getRandomCocktail">Get random Cocktail</button>
  <div v-if="cocktail">
    <Cocktail :cocktail="cocktail" />
  </div>
</template>

<style lang="sass" scoped>

</style>
