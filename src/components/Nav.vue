<template>
  <nav>
    <button class="btn btn-primary">
      <RouterLink to="/">Home</RouterLink>
    </button>
    <button class="btn btn-primary" v-if="user">
      <RouterLink to="/admin">Admin</RouterLink>
    </button>
    <button class="btn btn-primary" v-if="!user">
      <RouterLink to="/login">Login</RouterLink>
    </button>
    <button class="btn btn-primary" v-if="user">
      <RouterLink @click="logout()" to="/">Logout</RouterLink>
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    checkLogin() {
      if (localStorage.getItem("email")) {
        this.user = true;
      } else {
        this.user = false;
      }
    },
    logout(){
      localStorage.removeItem("email");
      this.$router.push('/');
    }
  },
  mounted() {
    this.checkLogin();
  },
  props: ['user']
};
</script>