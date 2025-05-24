<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-list>
        <v-list-item link :to="'/'">Revenue Analysis</v-list-item>
        <v-list-item link :to="'/inventory'">Inventory Management</v-list-item>
        <v-list-item link :to="'/register'">Product Registration</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>E-commerce Admin Dashboard</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body { margin: 0; }
</style> 