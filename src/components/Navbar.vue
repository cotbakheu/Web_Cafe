<template>
  <div>
    <b-navbar class="shadow">
      <div class="col-1 mr-5">
        <i class="fa fa-bars" style="font-size: 40px"></i>
      </div>
      <div class="col-5">
        <b-navbar-brand>Food Items</b-navbar-brand>
      </div>
      <div class="col-2">
        <i class="fas fa-search"></i>
      </div>
      <div class="col-4 border-left border-right ml-5">
        <b-navbar-nav>
          <b-nav-text class="m-auto">Cart <span>0</span></b-nav-text>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  components: {
  },
  data() {
    return {
      status: true,
    };
  },
  methods: {
    onClick() {
      this.status = !this.status;
    },
  },
};
</script>

<style scoped>
</style>
