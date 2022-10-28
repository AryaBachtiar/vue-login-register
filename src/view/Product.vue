<template>
  <div>
    <NavBar />
    <div class="induk" style="background-color: white">
      <table class="table" border="1" style="width: 100%">
        <tr class="tr" style="text-align: center">
          <th>No</th>
          <th>Nama Kendaraan</th>
          <th>bb</th>
          <th>Kapasitas Mesin</th>
          <th>Harga</th>
          <th>Action</th>
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
          <td>
            <span class="bb">{{ product.harga }}</span> &#160;
          </td>
          <td>
            <button @click="beli(product)" class="btn btn-success">Buy</button>
          </td>

          <!-- <td class="btn2">
        <button class="aa" @click="edit(product)"><i class="fas fa-wrench"></i>Edit</button> 
          <button class="aa" @click="del(product)"><i class="fas fa-trash-alt"></i>Delete</button>
      </td> -->
        </tr>
      </table>
      <br />
      <br />
      <!-- mobil -->
      <table class="table" border="1" style="width: 100%">
        <tr class="tr" style="text-align: center">
          <th>No</th>
          <th>Nama</th>
          <th>Tahun</th>
          <th>Kapasitas Mesin</th>
          <!-- <th>Harga</th> -->
          <th>Action</th>
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
          <td>
            <button @click="beli(mobil)" class="btn btn-success">Buy</button>
          </td>

          <!-- <td class="btn2">
        <button class="aa" @click="edit(product)"><i class="fas fa-wrench"></i>Edit</button> 
          <button class="aa" @click="del(product)"><i class="fas fa-trash-alt"></i>Delete</button>
      </td> -->
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/Navbar.vue";
/* eslint-disable */
import axios from "axios";
export default {
  name: "ProdukPage",
  components: {
    NavBar,
  },
  // Memanggil data dari props Cart
  props: {
    cart: Array,
    setCart: Function,
  },
  data() {
    return {
      formproduct: {
        id: "",
        name: "",
        bb: "",
        cc: "",
        iconkota: "",
        image: "",
      },
      products: "",
      updateSubmit: false,
      formmobil: {
        id: "",
        name: "",
        bb: "",
        cc: "",
        iconkota: "",
        image: "",
      },
      mobils: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
    this.loadmobil();
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
    // Funtion untuk beli dan memasukan ke cart
    beli(mobil) {
      this.setCart([...this.cart, mobil]);
    },
  },

  add() {
    axios.post("http://localhost:3000/products/", this.form).then((res) => {
      this.load();
      (this.form.name = ""), (this.form.bb = ""), (this.form.cc = "");
    });
  },
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
        this.form.iconkota = "";
        this.form.image = "";
        this.updateSubmit = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  del(product) {
    axios.delete("http://localhost:3000/products/" + product.id).then((res) => {
      this.load();
      let index = this.jakartas.indexOf(
        form.name,
        form.bb,
        form.cc,
        form.iconkota,
        form.image
      );
      this.jakartas.splice(index, 1);
    });
  },
};
</script>
<style>
.induk {
  background-color: tomato;
}
.jabar img {
  width: auto;
  height: 100px;
}

.product {
  display: flex;
  justify-content: space-around;
  font-family: "Bungee Inline", cursive;
  padding-left: 20px;
  padding-right: 20px;
  gap: 20px;
}
.product label {
  justify-content: center;
}
.product button {
  font-family: "Bungee Inline", cursive;
  color: white;
  background-color: red;
  border-radius: 20px;
  height: 50px;
  margin-top: 30px;
  text-align: center;
  border: 2px solid red;
}
.btn1 :hover {
  background-color: salmon;
}
.btn2 :hover {
  background-color: salmon;
}
.table {
  padding-left: 15px;
  padding-right: 20px;
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
  background-color: red;
  border: none;
}
.bb {
  font-family: "Bungee Inline", cursive;
}
.tr th {
  font-family: "Bungee Inline", cursive;
}
.tr button {
  font-family: "Bungee Inline", cursive;
  width: 100px;
  background-color: red;
  border-radius: 20px;
  height: 50px;
  margin-left: 20px;
  color: white;
}
</style>
