<template>
  <div>
    <Navbar />
    <div class="row">
      <div class="col-1">
        <Sidebar />
      </div>
      <div class="col-7">
        <Product />
      </div>
      <div class="col-4">
        <Checkout />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Navbar from '../components/Navbar.vue';
import Checkout from '../components/Checkout.vue';
import Product from '../components/Product.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
    Navbar,
    Checkout,
    Product,
  },
};
</script>
