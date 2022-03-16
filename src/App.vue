<script setup>
import { RouterLink, RouterView} from "vue-router";
</script>

<template>
  <header class="d-flex justify-content-center py-3">
    <ul class="nav nav-pills mb-3">
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/products" v-if="user"
          >Admin Product</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/users" v-if="user"
          >Admin User</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/login" v-if="!user">Login</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" @click="logout()" v-if="user" to=""
          >Logout</RouterLink
        >
      </li>
    </ul>
  </header>
  <main>
    <RouterView />
  </main>
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
      if (localStorage.getItem("email") != null) {
        this.user = true;
      } else {
        this.user = false;
      }
    },
    logout() {
      localStorage.removeItem("email");
      this.user = false;
      this.$router.push("/");
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
a:hover {
  color: white;
}
</style>