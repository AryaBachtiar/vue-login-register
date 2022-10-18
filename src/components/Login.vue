<template>
  <div class="kotak_login">
 <h1 style="color:black">LOGIN</h1>
    <form @submit="login">
      <label>username</label>
      <input
        type="text"
        required
        name="username"
        v-model="form.username"
        class="form_login"
        placeholder="Username"
      />
      <label>password</label>
      <input
        type="password"
        name="password"
        v-model="form.password"
        required
        class="form_login"
        placeholder="Password..."
      />
      <button type="submit">
        Login
      </button>

    <center>
    <p class="f00ter">
      <a href="/register" class="registerdonk">Register</a>
      <span class="notReg">Jika Belum Memiliki Akun</span>
    </p>
      </center>
      </form>
  </div>
</template>

<script>
// import axios
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        username: "",
        password: "",
        users:{},
      },
    };
  },
  methods: {
    // menjalankan 2 fungsi
    async getUser() {
      const user = await axios.get("http://localhost:3000/akuns");
      this.users = user.data;
    },
    // fungsi tombol login
    login(e) {
e.preventDefault();
 const login = this.users.find(
        (data) => data.username === this.form.username &&
                  data.password === this.form.password
      );
    // Kondisi jika akun benar akan masuk ke page
      if (login === undefined) {
        alert("Username or Password Not Found");
      } else {
        var convertToString = JSON.stringify(login);
        sessionStorage.setItem("USER_DATA", convertToString);
        sessionStorage.setItem("USER", login.role);
        this.$router.push("/home");
        window.location.reload();
      } 
    },
  },
  mounted() {
    this.getUser();
    // fungsi toggle pada app.vue 
    // this.$emit("toggleBar");
  },
};
</script>