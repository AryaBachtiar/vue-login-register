<template>
  <div class="register">
    <h1 class="taskRegister">Register</h1>
    <form @submit="register">
      <label class="labRegister">Username</label>
      <input
        type="text"
        name="username"
        v-model="username"
        class="inRegister"
        placeholder="Username"
        required
      />
      <label class="labRegister">Password</label>
      <input
        type="password"
        name="password"
        v-model="password"
        class="inRegister"
        placeholder="Password.."
      />
      <label class="labRegister">Pin</label>
      <input
        type="pin"
        name="pin"
        v-model="pin"
        class="inRegister"
        placeholder="***"
      />
      <button type="submit" class="btnRegister" @click="register">
        <i class="fas fa-save"></i>
        Register
      </button>
      <div class="divRegister">
        <label class="teksRegister"
          >Sudah punya akun?
          <a href="/login" class="logRegister">Login</a></label
        >
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "RegisterPage",
  data() {
    return {
      username: "",
      password: "",
      pin: "",
    };
  },
  mounted() {
    this.$emit("toggleBar");
  },
  methods: {
    async register(e) {
      // supaya tidak refresh
      e.preventDefault();
      // memasukkan data input ke json
      const playload = {
        username: this.username,
        password: this.password,
        pin: this.pin,
        role: "user",
      };
      const registrasi = await axios.post(
        "http://localhost:3000/akuns",
        playload
      );
      // fungsi setelah regis langsung ke page home
      var convertToString = JSON.stringify(registrasi.data);
      sessionStorage.setItem("USER_DATA", convertToString);
      this.$emit("toggleBar");
      this.$router.push("/login");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your akun has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>

<style>
/* register style */
.register {
  border-radius: 5%;
  width: 400px; /*meletakkan
form ke tengah*/
  margin: 60px auto;
  padding: 30px 20px;
  background-image: linear-gradient(maroon, rgb(95, 93, 93));
}
.taskRegister {
  text-align: center;
  margin-bottom: 20px;
  /*membuat semua huruf menjadi kapital*/
  text-transform: uppercase;
  color: white;
  /*ketebalan font*/
  font-weight: 50px;
  font-family: "comic sans ms";
}
.labRegister {
  color: white;
  font-size: 17px;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-family: "comic sans ms";
}
.inRegister {
  /*membuat lebar form penuh*/
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 17px;
  margin-bottom: 15px;
  font-family: "comic sans ms";
}
.btnRegister {
  font-size: 17px;
  text-transform: uppercase;
  font-family: "comic sans ms";
  font-weight: 700;
  color: maroon;
  padding: 10px;
  width: 100%;
  margin-top: 25px;
}
.fa-save {
  width: 15px;
  height: 15px;
}
.divRegister {
  text-align: center;
  font-family: "comic sans ms";
}
.teksRegister {
  color: white;
  text-align: end;
  margin-top: 10px;
  margin-bottom: -20px;
}
.logRegister {
  padding-left: 2px;
  color: white;
  text-decoration: underline;
}
</style>
