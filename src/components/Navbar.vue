<template>
  <div class="all">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-if="adminAccess">
              <router-link to="/home">Home</router-link>
            </li>
            <li class="nav-item" v-if="adminAccess">
              <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item"  v-if="adminAccess">
              <router-link to="/contact"
                >Contact</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/produk">Produk</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/detail">Detail</router-link>
            </li>
          </ul>
          <a
            class="btn btn-outline-danger my-2 my-0"
            style="margin-left: 90%"
            @click="out"
            href="/"
            >Log out</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavComp",
  computed: {
    adminAccess() {
      return sessionStorage.getItem("USER") === "admin";
    },
  },

  methods: {
    out() {
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
ul {
  width: 200px;
  list-style-type: none;
  border: 1px solid;
  margin: 0;
  padding: 0;
  text-align: center;
  position: fixed;
  padding-left: 10px;
  border: none;
}
li {
  /* line-height: 2; */
  padding: 12px 16px;
}
li a {
  color: black;
  text-decoration: none;
}
</style>
