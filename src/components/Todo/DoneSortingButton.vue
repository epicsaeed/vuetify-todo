<template>
  <v-btn
  class="button"
  color="primary" 
  @click="$store.commit('toggleSorting')"
  >Done Sorting</v-btn>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.button
    position: fixed
    bottom: 20px
    left: 50%
    transform: translateX(-50%)
</style>