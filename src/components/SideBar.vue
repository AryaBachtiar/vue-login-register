<template>
<div>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="fas fa-bars"></i></button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h2 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"><img src="https://cf.shopee.co.id/file/aae78d061e47ca3fea529c64f43bbda3" width="100" height="100" alt=""> Warung Binusa</h2>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle kategory" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <div class="btn">
            <router-link to="/">Makanan Ringan</router-link>
        </div>
        <div class="btn">
            
            <router-link to="/">MAKANAN INSTAN</router-link>
        </div>
        <div class="btn">
            
            <router-link to="/">MINUMAN DINGIN</router-link>
        </div>
        <div class="btn">
            
            <router-link to="/">MINUMAN PANAS</router-link>
        </div>
        <div class="btn">
            <router-link to="/">ALAT TULIS</router-link>
        </div>
        <div class="btn">
            <router-link to="/">BUKU</router-link>
        </div>
        <div class="btn">
            <router-link to="/">ALAT MAKAN</router-link>
        </div>
        <div class="btn">
            <router-link to="/">ALAT KEBERSIHAN</router-link>
        </div>
        <div class="btn">
            <router-link to="/">MAINAN</router-link>
        </div>
        <div class="btn">
            <router-link to="/">Obat</router-link>
        </div>
  </ul>
</div>
    </div>
    <!-- Rolbol Login Pada Side Bar -->
       <div class="log">
   <a style="text-decoration:none;color:white" href="/login" class="registerdonk">Login</a>
          </div>
  <div class="F00ter">
        <p><i class="fas fa-copyright"></i>copyright by warung binusa</p>
    <a href=""><i class="fab fa-twitter"></i></a>
    <a href=""><i class="fab fa-youtube"></i></a>
    <a href=""><i class="fab fa-instagram"></i></a>
  </div>
  </div>
    </div>
</template>

<script>
export default {
    name: "SideBar"
}
</script>

<style>
.offcanvas-header {
    border-bottom: 2px solid grey;
    text-align: center;
}
.kategory {
  text-align: center;
}
.btn a{
  display: block;
  font-size: 20px;
  color: white;
  text-decoration: none;
}
.btn:hover {
  background-color: skyblue;
}
.F00ter {
    font-size: 20px;
    border: 1px solid;
    text-align: right;
    display: flex;
    justify-content: center;
    background-color: chocolate;
}
.all {
  color: white;
  line-height: 5;
  height: 450px;
    width: 250px;
    margin-left: 20px;
    border: 1px solid;
    border-radius: 20px;
}
.log{
  width: 70px;
  height: 40px;
  background-color: black;
  border: 2px solid gray;
  font-size: 20px;
  margin-left: 150px;
 margin-bottom: 40px;
 text-align: center;
 font-weight: 800;
 font-family:'comic sans ms';
}
.log:hover{
  width: 70px;
  height: 40px;
  background-color: blue;
  border: 2px solid gray;
  font-size: 20px;
  margin-left: 150px;
 margin-bottom: 40px;
 text-align: center;
 font-weight: 800;
 font-family:'comic sans ms';
}
</style>