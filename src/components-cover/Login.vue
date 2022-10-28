<template>
  <div class="login">
    <h1 class="taskLogin">LOGIN</h1>
    <form @submit="login">
      <label class="labLogin">Username</label>
      <input
        type="text"
        required
        name="username"
        v-model="form.username"
        class="inLogin"
        placeholder="Username"
      />
      <label class="labLogin">Password</label>
      <input
        type="password"
        name="password"
        v-model="form.password"
        required
        class="inLogin"
        placeholder="Password..."
      />
      <label class="labLogin">Pin</label>
      <input
        type="pin"
        name="pin"
        v-model="form.pin"
        required
        class="inLogin"
        placeholder="***"
      />
      <button type="submit" class="btnLogin" @click="login">
        <i class="fas fa-door-open"></i>Login
      </button>

      <center>
        <p class="divLogin">
          <a href="/register" class="logLogin">Register</a>
          <span class="teksLogin">Jika Belum Memiliki Akun</span>
        </p>
      </center>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        username: "",
        password: "",
        pin: "",
        useres: {},
      },
      updateSubmit: false,
    };
  },
  mounted() {
    this.getUser();
    this.$emit("toggleBar");
  },
  methods: {
    async getUser() {
      const user = await axios.get("http://localhost:3000/akuns");
      this.useres = user.data;
    },
    // fungsi tombol login
    login(e) {
      e.preventDefault();
      const login = this.useres.find(
        (data) =>
          data.username === this.form.username &&
          data.password === this.form.password &&
          data.pin === this.form.pin
      );
      // Kondisi jika akun benar akan masuk ke page
      if (login === undefined) {
        Swal.fire({
          icon: "error",
          title: "Your akun is not undefined!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        var convertToString = JSON.stringify(login);
        sessionStorage.setItem("USER_DATA", convertToString);
        sessionStorage.setItem("role", login.role);
        if (sessionStorage.getItem("role") === "admin") {
          Swal.fire({
            icon: "success",
            title: "Welcome Admin!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$router.push("/");
        } else {
          Swal.fire({
            icon: "success",
            title: "Welcome User!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$router.push("/");
        }
      }
    },
  },
};
</script>

<style>
.login {
  border-radius: 5%;
  width: 400px;
  /*meletakkan form ke tengah*/
  margin: 60px auto;
  padding: 30px 20px;
  background-image: linear-gradient(maroon, rgb(95, 93, 93));
}

.taskLogin {
  text-align: center;
  margin-bottom: 20px;
  /*membuat semua huruf menjadi kapital*/
  text-transform: uppercase;
  color: white;

  /*ketebalan font*/
  font-weight: 50px;
  font-family: "comic sans ms";
}

.labLogin {
  color: white;
  font-size: 17px;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-family: "comic sans ms";
}

.inLogin {
  /*membuat lebar form penuh*/
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 17px;
  margin-bottom: 15px;
  font-family: "comic sans ms";
}

.btnLogin {
  font-size: 17px;
  text-transform: uppercase;
  font-family: "comic sans ms";
  font-weight: 700;
  color: maroon;
  padding: 10px;
  width: 100%;
  margin-top: 25px;
}

.fa-door-open {
  width: 15px;
  height: 15px;
}

.divLogin {
  text-align: center;
  font-family: "comic sans ms";
  margin-top: 20px;
}

.teksLogin {
  color: white;
  text-align: end;
}

.logLogin {
  margin-right: 4px;
  color: white;
  text-decoration: underline;
}
</style>
