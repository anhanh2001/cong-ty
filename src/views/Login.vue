<template>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp" v-model="email"
        />
        <!-- <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div> -->
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1" v-model="password"
        />
      </div>
      <div class="mb-3">
        <span v-if="trueInfo==true" class="text-danger"
          >Tài khoản hoặc mật khẩu không chính xác</span
        >
      </div>
      <button type="submit" @click.prevent="login(email,password)" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      users: [],
      trueInfo: false,
      email:'',
      password:'',
    };
  },
  methods: {
    allUser(){
        axios
        .get("https://622a204cbe12fc4538b2f049.mockapi.io/users")
        .then((response)=>{
            this.users = response.data;
        })
    },
    login(email, password) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].email === email && this.users[i].password === password) {
          localStorage.setItem("email", this.users[i].email);
          this.$router.push("/");
        } else {
          this.trueInfo = true;
        }
      }
    },
  },
  mounted(){
      this.allUser();
  }
};
</script>