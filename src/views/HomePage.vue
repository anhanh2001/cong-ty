<template>
  <h3 class="float-end m-4">
    <RouterLink to="/cart" style="color: black"
      >Giỏ Hàng ({{ cart.length }})</RouterLink
    >
  </h3>
  <div class="container">
    <div class="row row-cols-3">
        <div class="card mb-3" v-for="item in products" :key="item.id">
          <img :src="item.avatar" class="card-img-top" :alt="item.avatar" />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">
              {{ item.description }}
            </p>
            <p class="card-text">${{ item.price }}</p>
            <button @click="addCart(item, quantity)" class="btn btn-primary">
              Add To Cart
            </button>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  methods: {
    load() {
      axios
        .get("https://622a204cbe12fc4538b2f049.mockapi.io/products")
        .then((response) => {
          this.products = response.data;
        });
    },
    addCart(product) {
      let cart = [];
      let storage = localStorage.getItem("cart");
      if (storage) {
        cart = JSON.parse(storage);
      }
      let item = cart.find((c) => c.product.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        cart.push({ product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      this.getCart();
    },
    getCart() {
      let get = JSON.parse(localStorage.getItem("cart"));
      if (get) {
        this.cart = get;
      } else {
        this.cart = [];
      }
    },
  },
  mounted() {
    this.load();
    this.getCart();
  },
};
</script>