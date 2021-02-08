<template>
  <div>
    <div id="sidebar" class="shadow">
      <route-link to="/" class="p-4 d-block ml-auto"
        ><img src="../assets/image/fork.png" alt="items"
      /></route-link>
      <route-link to="/history" class="p-4 d-block ml-auto"
        ><img src="../assets/image/clipboard.png" alt="items"
      /></route-link>
      <route-link
        id="toggle-btn"
        @click="toggleModal()"
        class="btn p-4 d-block ml-auto bg-transparent"
        ><img src="../assets/image/add.png" alt="items"
      /></route-link>
      <button class="btn" id="signout" @click="onLogout()">
        <i class="fas fa-sign-out-alt" style="font-size: 50px"></i>
      </button>
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
            type="text"
          />
          <input
            class="ml-3 mt-2 d-block border-1"
            v-model="form.price"
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
        Add</b-button
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

export default {
  name: 'Sidebar',
  data() {
    return {
      status: true,
      categories: [],
      form: {
        name: '',
        price: '',
        image: '',
        category: '',
      },
    };
  },
  components: {
  },
  mounted() {
    this.actionGetCategory();
  },
  computed: {
    ...mapGetters({
      listCategory: 'category/getCategory',
    }),
  },
  methods: {
    ...mapActions({
      insertProduct: 'product/insertProduct',
      actionLogout: 'auth/logout',
      actionGetCategory: 'category/actionGetCategory',
    }),
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
      console.log(fd);
      console.log(this.form);
      this.insertProduct(fd);
      this.$refs['my-modal'].hide();
    },
    toggleModal() {
      this.$refs['my-modal'].toggle('#toggle-btn');
    },
    onLogout() {
      this.actionLogout().then((response) => {
        console.log(response);
        this.$router.push('/login');
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style scope>
#sidebar {
  background-color: white;
  width: 100px;
  height: 100vh;
  left: 0;
  display: block;
}
#toggle-btn {
  border: none;
}
.confirm-btn {
  text-decoration: none;
  font-weight: 400;
  padding: 10px 20px;
  background-color: #57cad5;
  border-radius: 5px;
  min-width: 70px;
  color: white;
}
.cancel-btn {
  text-decoration: none;
  font-weight: 400;
  padding: 10px 20px;
  background-color: #f24f8a;
  border-radius: 5px;
  min-width: 70px;
  color: white;
}
.img-url {
  width: 50%;
}
#signout {
  margin-top: 50px;
}
</style>
