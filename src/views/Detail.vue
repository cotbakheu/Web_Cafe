<template>
  <div>
    <h2 class="mb-5">Detail Produk</h2>
    <div class="card m-auto" style="width: 18rem">
      <img
        :src="'http://localhost:3000/image/' + detailProduct[0].image"
        class="card-img-top"
        :alt="detailProduct[0].name"
      />
      <div class="card-body">
        <h5 class="card-title">{{ detailProduct[0].name }}</h5>
        <p class="card-text">{{ detailProduct[0].price }}</p>
        <p class="card-text">{{ detailProduct[0].category_name }}</p>
        <p class="card-text">{{ detailProduct[0].date }}</p>
        <a @click="onDelete(detailProduct[0].id)" class="btn btn-primary"
          >Delete</a
        >
        <a id="toggle-btn" @click="toggleModal()" class="btn btn-primary ml-3"
          >Update</a
        >
      </div>
    </div>
    <b-modal ref="my-modal" hide-footer title="Add Item">
      <div class="px-5 row">
        <div class="d-block col-3">
          <h4 class="mt-2">Name</h4>
          <h4 class="mt-2">Price</h4>
          <h4 class="mt-2">Image</h4>
          <h4 class="mt-2">Category</h4>
        </div>
        <div class="d-block col-3">
          <input
            class="ml-3 mt-2 d-block border-1"
            v-model="form.name"
            :value="detailProduct[0].name"
            type="text"
          />
          <input
            class="ml-3 mt-2 d-block border-1"
            v-model="form.price"
            :value="detailProduct[0].price"
            type="number"
          />
          <input
            type="file"
            @change="processFile($event)"
            class="ml-3 mt-2 d-block"
            id="image"
          />
          <div class="input-group ml-3 mt-2 d-block">
            <select
              v-model="form.category"
              class="form-select"
              id="inputGroupSelect02"
            >
              <option
                v-for="category in listCategory"
                :key="category.id"
                :value="category.id"
              >
                {{ category.category_name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <b-button
        class="mt-3"
        variant="outline-danger"
        block
        @click="acceptModal()"
      >
        Update</b-button
      >
      <b-button
        class="mt-2"
        variant="outline-warning"
        block
        @click="cancelModal()"
      >
        Cancel</b-button
      >
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import router from '../router/index';

export default {
  data() {
    return {
      paramId: this.$route.params.id,
      form: {
        name: '',
        price: '',
        image: '',
        category: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      detailProduct: 'product/detailProduct',
    }),
    ...mapGetters({
      listCategory: 'category/getCategory',
    }),
  },
  methods: {
    ...mapActions({
      getDetail: 'product/actionsGetDetail',
      deleteProduct: 'product/actionsDeleteProduct',
      updateProduct: 'product/actionsUpdateProduct',
      actionGetCategory: 'category/actionGetCategory',
    }),
    onDelete(id) {
      this.deleteProduct(id);
      this.$router.push('/');
    },
    processFile(el) {
      this.form.image = el.target.files[0];
    },
    cancelModal() {
      this.$refs['my-modal'].hide();
    },
    acceptModal() {
      const fd = new FormData();
      fd.append('name', this.form.name);
      fd.append('price', this.form.price);
      fd.append('image', this.form.image);
      fd.append('category', this.form.category);
      this.updateProduct(fd, this.paramId);
      this.$refs['my-modal'].hide();
    },
    toggleModal() {
      this.$refs['my-modal'].toggle('#toggle-btn');
    },
  },
  mounted() {
    this.getDetail(this.paramId);
  },
};
</script>

<style>
</style>
