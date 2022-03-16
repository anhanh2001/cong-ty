<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <main>
      <div class="row">
        <div
          class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style="width: 280px;min-height:955px;"
        >
          <RouterLink 
            to="/"
            class="
              d-flex
              align-items-center
              mb-3 mb-md-0
              me-md-auto
              text-white text-decoration-none
            "
          >
            <svg class="bi me-2" width="40" height="32">
            </svg>
            <span class="fs-4"><i class="bi bi-bookmark-star mx-2"></i>Sidebar</span>
          </RouterLink>
          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link text-white" active-class="active">
                <i class="bi bi-house-fill mx-2"></i>
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/products" class="nav-link text-white" v-if="user" active-class="active">
                  <i class="bi bi-credit-card mx-2"></i>
                Admin Product
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/users" class="nav-link text-white" active-class="active" v-if="user">
                <i class="bi bi-person-fill mx-2"></i>
                Admin User
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/login" v-if="!user" class="nav-link text-white" active-class="active">
                <i class="bi bi-box-arrow-in-right mx-2"></i>
                Login
              </RouterLink>
            </li>
            <li>
              <RouterLink to="" @click="logout()" v-if="user" class="nav-link text-white">
                <i class="bi bi-box-arrow-in-right mx-2"></i>
                Logout
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="col-md-1"></div>
        <RouterView class="mt-5" />
      </div>
    </main>
  </div>
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
  watch: {
    $route(to, from) {
      this.checkLogin();
    },
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