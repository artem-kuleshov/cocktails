<script setup>
import { useRootStore } from "@/stores/root";
import { storeToRefs } from 'pinia'

const rootStore = useRootStore()
rootStore.getIngredients()

const { ingredients, ingredient, cocktails } = storeToRefs(rootStore)

function getCocktails() {
  console.log(rootStore.ingredient)
  rootStore.getCocktails(rootStore.ingredient)
}
</script>

<template>
  <div class="row mb-4 mt-2">
    <div class="col-12 text-center">
      <h3>CHOOSE YOUR INGREDIENT</h3>
      <div>
        <el-select v-model="rootStore.ingredient" placeholder="Choose ingredient" size="large"
             @change="getCocktails" filterable allow-create>
          <el-option v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
          />
        </el-select>
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
