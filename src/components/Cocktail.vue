<script setup>
import {computed, defineProps, toRefs} from "vue";

const props = defineProps({
  cocktail: {
    type: Object,
    required: true
  }
})

const { cocktail } = toRefs(props)

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

</script>

<template>
  <div class="row cocktail-view">
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
