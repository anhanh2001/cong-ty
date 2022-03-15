<template>
  <div class="container">
    <table
      class="table table-striped"
      border="1px"
      style="text-align: center; margin: auto; line-height: 51.5px"
    >
      <thead>
        <th>STT</th>
        <th>Tên Sản Phẩm</th>
        <th>Ảnh Sản Phẩm</th>
        <th>Giá Sản Phẩm</th>
        <th>Mô tả Sản Phẩm</th>
        <!-- <button
          class="btn btn-success m-2 fload-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="createButton()"
        >
          Tạo Mới
        </button> -->
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <th>{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>
            <img style="height: 60px; width: 80px" :src="item.avatar" alt="" />
          </td>
          <td>${{ item.price }}</td>
          <!-- <td>
            <button class="btn btn-warning" data-bs-toggle="modal"
          data-bs-target="#editModal" @click="updateClick(item.id)">
              Sửa
            </button>
            <button class="btn btn-danger" @click="deleteClick(item.id)">
              Xoá
            </button>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getCart() {
      let get = JSON.parse(localStorage.getItem("cart"));
      if (get) {
        this.products = get;
      } else {
        this.products = [];
      }
    },
  },
  mounted(){
      this.getCart();
  }
};
</script>