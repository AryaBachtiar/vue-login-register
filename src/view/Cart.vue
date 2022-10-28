<template>
    <div>
    <NavBar />
    <div>
         <table class="table" border="1" style="width:100%;">
   <tr class="tr" style="text-align:center">
    <th>No</th>
    <th>Nama Kendaraan</th>
   <th>bb</th>
   <th>Kapasitas Mesin</th>
   <th>Harga</th>
   <th>Action</th>
   </tr>

       <!-- Memanggil data cart -->
          <tr class="tr" v-for="(product,index) in cart" :key="product.id">
            <!-- Perulangan Nomer otomatis  -->
        <td> <span class="bb"> {{index +1 }}</span>
      &#160;</td>
        <td> <span class="bb"> {{product.name }}</span>
      &#160;</td>
        <td> <span class="bb">{{product.bb }}</span>
      &#160;</td>
       <td>  <span class="bb">{{product.cc }}</span>
      &#160;</td>
       <td>  <span class="bb">{{product.harga }}</span>
      &#160;</td>
       <td><button @click="hapusCart(product)" class="btn btn-success">Delete</button></td>
    
      </tr>
      
    </table>
    <p>Total Harga : {{totalHarga.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          }) }}</p>
    <td>
      <button @click="chackout(product)" class="btn btn-success">ChackOut</button>
      </td>
    </div>
    </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue"
import Swal from 'sweetalert2'
export default {
    name: "CartPage",
    components : {
        NavBar
    },
    computed: {
     totalHarga() {
      return this.cart.reduce((a, b) => a + b.harga,0);
     },
    },
    methods: {
    hapusCart(motor) {
      this.setCart(this.cart.filter((x) => x.id !== motor.id));
    },
    chackout() {
      // Tombol Gagal
      if(!this.totalHarga) 
        return Swal.fire(
          "Gagal",
          "Anda Harus memilih Product Terlebih dahulu",
          "error"
        );
       
      this.$router.push("/product")
      window.location.reload();
      // Tombol Berhasil
      if(this.totalHarga) 
        return Swal.fire(
          "Berhasil",
          "Success",
          "success"
        );
        
      this.$router.push("/product")
      window.location.reload();
    },
    },
    // Menerima data dari parent
    props: {
    cart: Array,
    setCart: Function,
  }
}
</script>