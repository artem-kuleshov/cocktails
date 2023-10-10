<script setup>
import { ref } from 'vue'
import { useRootStore } from "@/stores/root";
import { storeToRefs } from 'pinia'

const rootStore = useRootStore()
rootStore.getIngredients()

const { ingredients, cocktails } = storeToRefs(rootStore)
const ingredient = ref(null)

function getCocktails() {
  rootStore.getCocktails(ingredient.value)
}
</script>

<template>
  <div class="row mb-4">
    <div class="col-12">
      <h3>CHOOSE YOUR DRINK</h3>
      <div>
        <select v-model="ingredient" @change="getCocktails" class="form-select w-50" style="display: initial">
          <option v-for="item in ingredients" :value="item.strIngredient1">{{ item.strIngredient1 }}</option>
        </select>
      </div>
    </div>
  </div>
  <div v-if="cocktails && ingredient" class="row">
    <h3>COCKTAILS WITH {{ ingredient }}</h3>
    <div v-for="cocktail in cocktails" class="col-3">
      <router-link :to="`/cocktail/${cocktail.idDrink}`">
        <figure class="figure">
          <img :src="cocktail.strDrinkThumb" class="figure-img img-fluid rounded">
          <figcaption class="figure-caption">{{ cocktail.strDrink }}</figcaption>
        </figure>
      </router-link>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>
