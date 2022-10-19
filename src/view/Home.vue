<template>
  <div id="home">
    <NavBar />

    <div class="induk" style="background-color: white">
    

      <!-- Button trigger modal -->
      <br>
      <div class="btn-add">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  ADD
</button>
</div>
<br>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Form <span v-show="!updateSubmitacc">Tambah</span> <span v-show="!updateSubmitacc">Update</span></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <form id="atas" @submit.prevent="add">
        <div class="jakartaa">
          <input type="hidden" v-model="form.id" />
          <div>
            <label for="">Nama Kendaraan</label>
            <br>
            <input type="text" v-model="form.name" required />
          </div>
          <br />
          <div>
            <label for="">Bahan Bakar</label>
            <br>
            <input type="text" v-model="form.bb" required />
          </div>
          <br />
          <div>
            <label for="">CC</label>
            <br>
            <input type="text" v-model="form.cc" required />
          </div>
          <br />
          <div>
            <label for="">Gambar</label>
            <br>
            <input type="text" v-model="form.iconkota" required />
          </div>
          <br />


        </div>
         <div class="btn1">
          <button type="submit" v-show="!updateSubmit">Tambahkan</button> 
          <button type="button" v-show="updateSubmit" @click="update(form)">
            <i class="fas fa-wrench">Update</i>
          </button> 
          <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
        </div>
        
          <!-- jika tidak update maka tombol update tidak muncul -->
          
      </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="close">Close</button>
        <button type="button" class="btn btn-primary"  @click="close">Save</button>
       
      </div>
    </div>
  </div>
</div>

      <table class="table" border="1" style="width: 90%">
        <tr class="tr">

          <th>No</th>
          <th>Nama</th>
          <th>Bahan Bakar</th>
          <th>Kapas mesin</th>
          <th>Image</th>
          <th>Action</th>
        </tr>

        <tr class="tr" v-for="(acc,index) in accs" :key="acc.id">
            <td>
                <span class="bb">{{ index +1}}</span>
            </td>
          <td>
            <span class="bb"> {{ acc.name }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ acc.bb }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ acc.cc }}</span> &#160;
          </td>
          <td>
            <span><img :src="acc.image" alt="" width="100px" /></span>
            &#160;
          </td>
          <td class="btn2">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="aa" @click="edit(acc)">
              <i class="fas fa-wrench"></i>Edit
            </button>
            <button class="aa" @click="del(acc)">
              <i class="fas fa-trash-alt"></i>Delete
            </button>
          </td>
        </tr>
      </table>
      <a href="atas">
        <div class="kembali"><button>kembali</button></div></a
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
  },

  data() {
    return {
      form: {
        id: "",
        name: "",
        bb: "",
        cc: "",
        image: "",
      },
      accs: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/accs")
        .then((res) => {
          this.accs = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/accs/", this.form).then((res) => {
        this.load();
        (this.form.name = ""),
          (this.form.bb = ""),
          (this.form.cc = ""),
          (this.form.image = "");
      });
    },
    edit(acc) {
      this.updateSubmit = true;
      this.form.id = acc.id;
      this.form.name = acc.name;
      this.form.bb = acc.bb;
      this.form.cc = acc.cc;
      this.form.image = acc.image;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/accs/" + form.id, {
          name: this.form.name,
          bb: this.form.bb,
          cc: this.form.cc,
          image: this.form.image,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.name = "";
          this.form.bb = "";
          this.form.cc = "";
          this.form.image = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(acc) {
      axios
        .delete("http://localhost:3000/accs/" + acc.id)
        .then((res) => {
          this.load();
          let index = this.accs.indexOf(
            form.name,
            form.bb,
            form.cc,
            form.iconkota,
            form.image
          );
          this.accs.splice(index, 1);
        });
    },
    // Close 
    close() {
      window.location.realod();
    }
  },
};
</script>
<style>
.induk {
  width: auto;
}
.jabar img {
  width: auto;
  height: 100px;
}

.jakartaa {
  display: block;
  justify-content: space-around;
  font-family: "Bungee Inline", cursive;
  gap: 5px;
margin-left: 10px;
  width: auto;
}
.jakartaa label {
  justify-content: center;
}

.btn1 button {
  font-family: "Bungee Inline", cursive;
  color: white;
  background-color: black;
  border-radius: 10px;
  height: 40px;
  text-align: center;
  margin-left: 390px;
  border: 2px solid black;
}

.btn-add{
    margin-left: 1150px;
}

.btn1 :hover {
  background-color: white;
  color: black;
}
.btn2 :hover {
  background-color: white;
  color: black;
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
  background-color: black;
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
  background-color: black;
  border-radius: 10px;
  height: 40px;
  margin-left: 10px;
  color: white;
  border: 2px solid black;
}
.kembali {
    text-align: center;
}
</style>