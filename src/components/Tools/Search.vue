<template>
  <!-- The usage of :value here is sent with the commit -->
  <v-text-field
    :value="$store.state.search"
    @input="$store.commit('setSearch', $event)"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    class="mt-1 expanding-search"
    :class="{ 'closed' : searchClosed && !$store.state.search }"
    placeholder="Search"
    filled
    dense
    prepend-inner-icon="mdi-magnify"
    clearable
  >
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      searchClosed: true,
    };
  },
};
</script>

<style lang="sass">
.expanding-search
    max-width: 80% !important
    transition: max-width 0.4s
    .v-input__slot
        cursor: pointer !important
        &:before, &:after
            border-color: transparent !important
    &.closed
        max-width: 45px !important
        .v-input__slot
            background: transparent !important
</style>
