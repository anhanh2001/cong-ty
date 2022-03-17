<template>
  <div class="col-md-8">
    <div class="row">
      <div class="col align-self-start"></div>
      <div class="col align-self-center"></div>
      <div class="col align-self-end">
        <input
          type="search"
          v-model="searchQuery"
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
          @click="create()"
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
              @click="update(item.id)"
            >
              Sửa
            </button>
            <button
              class="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
              @click="deleteId(item.id)"
            >
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
              @click="update(item.id)"
            >
              Sửa
            </button>
            <button class="btn btn-danger" @click="deleteProduct(item.id)">
              Xoá
            </button>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>

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
                  <input
                    type="text"
                    class="form-control"
                    v-model="data.price"
                  />
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
            <button
              type="button"
              @click="createProduct()"
              class="btn btn-primary"
            >
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
                  <input
                    type="text"
                    class="form-control"
                    v-model="data.price"
                  />
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
              @click="updateProduct(data.id)"
              class="btn btn-primary"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="deleteModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Xoá Sản Phẩm</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Bạn có chắc muốn xoá sản phẩm này không ?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Huỷ
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteProduct(id)"
            >
              <i class="bi bi-trash3"></i> Xoá
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Factory } from "../repository/Factory.js";
const ProductRepository = Factory.get("products");
export default {
  name: "home",
  data() {
    return {
      data: [],
      nonAvt: "http://localhost:3000/image/user.jpg",
      searchQuery: null,
      id: null,
    };
  },
  methods: {
    async getProducts() {
      const response = await ProductRepository.get();
      this.data = response.data;
    },
    create() {
      this.data.name = "";
      this.data.price = "";
      this.data.description = "";
      this.nonAvt = "http://localhost:3000/image/user.jpg";
    },
    createProduct() {
      ProductRepository.createProduct(
        this.data.name,
        this.data.price,
        this.nonAvt,
        this.data.description
      ).then(() => {
        this.getProducts();
      });
    },
    async update(id) {
      const response = await ProductRepository.getProduct(id);
      this.data.name = response.data.name;
      this.data.price = response.data.price;
      this.data.description = response.data.description;
      this.nonAvt = response.data.avatar;
      this.data.id = id;
    },
    updateProduct(id) {
      ProductRepository.updateProduct(
        this.data.name,
        this.data.price,
        this.nonAvt,
        this.data.description,
        id
      ).then(() => {
        this.getProducts();
      });
    },
    deleteId(id) {
      this.id = id;
    },
    deleteProduct(id) {
      ProductRepository.deleteProduct(id).then(() => {
        this.getProducts();
      });
    },
    imageUpload(event) {
      this.nonAvt = "image/" + event.target.files[0].name;
    },
  },
  mounted() {
    this.getProducts();
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
