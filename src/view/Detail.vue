<template>
  <div id="/detail">
    <NavBar />

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal3"
    >
      Launch demo modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="dataahh"
      tabindex="-1"
      aria-labelledby="exampleModal3Label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModal3Label">
              Modal title
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- Tabel Detail -->
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Merk Modal</th>
                  <th scope="col">Tahun Pembuatan</th>
                  <th scope="col">CC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ form.name }}</td>
                  <td>{{ form.bb }}</td>
                  <td>{{ form.cc }}</td>
                </tr>
              </tbody>
            </table>
          </div>
         <!-- End Tabel Detail -->
        </div>
      </div>
    </div>

    <div class="induk" style="background-color: white">
      <!-- Modal Add -->
      <div>
        <!-- Button trigger modal -->
        <br />
        <div class="btn11">
          <button
            type="button"
            class="btn btn-success"
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
                  form product<span v-show="!updateSubmitproduct"> Tambah</span>
                  <span v-show="updateSubmitproduct"> Update</span>
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
                      <label for="">Nama Kendaraan</label><br />
                      <input type="text" v-model="form.name" required />
                    </div>
                    <br />
                    <div>
                      <label for="">Bahan Bakar</label><br />
                      <input type="text" v-model="form.bb" required />
                    </div>
                    <br />
                    <div>
                      <label for="">Kapasitas Mesin</label><br />

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
                      UPDATE
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
          <th>No</th>
          <th>name</th>
          <th>Tahun</th>
          <th>cc</th>
          <th>action</th>
        </tr>
        <tr class="tr" v-for="(product, index) in products" :key="product.id">
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
            <!-- Detail -->
            <button
              data-bs-toggle="modal"
              data-bs-target="#dataahh"
              type="button"
              @click="productDetail(product)"
              class="btn btn-success"
            >
              Detail
            </button>
            <!--End  Detail -->

            <!-- Edit -->
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="aa"
              @click="edit(product)">
              <a href="#exampleModalLabel">
                <i class="fas fa-wrench"></i>Edit
              </a>
            </button>
            <!-- End Edit -->

            <!-- Delete -->
            <button class="aa" @click="del(product)">
              <i class="fas fa-trash-alt"></i>Delete
            </button>
            <!--End Delete -->
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
            class="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#mobil"
          >
            Add
          </button>
        </div>
        <br />
        <!-- Modal -->
        <div
          class="modal fade"
          id="mobil"
          tabindex="-1"
          aria-labelledby="#mobil"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="mobil">
                  Form Mobil <span v-show="!updateSubmitmobil">tambah</span>
                  <span v-show="updateSubmitmobil">update</span>
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
                <form id="atas" @submit.prevent="addmobil">
                  <input type="hidden" v-model="mobil.id" />
                  <div>
                    <label for="">name/kab</label><br />
                    <input type="text" v-model="mobil.name" required />
                  </div>
                  <br />
                  <div>
                    <label for="">Luas</label><br />
                    <input type="text" v-model="mobil.bb" required />
                  </div>
                  <br />
                  <div>
                    <label for="">cc kec.</label><br />
                    <input type="text" v-model="mobil.cc" required />
                  </div>
                  <br />

                  <div class="btn1">
                    <button
                      class="btn btn-secondary"
                      type="submit"
                      v-show="!updateSubmitmobil"
                    >
                      Tambahkan
                    </button>
                    <!-- jika tidak update maka tombol update tidak muncul -->
                    <button
                      type="button"
                      v-show="updateSubmitmobil"
                      @click="updatemobil(mobil)"
                      data-bs-target="#mobil"
                    >
                      UPDATE
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      @click="close"
                    >
                      close
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
          <th>No</th>
          <th>Nama</th>
          <th>luas</th>
          <th>cc</th>
          <th>action</th>
        </tr>

        <tr class="tr" v-for="(mobil, index) in mobils" :key="mobil.id">
          <td>
            <span class="bb"> {{ index + 1 }}</span> &#160;
          </td>
          <td>
            <span class="bb"> {{ mobil.name }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ mobil.bb }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ mobil.cc }}</span> &#160;
          </td>

          <td class="btn2">
            <!-- Detail -->
            <button
              data-bs-toggle="modal"
              data-bs-target="#dataahh"
              type="button"
              @click="mobilDetail(mobil)"
              class="btn btn-success"
            >
              Detail
            </button>
           <!-- End Detail -->

           <!-- Edit -->
            <button
              data-bs-toggle="modal"
              data-bs-target="#mobil"
              class="aa"
              @click="editmobil(mobil)"
            >
              <a href="#exampleModalLabel">
                <i class="fas fa-wrench"></i>Edit
              </a>
            </button>
            <!-- End Edit -->

            <!-- Delete -->
            <button class="aa" @click="delmobil(mobil)">
              <i class="fas fa-trash-alt"></i>Delete
            </button>
            <!-- End Delete -->
          </td>
        </tr>
      </table>
      <a href="../view/Home.vue"></a>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import NavBar from "../components/Navbar.vue";
