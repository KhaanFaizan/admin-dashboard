<template>
  <v-container>
    <v-form ref="form" @submit.prevent="submit">
      <v-text-field v-model="product.name" label="Product Name" required></v-text-field>
      <v-text-field v-model="product.category" label="Category" required></v-text-field>
      <v-text-field v-model="product.price" label="Price" type="number" required></v-text-field>
      <v-text-field v-model="product.stock" label="Initial Stock" type="number" required></v-text-field>
      <v-textarea v-model="product.description" label="Description"></v-textarea>
      <v-file-input v-model="product.image" label="Product Image" accept="image/*"></v-file-input>
      <v-btn color="primary" type="submit">Add Product</v-btn>
    </v-form>
    <v-alert v-if="success" type="success" class="mt-4">Product added successfully!</v-alert>
  </v-container>
</template>

<script>
export default {
  name: 'ProductRegistration',
  data() {
    return {
      product: {
        name: '',
        category: '',
        price: '',
        stock: '',
        description: '',
        image: null,
      },
      success: false,
    };
  },
  methods: {
    submit() {
      // In real app, send to backend. Here, just show success.
      this.success = true;
      this.$refs.form.reset();
      setTimeout(() => (this.success = false), 2000);
    },
  },
};
</script> 