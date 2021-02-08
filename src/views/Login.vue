<template>
  <div class="form-login">
    <form action="" class="" @submit.prevent="onSubmit()">
      <h2 class="mb-5">Login</h2>
      <div class="row">
        <div class="d-block">
          <label class="row mt-3 text-left" for="email">Email:</label>
          <label class="row mt-4 text-left" for="password">Password:</label>
        </div>
        <div class="ml-5">
          <input
            v-model="form.email"
            class="form-control shadow mt-2"
            id="email"
            type="email"
            placeholder="email"
          />
          <input
            v-model="form.password"
            class="shadow form-control mt-2"
            id="password"
            type="password"
            placeholder="password"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
      <hr />
      <p>
        Don't have an account?
        <router-link to="/register">Register here!</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import Swal from 'sweetalert2';

export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      tesUser: 'auth/tesUser',
    }),
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
    }),
    onSubmit() {
      const data = {
        email: this.form.email,
        password: this.form.password,
      };
      this.login(data).then((response) => {
        console.log(response);
        this.$router.push('/');
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style scope>
.form-login {
  width: 500px;
  height: auto;
  margin: 100px auto auto auto;
  border: 1px solid grey;
  padding: 50px;
  box-shadow: 5px 5px 5px grey;
  border-radius: 10px;
}
</style>