export default {
  name: "DetailVue",
  components: {
    NavBar,
  },
  mounted() {
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
    this.load();
    this.loadmobil();
  },
  data() {
    return {
      form: {
        id: "",
        name: "",
        bb: "",
        cc: "",
      },
      products: "",
      updateSubmit: false,
      mobil: {
        id: "",
        name: "",
        bb: "",
        cc: "",
      },
      mobils: "",
      updateSubmitmobil: false,
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
    loadmobil() {
      axios
        .get("http://localhost:3000/mobils")
        .then((res) => {
          this.mobils = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/products/", this.form).then(() => {
        this.load();
        (this.form.name = ""), (this.form.bb = ""), (this.form.cc = "");
      });
    },
    addmobil() {
      axios.post("http://localhost:3000/mobils/", this.mobil).then(() => {
        this.loadmobil();
        (this.mobil.name = ""),
          (this.mobil.bb = ""),
          (this.mobil.cc = ""),
          (this.mobil.iconname = ""),
          (this.mobil.image = "");
      });
    },
    // product
    edit(product) {
      this.updateSubmit = true;
      this.form.id = product.id;
      this.form.name = product.name;
      this.form.bb = product.bb;
      this.form.cc = product.cc;
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
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // mobil
    editmobil(mobil) {
      this.updateSubmitmobil = true;
      this.mobil.id = mobil.id;
      this.mobil.name = mobil.name;
      this.mobil.bb = mobil.bb;
      this.mobil.cc = mobil.cc;
    },
    updatemobil(mobil) {
      return axios
        .put("http://localhost:3000/mobils/" + mobil.id, {
          name: this.mobil.name,
          bb: this.mobil.bb,
          cc: this.mobil.cc,
        })
        .then(() => {
          this.loadmobil();
          this.mobil.id = "";
          this.mobil.name = "";
          this.mobil.bb = "";
          this.mobil.cc = "";
          this.updateSubmitmobil = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delmobil(mobil) {
      axios.delete("http://localhost:3000/mobils/" + mobil.id).then(() => {
        this.loadmobil();
        let index = this.mobils.indexOf(mobil.name, mobil.bb, mobil.cc);
        this.mobils.splice(index, 1);
      });
    },
    del(product) {
      axios.delete("http://localhost:3000/products/" + product.id).then(() => {
        this.load();
        let index = this.products.indexOf(
          form.name,
          form.bb,
          form.cc,
          form.iconname,
          form.image
        );
        this.products.splice(index, 1);
      });
    },
    // Detail Product
    productDetail(product) {
      this.form.id = product.id;
      this.form.name = product.name;
      this.form.bb = product.bb;
      this.form.cc = product.cc;
    },
    // Detail Mobil
    mobilDetail(mobil) {
      this.form.id = mobil.id;
      this.form.name = mobil.name;
      this.form.bb = mobil.bb;
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
  background-color: black;
  width: auto;
  margin-right: 10px;
}

.btn1 button {
  text-decoration: none;
  font-family: "Bungee Inline", cursive;
  color: white;
  background-color: black;
  border-radius: 20px;
  height: 50px;
  text-align: center;
  border: 2px solid white;
}

.product {
  display: block;
}
.btn11 button {
  background-color: black;
  width: 200px;
  margin-left: 550px;
}

.btn2 :hover {
  background-color: white;
  color: black;
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
  border-radius: 10px;
  height: 40px;
  text-decoration: none;
  color: white;
}
.tr button:hover {
  font-family: "Bungee Inline", cursive;
  width: 100px;
  background-color: white;
  border-radius: 10px;
  height: 40px;
  text-decoration: none;
  color: black;
}
</style>
