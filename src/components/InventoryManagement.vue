<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="search" label="Search Products"></v-text-field>
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="filteredProducts"
      item-key="name"
      class="elevation-1"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :items-per-page="5"
    >
      <template v-slot:item.stock="{ item }">
        <v-text-field v-model.number="item.stock" type="number" @change="updateStock(item)" :error-messages="item.stock < 5 ? ['Low stock!'] : []"></v-text-field>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip :color="item.stock < 5 ? 'red' : 'green'" dark>{{ item.stock < 5 ? 'Low' : 'OK' }}</v-chip>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'InventoryManagement',
  data() {
    return {
      search: '',
      sortBy: 'name',
      sortDesc: false,
      headers: [
        { text: 'Product Name', value: 'name' },
        { text: 'Category', value: 'category' },
        { text: 'Price', value: 'price' },
        { text: 'Stock', value: 'stock' },
        { text: 'Status', value: 'status' },
      ],
      products: [
        { name: 'Laptop', category: 'Electronics', price: 1200, stock: 3 },
        { name: 'T-shirt', category: 'Clothing', price: 20, stock: 15 },
        { name: 'Book', category: 'Books', price: 10, stock: 2 },
        { name: 'Headphones', category: 'Electronics', price: 100, stock: 8 },
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(p =>
        p.name.toLowerCase().includes(this.search.toLowerCase()) ||
        p.category.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    updateStock(item) {
      // In real app, update backend here
      if (item.stock < 0) item.stock = 0;
    },
  },
};
</script> 