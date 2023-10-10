<script setup>
import { useRoute } from "vue-router"
import axios from "axios";
import { COCKTAIL_BY_ID_URL } from "@/constants";
import { ref } from "vue";
import Cocktail from "@/components/Cocktail";

const route = useRoute()
const cocktail = ref(null)

async function getCocktail() {
  const data = await axios.get(`${COCKTAIL_BY_ID_URL}${route.params.id}`)
  cocktail.value = data?.data?.drinks[0]
}

getCocktail()

</script>

<template>
  <div v-if="cocktail">
    <Cocktail :cocktail="cocktail" />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>
