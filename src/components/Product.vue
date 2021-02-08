<template>
  <div class="row mt-3">
    <div
      v-for="(product, index) in getProduct"
      :key="index"
      class="card col-3 ml-5 mt-3 text-left p-0"
      style="width: 20rem"
    >
      <img
        :src="'http://localhost:3000/image/' + product.image"
        class="card-img-top"
        :alt="product.name"
      />
      <div class="row card-body">
        <div class="d-block">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">Rp. {{ product.price }}</p>
        </div>
        <div class="d-block">
          <a class="btn btn-primary" @click="detail(product.id)">Detail</a>
          <a href="#" class="btn btn-primary ml-1">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import router from '../router/index';

export default {
  name: 'Product',
  data() {
    return {

    };
  },
  mounted() {
    this.products();
  },
  computed: {
    ...mapGetters({
      getProduct: 'product/getProduct',
    }),
  },
  methods: {
    ...mapActions({
      products: 'product/actionsGetProduct',
    }),
    detail(id) {
      router.push(`/detail/${id}`);
    },
  },
};
</script>

<style scope>
.card-display {
  display: flex;
  flex-direction: column;
}
</style>
