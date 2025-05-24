<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Total Orders</v-card-title>
          <v-card-text>{{ totalOrders }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Total Revenue</v-card-title>
          <v-card-text>${{ totalRevenue }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-select :items="categories" v-model="selectedCategory" label="Filter by Category" clearable></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <canvas id="ordersChart"></canvas>
      </v-col>
      <v-col cols="12" md="6">
        <canvas id="revenueChart"></canvas>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'RevenueAnalysis',
  data() {
    return {
      ordersData: [120, 90, 150, 200, 170, 220, 180],
      revenueData: [1200, 900, 1500, 2000, 1700, 2200, 1800],
      categories: ['All', 'Electronics', 'Clothing', 'Books'],
      selectedCategory: 'All',
    };
  },
  computed: {
    totalOrders() {
      return this.ordersData.reduce((a, b) => a + b, 0);
    },
    totalRevenue() {
      return this.revenueData.reduce((a, b) => a + b, 0);
    },
  },
  watch: {
    selectedCategory() {
      this.updateCharts();
    },
  },
  mounted() {
    this.renderCharts();
  },
  methods: {
    renderCharts() {
      this.ordersChart = new Chart(document.getElementById('ordersChart'), {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Orders',
            data: this.ordersData,
            borderColor: 'blue',
            fill: false,
          }],
        },
      });
      this.revenueChart = new Chart(document.getElementById('revenueChart'), {
        type: 'bar',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Revenue',
            data: this.revenueData,
            backgroundColor: 'green',
          }],
        },
      });
    },
    updateCharts() {
      // For demo, just randomize data on category change
      this.ordersData = this.ordersData.map(() => Math.floor(Math.random() * 200));
      this.revenueData = this.revenueData.map(() => Math.floor(Math.random() * 2500));
      this.ordersChart.data.datasets[0].data = this.ordersData;
      this.ordersChart.update();
      this.revenueChart.data.datasets[0].data = this.revenueData;
      this.revenueChart.update();
    },
  },
};
</script> 