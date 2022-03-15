<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col align-self-start"></div>
      <div class="col align-self-center"></div>
      <div class="col align-self-end">
        <input
          type="search" v-model="searchQuery"
          class="form-control mb-2"
          placeholder="Tìm kiếm..."
          aria-label="Search"
        />
      </div>
    </div>
    <table
      class="table table-striped"
      border="1px"
      style="text-align: center; margin: auto; line-height: 51.5px"
    >
      <thead>
        <th>Tên Sản Phẩm</th>
        <th>Ảnh Sản Phẩm</th>
        <th>Giá Sản Phẩm</th>
        <th>Mô tả Sản Phẩm</th>
        <button
          class="btn btn-success m-2 fload-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="createButton()"
        >
          Tạo Mới
        </button>
      </thead>
      <tbody v-if="!searchQuery">
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.name }}</td>
          <td>
            <img style="height: 60px; width: 80px" :src="item.avatar" alt="" />
          </td>
          <td>${{ item.price }}</td>
          <td>{{ item.description }}</td>
          <td>
            <button
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              @click="updateClick(item.id)"
            >
              Sửa
            </button>
            <button class="btn btn-danger" @click="deleteClick(item.id)">
              Xoá
            </button>
          </td>
          <td></td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr v-for="item in resultQuery" :key="item.id">
          <td>{{ item.name }}</td>
          <td>
            <img style="height: 60px; width: 80px" :src="item.avatar" alt="" />
          </td>
          <td>${{ item.price }}</td>
          <td>{{ item.description }}</td>
          <td>
            <button
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              @click="updateClick(item.id)"
            >
              Sửa
            </button>
            <button class="btn btn-danger" @click="deleteClick(item.id)">
              Xoá
            </button>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Thêm Sản Phẩm</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 w-50 bd-highlight">
              <div class="input-group mb-3">
                <span class="input-group-text">Tên Sản Phẩm</span>
                <input type="text" class="form-control" v-model="data.name" />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Giá Sản Phẩm</span>
                <input type="text" class="form-control" v-model="data.price" />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Mô Tả Sản Phẩm</span>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.description"
                />
              </div>
              <!-- <div class="input-group mb-3">
                <span class="input-group-text">Ảnh Sản Phẩm</span>
                <input type="text" class="form-control" v-model="data.avatar" />
              </div> -->
            </div>
            <div class="p-2 w-50 bd-highlight">
              <p for="" class="mb-3 fs-5">Ảnh Sản Phẩm</p>
              <img style="height: 250px; width: 250px" :src="nonAvt" />
              <input class="m-2" type="file" @change="imageUpload" />
            </div>
          </div>
          <button type="button" @click="createClick()" class="btn btn-primary">
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Sửa Sản Phẩm</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 w-50 bd-highlight">
              <div class="input-group mb-3">
                <span class="input-group-text">Tên Sản Phẩm</span>
                <input type="text" class="form-control" v-model="data.name" />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Giá Sản Phẩm</span>
                <input type="text" class="form-control" v-model="data.price" />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Mô Tả Sản Phẩm</span>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.description"
                />
              </div>
            </div>
            <div class="p-2 w-50 bd-highlight">
              <p for="" class="mb-3 fs-5">Ảnh Sản Phẩm</p>
              <img style="height: 250px; width: 250px" :src="nonAvt" />
              <input class="m-2" type="file" @change="imageUpload" />
            </div>
          </div>
          <button
            type="button"
            @click="createUpdate(data.id)"
            class="btn btn-primary"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      data: [],
      nonAvt: "http://localhost:3000/image/user.jpg",
      searchQuery: null,
    };
  },
  methods: {
    load() {
      axios
        .get("https://622a204cbe12fc4538b2f049.mockapi.io/products")
        .then((response) => {
          this.data = response.data;
        });
    },
    createButton() {
      this.data.name = "";
      this.data.price = "";
      this.data.description = "";
    },
    createClick() {
      axios
        .post("https://622a204cbe12fc4538b2f049.mockapi.io/products", {
          name: this.data.name,
          price: this.data.price,
          avatar: this.nonAvt,
          description: this.data.description,
        })
        .then((response) => {
          this.load();
          alert(response.statusText);
        });
    },
    updateClick(id) {
      axios
        .get("https://622a204cbe12fc4538b2f049.mockapi.io/products/" + id)
        .then((response) => {
          this.data.name = response.data.name;
          this.data.price = response.data.price;
          this.data.description = response.data.description;
          this.nonAvt = response.data.avatar;
          this.data.id = id;
        });
    },
    createUpdate(id) {
      axios
        .put("https://622a204cbe12fc4538b2f049.mockapi.io/products/" + id, {
          name: this.data.name,
          price: this.data.price,
          avatar: this.nonAvt,
          description: this.data.description,
        })
        .then((response) => {
          this.load();
          alert(response.statusText);
        });
    },
    deleteClick(id) {
      if (!confirm("Are you sure?")) {
        return;
      }
      axios
        .delete("https://622a204cbe12fc4538b2f049.mockapi.io/products/" + id)
        .then((response) => {
          this.load();
          alert(response.statusText);
        });
    },
    imageUpload(event) {
      this.nonAvt = "image/" + event.target.files[0].name;
      // let reader = new FileReader();
      // reader.readAsDataURL(image);
      // reader.onload = event => {
      //   this.nonAvt = event.target.result;
      // }
    },
  },
  mounted() {
    this.load();
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.data.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.data;
      }
    },
  },
};
</script>
