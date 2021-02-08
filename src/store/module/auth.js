import axios from 'axios';
import Swal from 'sweetalert2';

const auth = {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '',
  }),
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    login(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/login', data).then((response) => {
          if (response.data.code === 500) {
            Swal.fire({
              text: `${response.data.message}`,
              icon: 'error',
            });
          } else {
            Swal.fire({
              text: `${response.data.message}`,
              icon: 'success',
            });
            localStorage.setItem('token', response.data.token);
            context.commit('setToken', response.data.token);
            resolve(response.data.message);
            this.$router.push('/');
          }
        }).catch((err) => {
          reject(err);
        });
      });
    },
    logout() {
      return new Promise((resolve) => {
        localStorage.removeItem('token');
        resolve(true);
      });
    },
  },
  getters: {
    getToken(state) {
      return state.token;
    },
  },
};

export default auth;
