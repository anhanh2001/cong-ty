<template>
  <div class="col-md-8">
    <table
      class="table table-striped"
      border="1px"
      style="text-align: center; margin: auto; line-height: 51.5px"
    >
      <thead>
        <th>Tên Sản Phẩm</th>
        <th>Ảnh Sản Phẩm</th>
        <th>Giá Tiền</th>
        <th>Số Lượng</th>
        <th>Tạm Tính</th>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.product.name }}</td>
          <td>
            <img
              style="height: 60px; width: 80px"
              :src="item.product.avatar"
              alt=""
            />
          </td>
          <td>${{ item.product.price }}</td>
          <td>
            <button class="btn" @click="minusQuantity(item)">
              <i class="bi bi-dash-circle"></i>
            </button>
            {{ item.quantity }}
            <button class="btn" @click="addQuantity(item)">
              <i class="bi bi-plus-circle"></i>
            </button>
          </td>
          <td>${{ item.quantity * item.product.price }}</td>
        </tr>
        <th colspan="6">
          <h4>Tổng Tiền:   ${{total}}</h4>
        </th>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  methods: {
    getCart() {
      let get = JSON.parse(localStorage.getItem("cart"));
      if (get) {
        this.products = get;
        this.cart = get;
      } else {
        this.products = [];
        localStorage.removeItem("cart");
      }
    },
    addQuantity(product) {
      let cart = [];
      let storage = localStorage.getItem("cart");
      if (storage) {
        cart = JSON.parse(storage);
      }
      let item = cart.find((c) => c.product.id === product.product.id);

      item.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      this.getCart();
    },
    minusQuantity(product) {
      let cart = [];
      let storage = localStorage.getItem("cart");
      if (storage) {
        cart = JSON.parse(storage);
      }
      let item = cart.find((c) => c.product.id === product.product.id);
      if (item.quantity == 1) {
        let newcart = cart.filter((pro) => pro != item);
        cart = newcart;
      } else {
        item.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      this.getCart();
    },
  },
  mounted() {
    this.getCart();
  },
  computed: {
    total() {
      let tongTien = 0;
      for (let i = 0; i < this.cart.length; i++) {
        tongTien += this.cart[i].product.price * this.cart[i].quantity;
      }
      return tongTien;
    },
  },
};
</script>