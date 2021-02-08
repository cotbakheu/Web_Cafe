<template>
  <div class="form-login">
    <form action="" class="" @submit.prevent="onSubmit()">
      <h2 class="mb-5">Register</h2>
      <div class="row">
        <div class="d-block">
          <label class="row mt-3 text-left" for="firstname">First Name:</label>
          <label class="row mt-3 text-left" for="lastname">Last Name:</label>
          <label class="row mt-4 text-left" for="email">Email:</label>
          <label class="row mt-4 text-left" for="password">Password:</label>
          <label class="row mt-4 text-left" for="role">Role:</label>
        </div>
        <div class="ml-5">
          <input
            v-model="form.firstname"
            class="form-control shadow mt-2"
            id="firstname"
            type="text"
            placeholder="First Name"
          />
          <input
            v-model="form.lastname"
            class="shadow form-control mt-2"
            id="lastname"
            type="text"
            placeholder="Last Name"
          />
          <input
            v-model="form.email"
            class="shadow form-control mt-2"
            id="email"
            type="email"
            placeholder="Email"
          />
          <input
            v-model="form.password"
            class="shadow form-control mt-2"
            id="password"
            type="password"
            placeholder="Password"
          />
          <select
            v-model="form.access"
            id="inputState"
            class="shadow form-control mt-2"
          >
            <option value="0">Admin</option>
            <option value="1">Kasir</option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
      <hr />
      <p>
        Already has an account?<router-link to="/login"> Sign-in!</router-link>
      </p>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        access: '',
      },
    };
  },
  methods: {
    ...mapActions({
      register: 'users/register',
    }),
    onSubmit() {
      const access = Number(this.form.access);
      const data = {
        first_name: this.form.firstname,
        last_name: this.form.lastname,
        email: this.form.email,
        password: this.form.password,
        access,
      };
      this.register(data).then((response) => {
        console.log(response);
        this.$router.push('/login');
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style scoped>
.form-login {
  width: 500;
  height: auto;
  margin: 100px auto auto auto;
  border: 1px solid grey;
  padding: 50px;
  box-shadow: 5px 5px 5px grey;
  border-radius: 10px;
}
</style>
