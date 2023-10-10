<script setup>
import { useRoute } from "vue-router"
import axios from "axios";
import { COCKTAIL_BY_ID_URL } from "@/constants";
import { ref, computed } from "vue";

const route = useRoute()
const cocktail = ref(null)

const ingredients = computed( () => {
  const ingredients = []

  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break

    const ingredient = {}
    ingredient.name = cocktail.value[`strIngredient${i}`]
    ingredient.measure = cocktail.value[`strMeasure${i}`]

    ingredients.push(ingredient)
  }

  return ingredients
})

async function getCocktail() {
  const data = await axios.get(`${COCKTAIL_BY_ID_URL}${route.params.id}`)
  cocktail.value = data?.data?.drinks[0]
}

getCocktail()

</script>

<template>
  <div class="row cocktail-view" v-if="cocktail">
    <div class="col-6">
      <div class="p-2 h-75">
        <img :src="cocktail.strDrinkThumb" class="image-cocktail-view" >
      </div>
    </div>
    <div class="col-6">
      <div class="jumbotron">
        <h1 class="display-4">{{ cocktail.strDrink }}</h1>
        <p class="lead">{{ cocktail.strInstructions }}</p>

        <ol class="list-group list-group-numbered">
          <li v-for="ingredient in ingredients" class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ ingredient.name }}</div>
              <span v-if="ingredient.measure">Объем: {{ ingredient.measure }}</span>
            </div>
          </li>
        </ol>
        
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>
