<template>
  <v-app id="inspire">
    <v-navigation-drawer
    v-model="drawer"
    :mobile-breakpoint="768"
    app
    >
      <v-img
      class="pa-4 pt-7"
        src="/headerImage.png"
        height="170"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
    <v-avatar size="70" class="mb-2">
      <img
        src="https://shortest.link/1tGw"
        alt="avatar"
      >
    </v-avatar>
    <div class="white--text text-subtitle-1 font-weight-bold">Saeed Alnuaimi</div>
    <div class="white--text text-subtitle-2">saeed.maatouq</div>
    </v-img>
      <!-- Side bar navigation -->
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Header background -->
    <v-app-bar
      app
      color="primary"
      dark
      prominent
      height="170"
      src="headerImage.png"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="px-1 header-container">
        <!-- Header Items -->
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search-bar />
        </v-row>
        <v-row>
          <v-app-bar-title class="ml-4 header-title text-h4"
            >{{$store.state.appTitle}}
            </v-app-bar-title
          >
        </v-row>
        <v-row>
          <live-date-time />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "./components/Snackbar.vue";
import Search from "./components/Tools/Search.vue";
import LiveDate from "./components/Tools/LiveDate.vue";

export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  components: {
    snackbar: Snackbar,
    "search-bar": Search,
    "live-date-time": LiveDate,
  },
};
</script>

<style lang="sass">
.header-title
  .v-app-bar-title__content
    width: 100% !important
.header-container
  max-width: none !important
</style>

