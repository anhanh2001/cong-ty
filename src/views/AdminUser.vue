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
        <th>Tên Người Dùng</th>
        <th>Ảnh Người Dùng</th>
        <th>Email</th>
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
          <td>{{ item.email }}</td>
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
        </tr>
      </tbody>
      <tbody v-else>
        <tr v-for="item in resultQuery" :key="item.id">
          <td>{{ item.name }}</td>
          <td>
            <img style="height: 60px; width: 80px" :src="item.avatar" alt="" />
          </td>
          <td>{{ item.email }}</td>
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
          <h5 class="modal-title" id="exampleModalLabel">Thêm Người Dùng</h5>
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
                <span class="input-group-text">Tên Người Dùng</span>
                <input type="text" class="form-control" v-model="data.name" />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Email Người Dùng</span>
                <input type="text" class="form-control" v-model="data.email" />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Mật Khẩu</span>
                <input
                  type="password"
                  class="form-control"
                  v-model="data.password"
                />
              </div>
            </div>
            <div class="p-2 w-50 bd-highlight">
              <p for="" class="mb-3 fs-4">Ảnh Người Dùng</p>
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
          <h5 class="modal-title" id="exampleModalLabel">
            Sửa Thông Tin Người Dùng
          </h5>
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
                <span class="input-group-text">Tên Người Dùng</span>
                <input type="text" class="form-control" v-model="data.name" />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Email Người Dùng</span>
                <input type="text" class="form-control" v-model="data.email" />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Mật Khẩu Mới</span>
                <input
                  type="password"
                  class="form-control"
                  v-model="data.password"
                />
              </div>
            </div>
            <div class="p-2 w-50 bd-highlight">
              <p for="" class="mb-3 fs-4">Ảnh Người Dùng</p>
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
        .get("https://622a204cbe12fc4538b2f049.mockapi.io/users")
        .then((response) => {
          this.data = response.data;
        });
    },
    createButton() {
      this.data.name = "";
      this.data.email = "";
      this.data.password = "";
    },
    createClick() {
      axios
        .post("https://622a204cbe12fc4538b2f049.mockapi.io/users", {
          name: this.data.name,
          email: this.data.email,
          avatar: this.nonAvt,
          password: this.data.password,
        })
        .then((response) => {
          this.load();
          alert(response.statusText);
        });
    },
    updateClick(id) {
      axios
        .get("https://622a204cbe12fc4538b2f049.mockapi.io/users/" + id)
        .then((response) => {
          this.data.name = response.data.name;
          this.data.email = response.data.email;
          this.data.avatar = response.data.avatar;
          this.nonAvt = response.data.avatar;
          this.data.password = response.data.password;
          this.data.id = id;
        });
    },
    createUpdate(id) {
      axios
        .put("https://622a204cbe12fc4538b2f049.mockapi.io/users/" + id, {
          name: this.data.name,
          email: this.data.email,
          avatar: this.nonAvt,
          password: this.data.password,
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
        .delete("https://622a204cbe12fc4538b2f049.mockapi.io/users/" + id)
        .then((response) => {
          this.load();
          alert(response.statusText);
        });
    },

    imageUpload(event) {
      this.nonAvt = "image/" + event.target.files[0].name;
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