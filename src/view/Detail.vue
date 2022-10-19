<template>
  <div id="home">
    <NavBar />

    <div class="induk" style="background-color: white">
      <!-- Modal Add -->
      <div>
        <!-- Button trigger modal -->
        <br />
        <div class="btn11">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add
          </button>
        </div>
        <br />
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  form <span v-show="updateSubmitjakarta">tambah</span>
                  <span v-show="updateSubmitjakarta">update</span>
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <!-- masukan -->
                <form id="atas" @submit.prevent="add">
                  <div class="product">
                    <input type="hidden" v-model="form.id" />
                    <div>
                      <label for="">Nama</label><br />
                      <input type="text" v-model="form.name" required />
                    </div>
                    <br />
                    <div>
                      <label for="">Bahan Bakar</label><br />
                      <input type="text" v-model="form.bb" required />
                    </div>
                    <br />
                    <div>
                      <label for="">CC</label><br />

                      <input type="text" v-model="form.cc" required />
                    </div>
                    <br />
                    
                  </div>
                  <div class="btn1">
                    <button
                      class="btn btn-secondary"
                      type="submit"
                      v-show="!updateSubmit"
                    >
                      Tambahkan
                    </button>
                    <!-- jika tidak update maka tombol update tidak muncul -->
                    <button
                      type="button"
                      v-show="updateSubmit"
                      @click="update(form)"
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      @click="close"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div><!-- Database -->
      <table class="table" border="1" style="width: 98%">
        <tr class="tr">
          <th>No</th>
          <th>Name</th>
          <th>Bahan Bakar</th>
          <th>Kapasitas Mesin</th>
          <th>action</th>
        </tr><tr class="tr" v-for="(product, index) in products" :key="product.id">
          <td>
            <span class="bb"> {{ index + 1 }}</span> &#160;
          </td>
          <td>
            <span class="bb"> {{ product.name }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ product.bb }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ product.cc }}</span> &#160;
          </td>
      

          <td class="btn2">
            <a href="#exampleModalLabel">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class="aa"
                @click="edit(product)"
              >
                <i class="fas fa-wrench"></i>Edit
              </button></a
            >
            <button class="aa" @click="del(product)">
              <i class="fas fa-trash-alt"></i>Delete
            </button>
          </td>
        </tr>
      </table>

      <!-- table 2 -->
      <div>
        <!-- Button trigger modal -->
        <br />
        <div class="btn11">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#product2"
          >
            Add
          </button>
        </div>
        <br />
        <!-- Modal -->
        <div
          class="modal fade"
          id="product2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  formbali <span v-show="updateSubmitjakarta">tambah</span>
                  <span v-show="updateSubmitjakarta">update</span>
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <!-- masukan -->
                <form id="atas" @submit.prevent="addbali">
                  <div class="product">
                    <input type="hidden" v-model="formbali.id" />
                    <div>
                      <label for="">Nama</label><br />
                      <input type="text" v-model="formbali.name" required />
                    </div>
                    <br />
                    <div>
                      <label for="">Tahun</label><br />
                      <input type="text" v-model="formbali.bb" required />
                    </div>
                    <br />
                    <div>
                      <label for="">Kapasitas MEsin</label><br /><input type="text" v-model="formbali.cc" required />
                    </div>
                    <br />
                    
                   
                    <br />
                  </div>
                  <div class="btn1">
                    <button
                      class="btn btn-secondary"
                      type="submit"
                      v-show="!updateSubmit"
                    >
                      Tambahkan
                    </button>
                    <!-- jika tidak update maka tombol update tidak muncul -->
                    <button
                      type="button"
                      v-show="updateSubmit"
                      @click="update(form)"
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      @click="close"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Database -->
      <table class="table" border="1" style="width: 98%">
        <tr class="tr">
          <th>no</th>
          <th>Name</th>
          <th>Tahun</th>
          <th>CC</th>
          <th>action</th>
        </tr>

        <tr class="tr" v-for="(product2, index) in products2" :key="product2.id">
          <td>
            <span class="bb"> {{ index + 1 }}</span> &#160;
          </td>
          <td>
            <span class="bb"> {{ product2.name }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ product2.bb }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ product2.cc }}</span> &#160;
          </td>
         

          <td class="btn2">
            <a href="#exampleModalLabel">
              <button
                data-bs-toggle="modal"
                data-bs-target="#product2"
                class="aa"
                @click="edit(product2)"
              >
                <i class="fas fa-wrench"></i>Edit
              </button></a
            >
            <button class="aa" @click="del(product2)">
              <i class="fas fa-trash-alt"></i>Delete
            </button>
          </td>
        </tr>
      </table>
      <a href="../view/Home.vue"
        ><div class="kembali"><button>kembali</button></div></a
      >
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import NavBar from "../components/Navbar.vue";
export default {
  name: "HomePage",
  components: {
    NavBar,
  },
  mounted() {
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
    this.load();
    this.loadbali();
  },
  data() {
    return {
      form: {
        id: "",
        name: "",
        bb: "",
        cc: "",
        iconkota: "",
        image: "",
      },
      products: "",
      updateSubmit: false,
      formbali: {
        id: "",
        name: "",
        bb: "",
        cc: "",
        iconkota: "",
        image: "",
      },
      products2: "",
      updateSubmit: false,
    };
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/products")
        .then((res) => {
          this.products = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadbali() {
      axios
        .get("http://localhost:3000/products2")
        .then((res) => {
          this.products2 = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/products/", this.form).then((res) => {
        this.load();
        (this.form.name = ""),
          (this.form.bb = ""),
          (this.form.cc = ""),
          (this.form.iconkota = ""),
          (this.form.image = "");
      });
    },
    addproject() {
      axios.post("http://localhost:3000/products2/", this.form).then((res) => {
        this.loadbali();
        (this.form.name = ""),
          (this.form.bb = ""),
          (this.form.cc = ""),
          (this.form.iconkota = ""),
          (this.form.image = "");
      });
    },

    edit(product) {
      this.updateSubmit = true;
      this.form.id = product.id;
      this.form.name = product.name;
      this.form.bb = product.bb;
      this.form.cc = product.cc;
      this.form.iconkota = product.iconkota;
      this.form.image = product.image;
    },
    edit(product2) {
      this.updateSubmit = true;
      this.form.id = product2.id;
      this.form.name = product2.name;
      this.form.bb = product2.bb;
      this.form.cc = product2.cc;

    },
    update(form) {
      return axios
        .put("http://localhost:3000/products/" + form.id, {
          name: this.form.name,
          bb: this.form.bb,
          cc: this.form.cc,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.name = "";
          this.form.bb = "";
          this.form.cc = "";
          this.form.iconkota = "";
          this.form.image = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(product) {
      axios
        .delete("http://localhost:3000/products/" + product.id)
        .then((res) => {
          this.load();
          let index = this.products.indexOf(
            form.name,
            form.bb,
            form.cc,
          );
          this.products.splice(index, 1);
        });
    },
    del(product2) {
      axios
        .delete("http://localhost:3000/products2/" + product2.id)
        .then((res) => {
          this.load();
          let index = this.products2.indexOf(
            form.name,
            form.bb,
            form.cc,
          );
          this.products2.splice(index, 1);
        });
    },
    // close
    close() {
      window.location.reload();
    },
  },
};
</script>
<style>
.induk {
  width: auto;
  margin-right: 10px;
}

.product {
  justify-content: space-around;
  font-family: "Bungee Inline", cursive;

  width: auto;
}
.product label {
  justify-content: center;
}

.btn1 button {
  font-family: "Bungee Inline", cursive;
  color: white;
  background-color: black;
  border-radius: 20px;
  height: 50px;
  text-align: center;
  border: 2px solid white;
}
.btn11 button {
  background-color: black;
  width: 200px;
  margin-left: 550px;
}
.btn1 :hover {
  background-color: black;
  color: white;
}
.btn2 :hover {
  background-color: white;
}
.table {
  margin-right: 40px;
  padding-bottom: 20px;
}
.table th {
  border: 1px solid;
}
.table td {
  border: 1px solid black;
  font-family: sans-serif;
  text-align: center;
}
.aa {
  background-color: black;
  border: none;
}
.bb {
  font-family: "Bungee Inline", cursive;
}
.tr th {
  font-family: "Bungee Inline", cursive;
  text-align: center;
}
.tr button {
  font-family: "Bungee Inline", cursive;
  width: 100px;
  background-color: black;
  border-radius: 20px;
  height: 50px;

  color: white;
}
</style>