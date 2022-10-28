<template>
  <div id="app">
    <SideBar />
    <!-- Kirim data ke child -->
<router-view :cart="cart" :setCart="setCart" />
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue"
export default {
  name: 'App',
  components: {
    SideBar
  },
  data() {
    return {
      // Manampung Data Cart
      cart: [],
    };
  },
 
  methods:{
    // Mengubah isi cart
    setCart(cardBaru) {
      this.cart = cardBaru;
    }
 
  }
};
 

</script>

