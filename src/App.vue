<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <RouterLink class="nav-link" aria-current="page" to="/"
        >Home</RouterLink
      >
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link" to="/products" v-if="user"
        >Admin Product</RouterLink
      >
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link" to="/users" v-if="user"
        >Admin User</RouterLink
      >
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link" to="/login" v-if="!user">Login</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link" @click="logout()" v-if="user" to=""
        >Logout</RouterLink
      >
    </li>
  </ul>
  <RouterView />
</template>
<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  // watch: {
  //   user(val) {
  //       console.log(this.user);
  //   },
  //   // sửa phần login
  // },
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