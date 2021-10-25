<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            To Do List
          </v-list-item-title>
          <v-list-item-subtitle>
            comprehensive to do list
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

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
    <v-app-bar app color="primary" dark prominent height="170" src="headerImage.png">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="px-1">
        <!-- Header Items -->
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search-bar />
        </v-row>
        <v-row>
          <v-app-bar-title class="ml-4 header-title text-h4">To Do List</v-app-bar-title>
        </v-row>
        <v-row>
          <live-date-time/>
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
    "snackbar": Snackbar,
    "search-bar": Search,
    "live-date-time": LiveDate
  },
};
</script>

<style lang="sass">
  .header-title
    .v-app-bar-title__content
      width: 100% !important
</style>