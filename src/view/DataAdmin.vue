<template> 
  <div class="data"> 
    <h1 class="container">Category</h1> 
 
    <div class="foods container"> 
      <!-- Button Collapse Makanan Instant--> 
      <p> 
        <a 
          class="btn btn-primary" 
          data-bs-toggle="collapse" 
          href="#collapseExample" 
          role="button" 
          aria-expanded="false" 
          aria-controls="collapseExample" 
          @click="btnMakananInstant()" 
        > 
          Makanan Instant 
        </a> 
      </p> 
 
      <!-- Button Collapse Makanan Ringan --> 
      <p> 
        <a 
          class="btn btn-primary" 
          data-bs-toggle="collapse" 
          href="#makananRingan" 
          role="button" 
          aria-expanded="false" 
          aria-controls="makananRingan" 
          @click="btnMakananRingan()" 
        > 
          Makanan Ringan 
        </a> 
      </p> 
 
      <!-- Button Collapse Minuman Kaleng --> 
      <p> 
        <a 
          class="btn btn-primary" 
          data-bs-toggle="collapse" 
          href="#minumanDingin" 
          role="button" 
          aria-expanded="false" 
          aria-controls="minumanDingin" 
          @click="btnMinumanDingin()" 
        > 
          Minuman Dingin 
        </a> 
      </p> 
 
      <!-- Button Collapse Minuman Instant --> 
      <p> 
        <a 
          class="btn btn-primary" 
          data-bs-toggle="collapse" 
          href="#minumanInstant" 
          role="button" 
          aria-expanded="false" 
          aria-controls="minumanInstant" 
          @click="btnMinumanInstant()" 
        > 
          Minuman Instant 
        </a> 
      </p> 
 
      <!-- Button Collapse Obat-obatan --> 
      <p> 
        <a 
          class="btn btn-primary" 
          data-bs-toggle="collapse" 
          href="#obatObatan" 
          role="button" 
          aria-expanded="false" 
          aria-controls="obatObatan" 
          @click="btnObatObatan()" 
        > 
          Obat-obatan 
        </a> 
      </p> 
    </div> 
 
    <div class="foods container"> 
      <!-- Button Collapse Perlengkapan Sekolah --> 
      <p> 
        <a 
          class="btn btn-primary" 
          data-bs-toggle="collapse" 
          href="#perlengkapanSekolah" 
          role="button" 
          aria-expanded="false" 
          aria-controls="perlengkapanSekolah" 
          @click="btnPerlengkapanSekolah()" 
        > 
          Perlengkapan Sekolah 
        </a> 
      </p> 
 
      <!-- Button Collapse Alat Tulis --> 
      <p> 
        <a 
          class="btn btn-primary" 
          data-bs-toggle="collapse" 
          href="#alatTulis" 
          role="button" 
          aria-expanded="false" 
          aria-controls="alatTulis" 
          @click="btnAlatTulis()" 
        > 
          Alat Tulis 
        </a> 
      </p> 
 
      <!-- Button Collapse Buku --> 
      <p> 
        <a 
          class="btn btn-primary" 
          data-bs-toggle="collapse" 
          href="#bukuBuku" 
          role="button" 
          aria-expanded="false" 
          aria-controls="bukuBuku" 
          @click="btnBukuBuku()" 
        > 
          Buku 
        </a> 
      </p> 
 
      <!-- Button Collapse Alat Makan --> 
      <p> 
        <a 
          class="btn btn-primary" 
          data-bs-toggle="collapse" 
          href="#alatMakan" 
          role="button" 
          aria-expanded="false" 
          aria-controls="alatMakan" 
          @click="btnAlatMakan()" 
        > 
          Alat Makan 
        </a> 
      </p> 
 
      <!-- Button Collapse Alat Kebersihan --> 
      <p> 
        <a 
          class="btn btn-primary" 
          data-bs-toggle="collapse" 
          href="#alatKebersihan" 
          role="button" 
          aria-expanded="false" 
          aria-controls="alatKebersihan" 
          @click="btnAlatKebersihan()" 
        > 
          Alat Kebersihan 
        </a> 
      </p> 
    </div> 
 
    <!-- Collapse Makanan Instant --> 
    <div class="collapse container" id="collapseExample" v-if="MakananInstant"> 
      <!-- ADD --> 
      <button 
        type="button" class="btn btn-success" 
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal" 
      > 
        Tambahkan <i class="fas fa-plus"></i> 
      </button> 
      <hr /> 
      <!-- Table Data --> 
      <table class="table table-hover"> 
        <thead> 
          <tr bgcolor="teal"> 
            <th>No</th> 
            <th>Nama</th> 
            <th>Gambar</th> 
            <th style="width: 600px">Deskripsi</th> 
            <th>Kategori</th> 
            <th>Jenis</th> 
            <th>Harga</th> 
            <th style="width: 150px">Action</th> 
          </tr> 
        </thead> 
        <tbody> 
          <tr v-for="(user, index) in makananinstans" :key="user.id"> 
            <td>{{ index + 1 }}</td> 
            <td>{{ user.name }}</td> 
            <td><img :src="user.image" alt="" width="100" height="100" /></td> 
            <td style="width: 600px; text-align: justify-content"> 
              {{ user.deskripsi }} 
            </td> 
            <td>{{ user.category }}</td> 
            <td>{{ user.type }}</td> 
            <td>{{ 
                user.harga.toLocaleString("id-ID", { 
                  style: "currency", 
                  currency: "IDR", 
                }) 
              }}</td> 
            <td style="text-align: center; width: 150px"> 
              <button 
                @click="edit(user)" 
                class="btn btn-primary btn-sm" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
              > 
                <i class="fas fa-edit"></i> 
              </button> 
              <button @click="del(user)" class="btn btn-danger"> 
                <i class="fas fa-trash"></i> 
              </button> 
            </td> 
          </tr> 
        </tbody> 
      </table> 
      <!-- Modal ADD --> 
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
                From <span v-show="!updateSubmitMakanan">Tambah</span> 
                <span v-show="updateSubmitMakanan">Update</span> 
              </h1> 
              <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close" 
              ></button> 
            </div> 
            <div class="modal-body"> 
              <form @submit.prevent="addMakanan"> 
                <label>Nama</label> <br /> 
                <input type="text" v-model="formMakanan.name" required /> <br /> 
                <label>Gambar</label> <br /> 
                <input type="text" v-model="formMakanan.image" required /><br /> 
                <label>Deskripsi</label> <br /> 
                <input 
                  type="text" 
                  v-model="formMakanan.deskripsi" 
                  required 
                /><br /> 
                <label>Kategori</label> <br /> 
                <input 
                  type="text" 
                  v-model="formMakanan.category" 
                  required 
                /><br /> 
                <label>type</label> <br /> 
                <input type="text" v-model="formMakanan.type" required /><br /> 
                <label>Harga</label> <br /> 
                <input type="text" v-model="formMakanan.harga" required /><br /> 
 
                <!-- modal footer --> 
                <div class="modal-footer"> 
                  <button 
                    type="button" 
                    class="btn btn-secondary" 
                    data-bs-dismiss="modal" 
                  > 
                    Close 
                  </button> 
                  || 
                  <button 
                    class="btn btn-primary" 
                    type="submit" 
                    v-show="!updateSubmitMakanan" 
                  > 
                    Save
                    </button> 
                  <button 
                    class="btn btn-primary" 
                    type="button" 
                    v-show="updateSubmitMakanan" 
                    @click="updateMakanan(formMakanan)" 
                  > 
                    Update 
                  </button> 
                </div> 
              </form> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
 
    <!-- Collapse Makanan Ringan --> 
    <div class="collapse container" id="makananRingan" v-if="MakananRingan"> 
      <!-- ADD --> 
      <button 
        type="button" 
        class="btn btn-success" 
        data-bs-toggle="modal" 
        data-bs-target="#modalSnack" 
      > 
        Tambahkan <i class="fas fa-plus"></i> 
      </button> 
      <hr /> 
      <!-- Table Data --> 
      <table class="table table-hover"> 
        <thead> 
          <tr bgcolor="teal"> 
            <th>No</th> 
            <th>Nama</th> 
            <th>Gambar</th> 
            <th>Deskripsi</th> 
            <th>Kategori</th> 
            <th>Jenis</th> 
            <th>Harga</th> 
            <th>Action</th> 
          </tr> 
        </thead> 
        <tbody> 
          <tr v-for="(snack, index) in makananringans" :key="snack.id"> 
            <td>{{ index + 1 }}</td> 
            <td>{{ snack.name }}</td> 
            <td><img :src="snack.image" alt="" width="100" height="100" /></td> 
            <td>{{ snack.deskripsi }}</td> 
            <td>{{ snack.category }}</td> 
            <td>{{ snack.type }}</td> 
            <td>{{ snack.harga }}</td> 
            <td style="text-align: center"> 
              <button 
                @click="editSnack(snack)" 
                class="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#modalSnack" 
              > 
                <i class="fas fa-edit"></i> 
              </button> 
              || 
              <button @click="delSnack(snack)" class="btn btn-danger"> 
                <i class="fas fa-trash"></i> 
              </button> 
            </td> 
          </tr> 
        </tbody> 
      </table> 
      <!-- Modal ADD --> 
      <div 
        class="modal fade" 
        id="modalSnack" 
        tabindex="-1" 
        aria-labelledby="modalSnackLabel" 
        aria-hidden="true" 
      > 
        <div class="modal-dialog"> 
          <div class="modal-content"> 
            <div class="modal-header"> 
              <h1 class="modal-title fs-5" id="modalSnackLabel"> 
                From <span v-show="!updateSubmitSnack">Tambah</span> 
                <span v-show="updateSubmitSnack">Update</span> 
              </h1> 
              <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close" 
                @click="close" 
              ></button> 
            </div> 
            <div class="modal-body"> 
              <form @submit.prevent="addSnack"> 
                <label>Nama</label> <br /> 
                <input type="text" v-model="formSnack.name" required /> <br /> 
                <label>Gambar</label> <br /> 
                <input type="text" v-model="formSnack.image" required /><br /> 
                <label>Deskripsi</label> <br /> 
                <input 
                  type="text" 
                  v-model="formSnack.deskripsi" 
                  required 
                /><br /> 
                <label>Kategori</label> <br /> 
                <input 
                  type="text" 
                  v-model="formSnack.category" 
                  required 
                /><br /> 
                <label>type</label> <br /> 
                <input type="text" v-model="formSnack.type" required /><br /> 
                <label>Harga</label> <br /> 
                <input type="text" v-model="formSnack.harga" required /><br /> 
 
                <!-- modal footer --> 
                <div class="modal-footer"> 
                  <button 
                    type="button" class="btn btn-secondary" 
                    data-bs-dismiss="modal" 
                    @click="close" 
                  > 
                    Close 
                  </button> 
                  || 
                  <button 
                    class="btn btn-primary" 
                    type="submit" 
                    v-show="!updateSubmitSnack" 
                  > 
                    Save 
                  </button> 
                  <button 
                    class="btn btn-primary" 
                    type="button" 
                    v-show="updateSubmitSnack" 
                    @click="updateSnack(formSnack)" 
                  > 
                    Update 
                  </button> 
                </div> 
              </form> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
 
    <!-- Collapse Minuman Dingin --> 
    <div class="collapse container" id="minumanDingin" v-if="MinumanDingin"> 
      <!-- ADD --> 
      <button 
        type="button" 
        class="btn btn-success" 
        data-bs-toggle="modal" 
        data-bs-target="#modalMinDingin" 
      > 
        Tambahkan <i class="fas fa-plus"></i> 
      </button> 
      <hr /> 
      <!-- Table Data --> 
      <table class="table table-hover"> 
        <thead> 
          <tr bgcolor="teal"> 
            <th>No</th> 
            <th>Nama</th> 
            <th>Gambar</th> 
            <th>Deskripsi</th> 
            <th>Kategori</th> 
            <th>Jenis</th> 
            <th>Harga</th> 
            <th>Action</th> 
          </tr> 
        </thead> 
        <tbody> 
          <tr v-for="(dingin, index) in minumandingins" :key="dingin.id"> 
            <td>{{ index + 1 }}</td> 
            <td>{{ dingin.name }}</td> 
            <td><img :src="dingin.image" alt="" width="100" height="100" /></td> 
            <td>{{ dingin.deskripsi }}</td> 
            <td>{{ dingin.category }}</td> 
            <td>{{ dingin.type }}</td> 
            <td>{{ dingin.harga }}</td> 
            <td style="text-align: center"> 
              <button 
                @click="editMinDingin(dingin)" 
                class="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#modalMinDingin" 
              > 
                <i class="fas fa-edit"></i> 
              </button> 
              || 
              <button @click="delMinDingin(dingin)" class="btn btn-danger"> 
                <i class="fas fa-trash"></i> 
              </button> 
            </td> 
          </tr> 
        </tbody> 
      </table> 
      <!-- Modal ADD --> 
      <div 
        class="modal fade" 
        id="modalMinDingin" 
        tabindex="-1" 
        aria-labelledby="modalMinDinginLabel" 
        aria-hidden="true" 
      > 
        <div class="modal-dialog"> 
          <div class="modal-content"> 
            <div class="modal-header"> 
              <h1 class="modal-title fs-5" id="modalMinDinginLabel"> 
                From <span v-show="!updateSubmitMinDingin">Tambah</span> 
                <span v-show="updateSubmitMinDingin">Update</span> 
              </h1> 
              <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close" 
                @click="close" 
              ></button> 
            </div> 
            <div class="modal-body"> 
              <form @submit.prevent="addMinDingin"> 
                <label>Nama</label> <br /> 
                <input type="text" v-model="formMinDingin.name" required /> 
                <br /> 
                <label>Gambar</label> <br /> 
                <input 
                  type="text" 
                  v-model="formMinDingin.image" 
                  required 
                /><br /> 
                <label>Deskripsi</label> <br /> 
                <input 
                  type="text" 
                  v-model="formMinDingin.deskripsi" 
                  required 
                /><br /> 
                <label>Kategori</label> <br />
                <input 
                  type="text" 
                  v-model="formMinDingin.category" 
                  required 
                /><br /> 
                <label>Jenis</label> <br /> 
                <input 
                  type="text" 
                  v-model="formMinDingin.type" 
                  required 
                /><br /> 
                <label>Harga</label> <br /> 
                <input 
                  type="text" 
                  v-model="formMinDingin.harga" 
                  required 
                /><br /> 
 
                <!-- modal footer --> 
                <div class="modal-footer"> 
                  <button 
                    type="button" 
                    class="btn btn-secondary" 
                    data-bs-dismiss="modal" 
                    @click="close" 
                  > 
                    Close 
                  </button> 
                  || 
                  <button 
                    class="btn btn-primary" 
                    type="submit" 
                    v-show="!updateSubmitMinDingin" 
                  > 
                    Save 
                  </button> 
                  <button 
                    class="btn btn-primary" 
                    type="button" 
                    v-show="updateSubmitMinDingin" 
                    @click="updateMinDingin(formMinDingin)" 
                  > 
                    Update 
                  </button> 
                </div> 
              </form> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
 
    <!-- Collapse Minuman Instant --> 
    <div class="collapse container" id="minumanInstant" v-if="MinumanInstant"> 
      <!-- ADD --> 
      <button 
        type="button" 
        class="btn btn-success" 
        data-bs-toggle="modal" 
        data-bs-target="#modalMinInstant" 
      > 
        Tambahkan <i class="fas fa-plus"></i> 
      </button> 
      <hr /> 
      <!-- Table Data --> 
      <table class="table table-hover"> 
        <thead> 
          <tr bgcolor="teal"> 
            <th>No</th> 
            <th>Nama</th> 
            <th>Gambar</th> 
            <th>Deskripsi</th> 
            <th>Kategori</th> 
            <th>Jenis</th> 
            <th>Harga</th> 
            <th>Action</th> 
          </tr> 
        </thead> 
        <tbody> 
          <tr v-for="(instant, index) in minumaninstants" :key="instant.id"> 
            <td>{{ index + 1 }}</td> 
            <td>{{ instant.name }}</td> 
            <td> 
              <img :src="instant.image" alt="" width="100" height="100" /> 
            </td> 
            <td>{{ instant.deskripsi }}</td> 
            <td>{{ instant.category }}</td> 
            <td>{{ instant.type }}</td> 
            <td>{{ instant.harga }}</td> 
            <td style="text-align: center"> 
              <button 
                @click="editMinInstant(instant)" 
                class="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#modalMinInstant" 
              > 
                <i class="fas fa-edit"></i> 
              </button> 
              || 
              <button @click="delMinInstant(instant)" class="btn btn-danger"> 
                <i class="fas fa-trash"></i> 
              </button> 
            </td> 
          </tr> 
        </tbody> 
      </table> 
      <!-- Modal ADD --> 
      <div 
        class="modal fade" 
        id="modalMinInstant" 
        tabindex="-1" 
        aria-labelledby="modalMinInstantLabel" 
        aria-hidden="true" 
      > 
        <div class="modal-dialog"> 
          <div class="modal-content"> 
            <div class="modal-header"> 
              <h1 class="modal-title fs-5" id="modalMinInstantLabel"> 
                From <span v-show="!updateSubmitMinInstant">Tambah</span> 
                <span v-show="updateSubmitMinInstant">Update</span> 
              </h1> 
              <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal"
                aria-label="Close" 
                @click="close" 
              ></button> 
            </div> 
            <div class="modal-body"> 
              <form @submit.prevent="addMinInstant"> 
                <label>Nama</label> <br /> 
                <input type="text" v-model="formMinInstant.name" required /> 
                <br /> 
                <label>Gambar</label> <br /> 
                <input 
                  type="text" 
                  v-model="formMinInstant.image" 
                  required 
                /><br /> 
                <label>Deskripsi</label> <br /> 
                <input 
                  type="text" 
                  v-model="formMinInstant.deskripsi" 
                  required 
                /><br /> 
                <label>Kategori</label> <br /> 
                <input 
                  type="text" 
                  v-model="formMinInstant.category" 
                  required 
                /><br /> 
                <label>Jenis</label> <br /> 
                <input 
                  type="text" 
                  v-model="formMinInstant.type" 
                  required 
                /><br /> 
                <label>Harga</label> <br /> 
                <input 
                  type="text" 
                  v-model="formMinInstant.harga" 
                  required 
                /><br /> 
 
                <!-- modal footer --> 
                <div class="modal-footer"> 
                  <button 
                    type="button" 
                    class="btn btn-secondary" 
                    data-bs-dismiss="modal" 
                    @click="close" 
                  > 
                    Close 
                  </button> 
                  || 
                  <button 
                    class="btn btn-primary" 
                    type="submit" 
                    v-show="!updateSubmitMinInstant" 
                  > 
                    Save 
                  </button> 
                  <button 
                    class="btn btn-primary" 
                    type="button" 
                    v-show="updateSubmitMinInstant" 
                    @click="updateMinInstant(formMinInstant)" 
                  > 
                    Update 
                  </button> 
                </div> 
              </form> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
 
    <!-- Collapse Obat-obatan --> 
    <div class="collapse" id="obatObatan" v-if="ObatObatan"> 
      <!-- ADD --> 
      <button 
        type="button" 
        class="btn btn-success" 
        data-bs-toggle="modal" 
        data-bs-target="#modalObat" 
      > 
        Tambahkan <i class="fas fa-plus"></i> 
      </button> 
      <hr /> 
      <!-- Table Data --> 
      <table class="table table-striped"> 
        <thead> 
          <tr bgcolor="teal"> 
            <th>No</th> 
            <th>Nama</th> 
            <th>Gambar</th> 
            <th>Deskripsi</th> 
            <th>Kategori</th> 
            <th>Jenis</th> 
            <th>Harga</th> 
            <th>Action</th> 
          </tr> 
        </thead> 
        <tbody> 
          <tr v-for="(obat, index) in obats" :key="obat.id"> 
            <td>{{ index + 1 }}</td> 
            <td>{{ obat.name }}</td> 
            <td> 
              <img :src="obat.image" alt="" width="100" height="100" /> 
            </td> 
            <td>{{ obat.deskripsi }}</td> 
            <td>{{ obat.category }}</td> 
            <td>{{ obat.type }}</td> 
            <td>{{ obat.harga }}</td> 
            <td style="text-align: center"> 
              <button 
                @click="editObat(obat)" 
                class="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#modalObat" 
              > 
                <i class="fas fa-edit"></i> 
              </button> 
              || 
              <button @click="delObat(obat)" class="btn btn-danger"> 
                <i class="fas fa-trash"></i> 
              </button> 
            </td> 
          </tr> 
        </tbody>
        </table> 
      <!-- Modal ADD --> 
      <div 
        class="modal fade" 
        id="modalObat" 
        tabindex="-1" 
        aria-labelledby="modalObatLabel" 
        aria-hidden="true" 
      > 
        <div class="modal-dialog"> 
          <div class="modal-content"> 
            <div class="modal-header"> 
              <h1 class="modal-title fs-5" id="modalObatLabel"> 
                From <span v-show="!updateSubmitObat">Tambah</span> 
                <span v-show="updateSubmitObat">Update</span> 
              </h1> 
              <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close" 
                @click="close" 
              ></button> 
            </div> 
            <div class="modal-body"> 
              <form @submit.prevent="addObat"> 
                <label>Nama</label> <br /> 
                <input type="text" v-model="formObat.name" required /> 
                <br /> 
                <label>Gambar</label> <br /> 
                <input type="text" v-model="formObat.image" required /><br /> 
                <label>Deskripsi</label> <br /> 
                <input 
                  type="text" 
                  v-model="formObat.deskripsi" 
                  required 
                /><br /> 
                <label>Kategori</label> <br /> 
                <input type="text" v-model="formObat.category" required /><br /> 
                <label>Jenis</label> <br /> 
                <input type="text" v-model="formObat.type" required /><br /> 
                <label>Harga</label> <br /> 
                <input type="text" v-model="formObat.harga" required /><br /> 
 
                <!-- modal footer --> 
                <div class="modal-footer"> 
                  <button 
                    type="button" 
                    class="btn btn-secondary" 
                    data-bs-dismiss="modal" 
                    @click="close" 
                  > 
                    Close 
                  </button> 
                  || 
                  <button 
                    class="btn btn-primary" 
                    type="submit" 
                    v-show="!updateSubmitObat" 
                  > 
                    Save 
                  </button> 
                  <button 
                    class="btn btn-primary" 
                    type="button" 
                    v-show="updateSubmitObat" 
                    @click="updateObat(formObat)" 
                  > 
                    Update 
                  </button> 
                </div> 
              </form> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
 
    <!-- Collapse Perlengkapan Sekolah --> 
    <div class="collapse" id="perlengkapanSekolah" v-if="PerlengkapanSekolah"> 
      <!-- ADD --> 
      <button 
        type="button" 
        class="btn btn-success" 
        data-bs-toggle="modal" 
        data-bs-target="#modalPerlengkapanSekolah" 
      > 
        Tambahkan <i class="fas fa-plus"></i> 
      </button> 
      <hr /> 
      <!-- Table Data --> 
      <table class="table table-striped"> 
        <thead> 
          <tr bgcolor="teal"> 
            <th>No</th> 
            <th>Nama</th> 
            <th>Gambar</th> 
            <th>Deskripsi</th> 
            <th>Kategori</th> 
            <th>Jenis</th> 
            <th>Harga</th> 
            <th>Action</th> 
          </tr> 
        </thead> 
        <tbody> 
          <tr 
            v-for="(sekolah, index) in perlengkapansekolahs" 
            :key="sekolah.id" 
          > 
            <td>{{ index + 1 }}</td> 
            <td>{{ sekolah.name }}</td> 
            <td> 
              <img :src="sekolah.image" alt="" width="100" height="100" /> 
            </td> 
            <td>{{ sekolah.deskripsi }}</td> 
            <td>{{ sekolah.category }}</td> 
            <td>{{ sekolah.type }}</td> 
            <td>{{ sekolah.harga }}</td> 
            <td style="text-align: center"> 
              <button@click="editSekolah(sekolah)" 
                class="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#modalPerlengkapanSekolah" 
              > 
                <i class="fas fa-edit"></i> 
              </button@click=> 
              || 
              <button @click="delSekolah(sekolah)" class="btn btn-danger"> 
                <i class="fas fa-trash"></i> 
              </button> 
            </td> 
          </tr> 
        </tbody> 
      </table> 
      <!-- Modal ADD --> 
      <div 
        class="modal fade" 
        id="modalPerlengkapanSekolah" 
        tabindex="-1" 
        aria-labelledby="modalPerlengkapanLabel" 
        aria-hidden="true" 
      > 
        <div class="modal-dialog"> 
          <div class="modal-content"> 
            <div class="modal-header"> 
              <h1 class="modal-title fs-5" id="modalPerlengkapanLabel"> 
                From <span v-show="!updateSubmitSekolah">Tambah</span> 
                <span v-show="updateSubmitSekolah">Update</span> 
              </h1> 
              <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close" 
                @click="close" 
              ></button> 
            </div> 
            <div class="modal-body"> 
              <form @submit.prevent="addSekolah"> 
                <label>Nama</label> <br /> 
                <input type="text" v-model="formSekolah.name" required /> 
                <br /> 
                <label>Gambar</label> <br /> 
                <input type="text" v-model="formSekolah.image" required /><br /> 
                <label>Deskripsi</label> <br /> 
                <input 
                  type="text" 
                  v-model="formSekolah.deskripsi" 
                  required 
                /><br /> 
                <label>Kategori</label> <br /> 
                <input 
                  type="text" 
                  v-model="formSekolah.category" 
                  required 
                /><br /> 
                <label>Jenis</label> <br /> 
                <input type="text" v-model="formSekolah.type" required /><br /> 
                <label>Harga</label> <br /> 
                <input type="text" v-model="formSekolah.harga" required /><br /> 
 
                <!-- modal footer --> 
                <div class="modal-footer"> 
                  <button 
                    type="button" 
                    class="btn btn-secondary" 
                    data-bs-dismiss="modal" 
                    @click="close" 
                  > 
                    Close 
                  </button> 
                  || 
                  <button 
                    class="btn btn-primary" 
                    type="submit" 
                    v-show="!updateSubmitSekolah" 
                  > 
                    Save 
                  </button> 
                  <button 
                    class="btn btn-primary" 
                    type="button" 
                    v-show="updateSubmitSekolah" 
                    @click="updateSekolah(formSekolah)" 
                  > 
                    Update 
                  </button> 
                </div> 
              </form> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
 
    <!-- Collapse Alat Tulis --> 
    <div class="collapse" id="alatTulis" v-if="AlatTulis"> 
      <!-- ADD --> 
      <button 
        type="button" 
        class="btn btn-success" 
        data-bs-toggle="modal" 
        data-bs-target="#modalAlatTulis" 
      > 
        Tambahkan <i class="fas fa-plus"></i> 
      </button> 
      <hr /> 
      <!-- Table Data --> 
      <table class="table table-striped"> 
        <thead> 
          <tr bgcolor="teal"> 
            <th>No</th> 
            <th>Nama</th> 
            <th>Gambar</th> 
            <th>Deskripsi</th> 
            <th>Kategori</th> 
            <th>Jenis</th> 
            <th>Harga</th> 
            <th>Action</th> 
          </tr> 
        </thead> 
        <tbody> 
          <tr v-for="(tulis, index) in alattulis" :key="tulis.id"> 
            <td>{{ index + 1 }}</td> 
            <td>{{ tulis.name }}</td> 
            <td> 
              <img :src="tulis.image" alt="" width="100" height="100" /> 
            </td> 
            <td>{{ tulis.deskripsi }}</td> 
            <td>{{ tulis.category }}</td> 
            <td>{{ tulis.type }}</td> 
            <td>{{ tulis.harga }}</td> 
            <td style="text-align: center"> 
              <button 
                @click="editAlatTulis(tulis)" 
                class="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#modalAlatTulis" 
              > 
                <i class="fas fa-edit"></i> 
              </button> 
              || 
              <button @click="delAlatTulis(tulis)" class="btn btn-danger"> 
                <i class="fas fa-trash"></i> 
              </button> 
            </td> 
          </tr> 
        </tbody> 
      </table> 
      <!-- Modal ADD --> 
      <div 
        class="modal fade" 
        id="modalAlatTulis" 
        tabindex="-1" 
        aria-labelledby="modalAlatTulisLabel" 
        aria-hidden="true" 
      > 
        <div class="modal-dialog"> 
          <div class="modal-content"> 
            <div class="modal-header"> 
              <h1 class="modal-title fs-5" id="modalAlatTulisLabel"> 
                From <span v-show="!updateSubmitAlatTulis">Tambah</span> 
                <span v-show="updateSubmitAlatTulis">Update</span> 
              </h1> 
              <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close" 
                @click="close" 
              ></button> 
            </div> 
            <div class="modal-body"> 
              <form @submit.prevent="addAlatTulis"> 
                <label>Nama</label> <br /> 
                <input type="text" v-model="formAlatTulis.name" required /> 
                <br /> 
                <label>Gambar</label> <br /> 
                <input 
                  type="text" 
                  v-model="formAlatTulis.image" 
                  required 
                /><br /> 
                <label>Deskripsi</label> <br /> 
                <input 
                  type="text" 
                  v-model="formAlatTulis.deskripsi" 
                  required 
                /><br /> 
                <label>Kategori</label> <br /> 
                <input 
                  type="text" 
                  v-model="formAlatTulis.category" 
                  required 
                /><br /> 
                <label>Jenis</label> <br /> 
                <input 
                  type="text" 
                  v-model="formAlatTulis.type" 
                  required 
                /><br /> 
                <label>Harga</label> <br /> 
                <input 
                  type="text" 
                  v-model="formAlatTulis.harga" 
                  required 
                /><br /> 
 
                <!-- modal footer --> 
                <div class="modal-footer"> 
                  <button 
                    type="button" 
                    class="btn btn-secondary" 
                    data-bs-dismiss="modal" 
                    @click="close" 
                  > 
                    Close 
                  </button> 
                  || 
                  <button 
                    class="btn btn-primary" 
                    type="submit" 
                    v-show="!updateSubmitAlatTulis" 
                  > 
                    Save 
                  </button> 
                  <button 
                    class="btn btn-primary" 
                    type="button" 
                    v-show="updateSubmitAlatTulis" 
                    @click="updateAlatTulis(formAlatTulis)" 
                  > 
                    Update 
                  </button> 
                </div> 
              </form> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div>
    <!-- Collapse Buku --> 
    <div class="collapse" id="bukuBuku" v-if="BukuBuku"> 
      <!-- ADD --> 
      <button 
        type="button" 
        class="btn btn-success" 
        data-bs-toggle="modal" 
        data-bs-target="#modalBuku" 
      > 
        Tambahkan <i class="fas fa-plus"></i> 
      </button> 
      <hr /> 
      <!-- Table Data --> 
      <table class="table table-striped"> 
        <thead> 
          <tr bgcolor="teal"> 
            <th>No</th> 
            <th>Nama</th> 
            <th>Gambar</th> 
            <th>Deskripsi</th> 
            <th>Kategori</th> 
            <th>Jenis</th> 
            <th>Harga</th> 
            <th>Action</th> 
          </tr> 
        </thead> 
        <tbody> 
          <tr v-for="(buku, index) in bukus" :key="buku.id"> 
            <td>{{ index + 1 }}</td> 
            <td>{{ buku.name }}</td> 
            <td> 
              <img :src="buku.image" alt="" width="100" height="100" /> 
            </td> 
            <td>{{ buku.deskripsi }}</td> 
            <td>{{ buku.category }}</td> 
            <td>{{ buku.type }}</td> 
            <td>{{ buku.harga }}</td> 
            <td style="text-align: center"> 
              <button 
                @click="editBuku(buku)" 
                class="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#modalBuku" 
              > 
                <i class="fas fa-edit"></i> 
              </button> 
              || 
              <button @click="delBuku(buku)" class="btn btn-danger"> 
                <i class="fas fa-trash"></i> 
              </button> 
            </td> 
          </tr> 
        </tbody> 
      </table> 
      <!-- Modal ADD --> 
      <div 
        class="modal fade" 
        id="modalBuku" 
        tabindex="-1" 
        aria-labelledby="modalBukuLabel" 
        aria-hidden="true" 
      > 
        <div class="modal-dialog"> 
          <div class="modal-content"> 
            <div class="modal-header"> 
              <h1 class="modal-title fs-5" id="modalBukuLabel"> 
                From <span v-show="!updateSubmitBuku">Tambah</span> 
                <span v-show="updateSubmitBuku">Update</span> 
              </h1> 
              <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close" 
                @click="close" 
              ></button> 
            </div> 
            <div class="modal-body"> 
              <form @submit.prevent="addBuku"> 
                <label>Nama</label> <br /> 
                <input type="text" v-model="formBuku.name" required /> 
                <br /> 
                <label>Gambar</label> <br /> 
                <input type="text" v-model="formBuku.image" required /><br /> 
                <label>Deskripsi</label> <br /> 
                <input 
                  type="text" 
                  v-model="formBuku.deskripsi" 
                  required 
                /><br /> 
                <label>Kategori</label> <br /> 
                <input type="text" v-model="formBuku.category" required /><br /> 
                <label>Jenis</label> <br /> 
                <input type="text" v-model="formBuku.type" required /><br /> 
                <label>Harga</label> <br /> 
                <input type="text" v-model="formBuku.harga" required /><br /> 
 
                <!-- modal footer --> 
                <div class="modal-footer"> 
                  <button 
                    type="button" 
                    class="btn btn-secondary" 
                    data-bs-dismiss="modal" 
                    @click="close" 
                  > 
                    Close 
                  </button> 
                  || 
                  <button 
                    class="btn btn-primary" 
                    type="submit" 
                    v-show="!updateSubmitBuku" 
                  > 
                    Save 
                  </button> 
                  <button 
                    class="btn btn-primary" 
                    type="button" 
                    v-show="updateSubmitBuku" 
                    @click="updateBuku(formBuku)" 
                  > 
                    Update 
                  </button> 
                </div> 
              </form> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
 
    <!-- Collapse Alat Makan --> 
    <div class="collapse" id="alatMakan" v-if="AlatMakan"> 
      <!-- ADD --> 
      <button 
        type="button" 
        class="btn btn-success" 
        data-bs-toggle="modal" 
        data-bs-target="#modalAlatMakan" 
      > 
        Tambahkan <i class="fas fa-plus"></i> 
      </button> 
      <hr /> 
      <!-- Table Data --> 
      <table class="table table-striped"> 
        <thead> 
          <tr bgcolor="teal"> 
            <th>No</th> 
            <th>Nama</th> 
            <th>Gambar</th> 
            <th>Deskripsi</th> 
            <th>Kategori</th> 
            <th>Jenis</th> 
            <th>Harga</th> 
            <th>Action</th> 
          </tr> 
        </thead> 
        <tbody> 
          <tr v-for="(alatmakan, index) in alatmakans" :key="alatmakan.id"> 
            <td>{{ index + 1 }}</td> 
            <td>{{ alatmakan.name }}</td> 
            <td> 
              <img :src="alatmakan.image" alt="" width="100" height="100" /> 
            </td> 
            <td>{{ alatmakan.deskripsi }}</td> 
            <td>{{ alatmakan.category }}</td> 
            <td>{{ alatmakan.type }}</td> 
            <td>{{ alatmakan.harga }}</td> 
            <td style="text-align: center"> 
              <button 
                @click="editAlatMakan(alatmakan)" 
                class="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#modalAlatMakan" 
              > 
                <i class="fas fa-edit"></i> 
              </button> 
              || 
              <button @click="delAlatMakan(alatmakan)" class="btn btn-danger"> 
                <i class="fas fa-trash"></i> 
              </button> 
            </td> 
          </tr> 
        </tbody> 
      </table> 
      <!-- Modal ADD --> 
      <div 
        class="modal fade" 
        id="modalAlatMakan" 
        tabindex="-1" 
        aria-labelledby="modalAlatMakanLabel" 
        aria-hidden="true" 
      > 
        <div class="modal-dialog"> 
          <div class="modal-content"> 
            <div class="modal-header"> 
              <h1 class="modal-title fs-5" id="modalAlatMakanLabel"> 
                From <span v-show="!updateSubmitAlatMakan">Tambah</span> 
                <span v-show="updateSubmitAlatMakan">Update</span> 
              </h1> 
              <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close" 
                @click="close" 
              ></button> 
            </div> 
            <div class="modal-body"> 
              <form @submit.prevent="addAlatMakan"> 
                <label>Nama</label> <br /> 
                <input type="text" v-model="formAlatMakan.name" required /> 
                <br /> 
                <label>Gambar</label> <br /> 
                <input 
                  type="text" 
                  v-model="formAlatMakan.image" 
                  required 
                /><br /> 
                <label>Deskripsi</label> <br /> 
                <input 
                  type="text" 
                  v-model="formAlatMakan.deskripsi" 
                  required 
                /><br /> 
                <label>Kategori</label> <br /> 
                <input 
                  type="text" 
                  v-model="formAlatMakan.category" 
                  required 
                /><br /> 
                <label>Jenis</label> <br /> 
                <input 
                  type="text" 
                  v-model="formAlatMakan.type" 
                  required 
                /><br /> 
                <label>Harga</label> <br /> 
                <input 
                  type="text"
                  v-model="formAlatMakan.harga"
                  required 
                /><br /> 
 
                <!-- modal footer --> 
                <div class="modal-footer"> 
                  <button 
                    type="button" 
                    class="btn btn-secondary" 
                    data-bs-dismiss="modal" 
                    @click="close" 
                  > 
                    Close 
                  </button> 
                  || 
                  <button 
                    class="btn btn-primary" 
                    type="submit" 
                    v-show="!updateSubmitAlatMakan" 
                  > 
                    Save 
                  </button> 
                  <button 
                    class="btn btn-primary" 
                    type="button" 
                    v-show="updateSubmitAlatMakan" 
                    @click="updateAlatMakan(formAlatMakan)" 
                  > 
                    Update 
                  </button> 
                </div> 
              </form> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
 
    <!-- Collapse Alat Kebersihan --> 
    <div class="collapse" id="alatKebersihan" v-if="AlatKebersihan"> 
      <!-- ADD --> 
      <button 
        type="button" 
        class="btn btn-success" 
        data-bs-toggle="modal" 
        data-bs-target="#modalAlatKebersihan" 
      > 
        Tambahkan <i class="fas fa-plus"></i> 
      </button> 
      <hr /> 
      <!-- Table Data --> 
      <table class="table table-striped"> 
        <thead> 
          <tr bgcolor="teal"> 
            <th>No</th> 
            <th>Nama</th> 
            <th>Gambar</th> 
            <th>Deskripsi</th> 
            <th>Kategori</th> 
            <th>Jenis</th> 
            <th>Harga</th> 
            <th>Action</th> 
          </tr> 
        </thead> 
        <tbody> 
          <tr 
            v-for="(kebersihan, index) in alatkebersihans" 
            :key="kebersihan.id" 
          > 
            <td>{{ index + 1 }}</td> 
            <td>{{ kebersihan.name }}</td> 
            <td> 
              <img :src="kebersihan.image" alt="" width="100" height="100" /> 
            </td> 
            <td>{{ kebersihan.deskripsi }}</td> 
            <td>{{ kebersihan.category }}</td> 
            <td>{{ kebersihan.type }}</td> 
            <td>{{ kebersihan.harga }}</td> 
            <td style="text-align: center"> 
              <button 
                @click="editAlatKebersihan(kebersihan)" 
                class="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#modalAlatKebersihan" 
              > 
                <i class="fas fa-edit"></i> 
              </button> 
              || 
              <button 
                @click="delAlatKebersihan(kebersihan)" 
                class="btn btn-danger" 
              > 
                <i class="fas fa-trash"></i> 
              </button> 
            </td> 
          </tr> 
        </tbody> 
      </table> 
      <!-- Modal ADD --> 
      <div 
        class="modal fade" 
        id="modalAlatKebersihan" 
        tabindex="-1" 
        aria-labelledby="modalAlatKebersihanLabel" 
        aria-hidden="true" 
      > 
        <div class="modal-dialog"> 
          <div class="modal-content"> 
            <div class="modal-header"> 
              <h1 class="modal-title fs-5" id="modalAlatKebersihanLabel"> 
                From <span v-show="!updateSubmitAlatKebersihan">Tambah</span> 
                <span v-show="updateSubmitAlatKebersihan">Update</span> 
              </h1> 
              <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close" 
                @click="close" 
              ></button> 
            </div> 
            <div class="modal-body"> 
              <form @submit.prevent="addAlatKebersihan"> 
                <label>Nama</label> <br /> 
                <input type="text" v-model="formKebersihan.name" required /> 
                <br /> 
                <label>Gambar</label> <br /> 
                <input 
                  type="text" 
                  v-model="formKebersihan.image" 
                  required 
                /><br /> 
                <label>Deskripsi</label> <br /> 
                <input 
                  type="text" 
                  v-model="formKebersihan.deskripsi" 
                  required 
                /><br /> 
                <label>Kategori</label> <br /> 
                <input 
                  type="text" 
                  v-model="formKebersihan.category" 
                  required 
                /><br /> 
                <label>Jenis</label> <br /> 
                <input 
                  type="text" 
                  v-model="formKebersihan.type" 
                  required 
                /><br /> 
                <label>Harga</label> <br /> 
                <input 
                  type="text" 
                  v-model="formKebersihan.harga" 
                  required 
                /><br /> 
 
                <!-- modal footer --> 
                <div class="modal-footer"> 
                  <button 
                    type="button" 
                    class="btn btn-secondary" 
                    data-bs-dismiss="modal" 
                    @click="close" 
                  > 
                    Close 
                  </button> 
                  || 
                  <button 
                    class="btn btn-primary" 
                    type="submit" 
                    v-show="!updateSubmitAlatKebersihan" 
                  > 
                    Save 
                  </button> 
                  <button 
                    class="btn btn-primary" 
                    type="button" 
                    v-show="updateSubmitAlatKebersihan" 
                    @click="updateAlatKebersihan(formKebersihan)" 
                  > 
                    Update 
                  </button> 
                </div> 
              </form> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  </div> 
</template> 
 
<script> 
import Swal from "sweetalert2"; 
import axios from "axios"; 
export default { 
  name: "DataAdmin", 
  data() { 
    return { 
      formMakanan: { 
        id: "", 
        name: "", 
        image: "", 
        deskripsi: "", 
        category: "", 
        jenis: "", 
        harga: "", 
      }, 
      makananinstans: "", 
      updateSubmitMakanan: false, 
      //   data snack 
      formSnack: { 
        id: "", 
        name: "", 
        image: "", 
        deskripsi: "", 
        category: "", 
        jenis: "", 
        harga: "", 
      }, 
      makananringans: "", 
      updateSubmitSnack: false, 
      //   data minuman dingin 
      formMinDingin: { 
        id: "", 
        name: "", 
        image: "", 
        deskripsi: "", 
        category: "", 
        jenis: "", 
        harga: "", 
      }, 
      minumandingins: "", 
      updateSubmitMinDingin: false, 
      //   data minuman instant 
      formMinInstant: { 
        id: "", 
        name: "", 
        image: "", 
        deskripsi: "", 
        category: "", 
        jenis: "", 
        harga: "", 
      }, 
      minumaninstants: "", 
      updateSubmitMinInstant: false, 
      //   data obat-obatan 
      formObat: { 
        id: "", 
        name: "", 
        image: "", 
        deskripsi: "", 
        category: "", 
        jenis: "", 
        harga: "", 
      }, 
      obats: "", 
      updateSubmitObat: false, 
      //   data perlengkapan sekolah 
      formSekolah: { 
        id: "", 
        name: "", 
        image: "", 
        deskripsi: "", 
        category: "", 
        jenis: "", 
        harga: "", 
      }, 
      perlengkapansekolahs: "", 
      updateSubmitSekolah: false, 
      //   data alat tulis 
      formAlatTulis: { 
        id: "", 
        name: "", 
        image: "", 
        deskripsi: "", 
        category: "", 
        jenis: "", 
        harga: "", 
      }, 
      alattulis: "", 
      updateSubmitAlatTulis: false, 
      //   data buku
      formBuku: { 
        id: "", 
        name: "", 
        image: "", 
        deskripsi: "", 
        category: "", 
        jenis: "", 
        harga: "", 
      }, 
      bukus: "", 
      updateSubmitBuku: false, 
      //   data alat makan 
      formAlatMakan: { 
        id: "", 
        name: "", 
        image: "", 
        deskripsi: "", 
        category: "", 
        jenis: "", 
        harga: "", 
      }, 
      alatmakans: "", 
      updateSubmitAlatMakan: false, 
      //   data alat kebersihan 
      formKebersihan: { 
        id: "", 
        name: "", 
        image: "", 
        deskripsi: "", 
        category: "", 
        jenis: "", 
        harga: "", 
      }, 
      alatkebersihans: "", 
      updateSubmitAlatKebersihan: false, 
      //function 
      MakananInstant: false, 
      MakananRingan: true, 
      MinumanDingin: true, 
      MinumanInstant: true, 
      ObatObatan: true, 
      PerlengkapanSekolah: true, 
      AlatTulis: true, 
      BukuBuku: true, 
      AlatMakan: true, 
      AlatKebersihan: true, 
    }; 
  }, 
  mounted() { 
    this.loadMakanan(); 
    this.loadSnack(); 
    this.loadMinDingin(); 
    this.loadMinInstant(); 
    this.loadObat(); 
    this.loadSekolah(); 
    this.loadAlatTulis(); 
    this.loadBuku(); 
    this.loadAlatMakan(); 
    this.loadAlatKebersihan(); 
    if (!sessionStorage.getItem("USER_DATA")) { 
      this.$router.push("/"); 
    } 
  }, 
  methods: { 
    // methods makanan instan 
    loadMakanan() { 
      axios 
        .get("http://localhost:3000/makananinstans") 
        .then((res) => { 
          this.makananinstans = res.data; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    addMakanan() { 
      axios 
        .post("http://localhost:3000/makananinstans/", this.formMakanan) 
        .then(() => { 
          this.loadMakanan(); 
          this.formMakanan.name = ""; 
          this.formMakanan.image = ""; 
          this.formMakanan.deskripsi = ""; 
          this.formMakanan.category = ""; 
          this.formMakanan.type = ""; 
          this.formMakanan.harga = ""; 
        }); 
    }, 
    edit(user) { 
      this.updateSubmitMakanan = true; 
      this.formMakanan.id = user.id; 
      this.formMakanan.name = user.name; 
      this.formMakanan.image = user.image; 
      this.formMakanan.deskripsi = user.deskripsi; 
      this.formMakanan.category = user.category; 
      this.formMakanan.type = user.type; 
      this.formMakanan.harga = user.harga; 
      Swal.fire("Apakah kamu akan mengedit?", "", "question"); 
    }, 
    updateMakanan(formMakanan) { 
      return axios 
        .put("http://localhost:3000/makananinstans/" + formMakanan.id, { 
          name: this.formMakanan.name, 
          image: this.formMakanan.image, 
          deskripsi: this.formMakanan.deskripsi, 
          category: this.formMakanan.category, 
          type: this.formMakanan.type, 
          harga: this.formMakanan.harga, 
        }) 
        .then(() => { 
          this.load(); 
          this.formMakanan.id = ""; 
          this.formMakanan.name = ""; 
          this.formMakanan.image = ""; 
          this.formMakanan.deskripsi = ""; 
          this.formMakanan.category = ""; 
          this.formMakanan.type = ""; 
          this.formMakanan.harga = ""; 
          this.updateSubmitMakanan = false; 
          Swal.fire("Apakah kamu akan mengedit?", "", "question"); 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    del(user) { 
      axios 
        .delete("http://localhost:3000/makananinstans/" + user.id) 
        .then(() => { 
          this.load(); 
          let index = this.makananinstans.indexOf(); 
          this.makananinstans.splice(index, 1); 
        }); 
      Swal.fire("Apakah kamu akan mengedit?", "", "question"); 
    }, 
 
    // methods makanan ringan/snack 
    loadSnack() { 
      axios 
        .get("http://localhost:3000/makananringans") 
        .then((res) => { 
          this.makananringans = res.data; 
        }) 
        .catch((err) => {console.log(err); 
        }); 
    }, 
    addSnack() { 
      axios 
        .post("http://localhost:3000/makananringans/", this.formSnack) 
        .then(() => { 
          this.loadSnack(); 
          this.formSnack.name = ""; 
          this.formSnack.image = ""; 
          this.formSnack.deskripsi = ""; 
          this.formSnack.category = ""; 
          this.formSnack.type = ""; 
          this.formSnack.harga = ""; 
        }); 
    }, 
    editSnack(snack) { 
      this.updateSubmitSnack = true; 
      this.formSnack.id = snack.id; 
      this.formSnack.name = snack.name; 
      this.formSnack.image = snack.image; 
      this.formSnack.deskripsi = snack.deskripsi; 
      this.formSnack.category = snack.category; 
      this.formSnack.type = snack.type; 
      this.formSnack.harga = snack.harga; 
    }, 
    updateSnack(formSnack) { 
      return axios 
        .put("http://localhost:3000/makananringans/" + formSnack.id, { 
          name: this.formSnack.name, 
          image: this.formSnack.image, 
          deskripsi: this.formSnack.deskripsi, 
          category: this.formSnack.category, 
          type: this.formSnack.type, 
          harga: this.formSnack.harga, 
        }) 
        .then(() => { 
          this.load(); 
          this.formSnack.id = ""; 
          this.formSnack.name = ""; 
          this.formSnack.image = ""; 
          this.formSnack.deskripsi = ""; 
          this.formSnack.category = ""; 
          this.formSnack.type = ""; 
          this.formSnack.harga = ""; 
          this.updateSubmitSnack = false; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    delSnack(snack) { 
      axios 
        .delete("http://localhost:3000/makananringans/" + snack.id) 
        .then(() => { 
          this.load(); 
          let index = this.makananringans.indexOf(); 
          this.makananringans.splice(index, 1); 
        }); 
    }, 
 
    // methods minuman dingin 
    loadMinDingin() { 
      axios 
        .get("http://localhost:3000/minumandingins") 
        .then((res) => { 
          this.minumandingins = res.data; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    addMinDingin() { 
      axios 
        .post("http://localhost:3000/minumandingins/", this.formMinDingin) 
        .then(() => { 
          this.loadMinDingin(); 
          this.formMinDingin.name = ""; 
          this.formMinDingin.image = ""; 
          this.formMinDingin.deskripsi = ""; 
          this.formMinDingin.category = ""; 
          this.formMinDingin.type = ""; 
          this.formMinDingin.harga = ""; 
        }); 
    }, 
    editMinDingin(dingin) { 
      this.updateSubmitMinDingin = true; 
      this.formMinDingin.id = dingin.id; 
      this.formMinDingin.name = dingin.name; 
      this.formMinDingin.image = dingin.image; 
      this.formMinDingin.deskripsi = dingin.deskripsi; 
      this.formMinDingin.category = dingin.category; 
      this.formMinDingin.type = dingin.type; 
      this.formMinDingin.harga = dingin.harga; 
    }, 
    updateMinDingin(formMinDingin) { 
      return axios 
        .put("http://localhost:3000/minumandingins/" + formMinDingin.id, { 
          name: this.formMinDingin.name, 
          image: this.formMinDingin.image, 
          deskripsi: this.formMinDingin.deskripsi, 
          category: this.formMinDingin.category, 
          type: this.formMinDingin.type, 
          harga: this.formMinDingin.harga, 
        }) 
        .then(() => { 
          this.loadMinDingin(); 
          this.formMinDingin.id = ""; 
          this.formMinDingin.name = ""; 
          this.formMinDingin.image = ""; 
          this.formMinDingin.deskripsi = ""; 
          this.formMinDingin.category = ""; 
          this.formMinDingin.type = ""; 
          this.formMinDingin.harga = ""; 
          this.updateSubmitMinDingin = false; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    delMinDingin(dingin) { 
      axios 
        .delete("http://localhost:3000/minumandingins/" + dingin.id) 
        .then(() => { 
          this.loadMinDingin(); 
          let index = this.minumandingins.indexOf(); 
          this.minumandingins.splice(index, 1); 
        }); 
    }, 
 
    // methods minuman instant 
    loadMinInstant() { 
      axios 
        .get("http://localhost:3000/minumaninstants") 
        .then((res) => { 
          this.minumaninstants = res.data; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    addMinInstant() { 
      axios 
        .post("http://localhost:3000/minumaninstants/", this.formMinInstant) 
        .then(() => { 
          this.loadMinInstant(); 
          this.formMinInstant.name = ""; 
          this.formMinInstant.image = ""; 
          this.formMinInstant.deskripsi = ""; 
          this.formMinInstant.category = ""; 
          this.formMinInstant.type = ""; 
          this.formMinInstant.harga = ""; 
        }); 
    }, 
    editMinInstant(instant) { 
      this.updateSubmitMinInstant = true; 
      this.formMinInstant.id = instant.id; 
      this.formMinInstant.name = instant.name; 
      this.formMinInstant.image = instant.image; 
      this.formMinInstant.deskripsi = instant.deskripsi; 
      this.formMinInstant.category = instant.category; 
      this.formMinInstant.type = instant.type; 
      this.formMinInstant.harga = instant.harga; 
    }, 
    updateMinInstant(formMinInstant) { 
      return axios 
        .put("http://localhost:3000/minumaninstants/" + formMinInstant.id, { 
          name: this.formMinInstant.name, 
          image: this.formMinInstant.image, 
          deskripsi: this.formMinInstant.deskripsi, 
          category: this.formMinInstant.category, 
          type: this.formMinInstant.type, 
          harga: this.formMinInstant.harga, 
        }) 
        .then(() => { 
          this.loadMinInstant(); 
          this.formMinInstant.id = ""; 
          this.formMinInstant.name = ""; 
          this.formMinInstant.image = ""; 
          this.formMinInstant.deskripsi = ""; 
          this.formMinInstant.category = ""; 
          this.formMinInstant.type = ""; 
          this.formMinInstant.harga = ""; 
          this.updateSubmitMinInstant = false; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    delMinInstant(instant) { 
      axios 
        .delete("http://localhost:3000/minumaninstants/" + instant.id) 
        .then(() => { 
          this.loadMinInstant(); 
          let index = this.minumaninstants.indexOf(); 
          this.minumaninstants.splice(index, 1); 
        }); 
    }, 
 
    // methods obat-obatan 
    loadObat() { 
      axios 
        .get("http://localhost:3000/obats") 
        .then((res) => { 
          this.obats = res.data; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    addObat() { 
      axios.post("http://localhost:3000/obats/", this.formObat).then(() => { 
        this.loadObat(); 
        this.formObat.name = ""; 
        this.formObat.image = ""; 
        this.formObat.deskripsi = ""; 
        this.formObat.category = ""; 
        this.formObat.type = ""; 
        this.formObat.harga = ""; 
      }); 
    }, 
    editObat(obat) { 
      this.updateSubmitObat = true; 
      this.formObat.id = obat.id; 
      this.formObat.name = obat.name; 
      this.formObat.image = obat.image; 
      this.formObat.deskripsi = obat.deskripsi; 
      this.formObat.category = obat.category; 
      this.formObat.type = obat.type; 
      this.formObat.harga = obat.harga; 
    }, 
    updateObat(formObat) { 
      return axios 
        .put("http://localhost:3000/obats/" + formObat.id, { 
          name: this.formObat.name, 
          image: this.formObat.image, 
          deskripsi: this.formObat.deskripsi, 
          category: this.formObat.category, 
          type: this.formObat.type, 
          harga: this.formObat.harga, 
        }) 
        .then(() => { 
          this.loadObat(); 
          this.formObat.id = ""; 
          this.formObat.name = ""; 
          this.formObat.image = ""; 
          this.formObat.deskripsi = ""; 
          this.formObat.category = ""; 
          this.formObat.type = ""; 
          this.formObat.harga = ""; 
          this.updateSubmitObat = false; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    delObat(obat) { 
      axios.delete("http://localhost:3000/obats/" + obat.id).then(() => { 
        this.loadObat(); 
        let index = this.obats.indexOf(); 
        this.obats.splice(index, 1); 
      }); 
    }, 
 
    // methods perlengkapan sekolah 
    loadSekolah() { 
      axios 
        .get("http://localhost:3000/perlengkapansekolahs") 
        .then((res) => { 
          this.perlengkapansekolahs = res.data; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    addSekolah() { 
      axios 
        .post("http://localhost:3000/perlengkapansekolahs/", this.formSekolah) 
        .then(() => { 
          this.loadSekolah(); 
          this.formSekolah.name = ""; 
          this.formSekolah.image = ""; 
          this.formSekolah.deskripsi = ""; 
          this.formSekolah.category = ""; 
          this.formSekolah.type = ""; 
          this.formSekolah.harga = ""; 
        }); 
    }, 
    editSekolah(sekolah) { 
      this.updateSubmitSekolah = true; 
      this.formSekolah.id = sekolah.id; 
      this.formSekolah.name = sekolah.name; 
      this.formSekolah.image = sekolah.image; 
      this.formSekolah.deskripsi = sekolah.deskripsi; 
      this.formSekolah.category = sekolah.category; 
      this.formSekolah.type = sekolah.type; 
      this.formSekolah.harga = sekolah.harga; 
    }, 
    updateSekolah(formSekolah) { 
      return axios 
        .put("http://localhost:3000/perlengkapansekolahs/" + formSekolah.id, { 
          name: this.formSekolah.name, 
          image: this.formSekolah.image, 
          deskripsi: this.formSekolah.deskripsi, 
          category: this.formSekolah.category, 
          type: this.formSekolah.type, 
          harga: this.formSekolah.harga, 
        }) 
        .then(() => { 
          this.loadSekolah(); 
          this.formSekolah.id = ""; 
          this.formSekolah.name = ""; 
          this.formSekolah.image = ""; 
          this.formSekolah.deskripsi = ""; 
          this.formSekolah.category = ""; 
          this.formSekolah.type = ""; 
          this.formSekolah.harga = ""; 
          this.updateSubmitSekolah = false; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    delSekolah(sekolah) { 
      axios 
        .delete("http://localhost:3000/perlengkapansekolahs/" + sekolah.id) 
        .then(() => { 
          this.loadSekolah(); 
          let index = this.perlengkapansekolahs.indexOf(); 
          this.perlengkapansekolahs.splice(index, 1); 
        }); 
    }, 
 
    // methods alat tulis 
    loadAlatTulis() { 
      axios 
        .get("http://localhost:3000/alattulis") 
        .then((res) => { 
          this.alattulis = res.data; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    addAlatTulis() { 
      axios 
        .post("http://localhost:3000/alattulis/", this.formAlatTulis) 
        .then(() => { 
          this.loadAlatTulis(); 
          this.formAlatTulis.name = ""; 
          this.formAlatTulis.image = ""; 
          this.formAlatTulis.deskripsi = ""; 
          this.formAlatTulis.category = ""; 
          this.formAlatTulis.type = ""; 
          this.formAlatTulis.harga = ""; 
        }); 
    }, 
    editAlatTulis(tulis) { 
      this.updateSubmitAlatTulis = true; 
      this.formAlatTulis.id = tulis.id; 
      this.formAlatTulis.name = tulis.name; 
      this.formAlatTulis.image = tulis.image; 
      this.formAlatTulis.deskripsi = tulis.deskripsi; 
      this.formAlatTulis.category = tulis.category; 
      this.formAlatTulis.type = tulis.type; 
      this.formAlatTulis.harga = tulis.harga; 
    }, 
    updateAlatTulis(formAlatTulis) { 
      return axios 
        .put("http://localhost:3000/alattulis/" + formAlatTulis.id, { 
          name: this.formAlatTulis.name, 
          image: this.formAlatTulis.image, 
          deskripsi: this.formAlatTulis.deskripsi, 
          category: this.formAlatTulis.category, 
          type: this.formAlatTulis.type, 
          harga: this.formAlatTulis.harga, 
        }) 
        .then(() => { 
          this.loadAlatTulis(); 
          this.formAlatTulis.id = ""; 
          this.formAlatTulis.name = ""; 
          this.formAlatTulis.image = ""; 
          this.formAlatTulis.deskripsi = ""; 
          this.formAlatTulis.category = ""; 
          this.formAlatTulis.type = ""; 
          this.formAlatTulis.harga = ""; 
          this.updateSubmitAlatTulis = false; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    delAlatTulis(tulis) { 
      axios.delete("http://localhost:3000/alattulis/" + tulis.id).then(() => { 
        this.loadAlatTulis(); 
        let index = this.alattulis.indexOf(); 
        this.alattulis.splice(index, 1); 
      }); 
    }, 
 
    // methods buku 
    loadBuku() { 
      axios 
        .get("http://localhost:3000/bukus") 
        .then((res) => { 
          this.bukus = res.data; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    addBuku() { 
      axios.post("http://localhost:3000/bukus/", this.formBuku).then(() => { 
        this.loadBuku(); 
        this.formBuku.name = ""; 
        this.formBuku.image = ""; 
        this.formBuku.deskripsi = ""; 
        this.formBuku.category = ""; 
        this.formBuku.type = ""; 
        this.formBuku.harga = ""; 
      }); 
    }, 
    editBuku(buku) { 
      this.updateSubmitBuku = true; 
      this.formBuku.id = buku.id; 
      this.formBuku.name = buku.name; 
      this.formBuku.image = buku.image; 
      this.formBuku.deskripsi = buku.deskripsi; 
      this.formBuku.category = buku.category; 
      this.formBuku.type = buku.type; 
      this.formBuku.harga = buku.harga; 
    }, 
    updateBuku(formBuku) { 
      return axios 
        .put("http://localhost:3000/bukus/" + formBuku.id, { 
          name: this.formBuku.name, 
          image: this.formBuku.image, 
          deskripsi: this.formBuku.deskripsi, 
          category: this.formBuku.category, 
          type: this.formBuku.type, 
          harga: this.formBuku.harga, 
        }) 
        .then(() => { 
          this.loadBuku(); 
          this.formBuku.id = ""; 
          this.formBuku.name = ""; 
          this.formBuku.image = ""; 
          this.formBuku.deskripsi = ""; 
          this.formBuku.category = ""; 
          this.formBuku.type = ""; 
          this.formBuku.harga = ""; 
          this.updateSubmitBuku = false; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    delBuku(buku) { 
      axios.delete("http://localhost:3000/bukus/" + buku.id).then(() => { 
        this.loadBuku(); 
        let index = this.bukus.indexOf(); 
        this.bukus.splice(index, 1); 
      }); 
    }, 
 
    // methods buku 
    loadAlatMakan() { 
      axios 
        .get("http://localhost:3000/alatmakans") 
        .then((res) => { 
          this.alatmakans = res.data; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    addAlatMakan() { 
      axios 
        .post("http://localhost:3000/alatmakans/", this.formAlatMakan) 
        .then(() => { 
          this.loadAlatMakan(); 
          this.formAlatMakan.name = ""; 
          this.formAlatMakan.image = ""; 
          this.formAlatMakan.deskripsi = ""; 
          this.formAlatMakan.category = ""; 
          this.formAlatMakan.type = ""; 
          this.formAlatMakan.harga = ""; 
        }); 
    }, 
    editAlatMakan(alatmakan) { 
      this.updateSubmitAlatMakan = true; 
      this.formAlatMakan.id = alatmakan.id; 
      this.formAlatMakan.name = alatmakan.name; 
      this.formAlatMakan.image = alatmakan.image; 
      this.formAlatMakan.deskripsi = alatmakan.deskripsi; 
      this.formAlatMakan.category = alatmakan.category; 
      this.formAlatMakan.type = alatmakan.type; 
      this.formAlatMakan.harga = alatmakan.harga; 
    }, 
    updateAlatMakan(formAlatMakan) { 
      return axios 
        .put("http://localhost:3000/alatmakans/" + formAlatMakan.id, { 
          name: this.formAlatMakan.name, 
          image: this.formAlatMakan.image, 
          deskripsi: this.formAlatMakan.deskripsi, 
          category: this.formAlatMakan.category, 
          type: this.formAlatMakan.type, 
          harga: this.formAlatMakan.harga, 
        }) 
        .then(() => { 
          this.loadAlatMakan(); 
          this.formAlatMakan.id = ""; 
          this.formAlatMakan.name = ""; 
          this.formAlatMakan.image = ""; 
          this.formAlatMakan.deskripsi = ""; 
          this.formAlatMakan.category = ""; 
          this.formAlatMakan.type = ""; 
          this.formAlatMakan.harga = ""; 
          this.updateSubmitAlatMakan = false; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    delAlatMakan(alatmakan) { 
      axios 
        .delete("http://localhost:3000/alatmakans/" + alatmakan.id) 
        .then(() => { 
          this.loadAlatMakan(); 
          let index = this.alatmakans.indexOf(); 
          this.alatmakans.splice(index, 1); 
        }); 
    }, 
 
    // methods buku 
    loadAlatKebersihan() { 
      axios 
        .get("http://localhost:3000/alatkebersihans") 
        .then((res) => { 
          this.alatkebersihans = res.data; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    addAlatKebersihan() { 
      axios 
        .post("http://localhost:3000/alatkebersihans/", this.formKebersihan) 
        .then(() => { 
          this.loadAlatKebersihan(); 
          this.formKebersihan.name = ""; 
          this.formKebersihan.image = ""; 
          this.formKebersihan.deskripsi = ""; 
          this.formKebersihan.category = ""; 
          this.formKebersihan.type = ""; 
          this.formKebersihan.harga = ""; 
        }); 
    }, 
    editAlatKebersihan(kebersihan) { 
      this.updateSubmitAlatKebersihan = true; 
      this.formKebersihan.id = kebersihan.id; 
      this.formKebersihan.name = kebersihan.name; 
      this.formKebersihan.image = kebersihan.image; 
      this.formKebersihan.deskripsi = kebersihan.deskripsi; 
      this.formKebersihan.category = kebersihan.category; 
      this.formKebersihan.type = kebersihan.type; 
      this.formKebersihan.harga = kebersihan.harga; 
    }, 
    updateAlatKebersihan(formKebersihan) { 
      return axios 
        .put("http://localhost:3000/alatkebersihans/" + formKebersihan.id, { 
          name: this.formKebersihan.name, 
          image: this.formKebersihan.image, 
          deskripsi: this.formKebersihan.deskripsi, 
          category: this.formKebersihan.category, 
          type: this.formKebersihan.type, 
          harga: this.formKebersihan.harga, 
        }) 
        .then(() => { 
          this.loadAlatKebersihan(); 
          this.formKebersihan.id = ""; 
          this.formKebersihan.name = ""; 
          this.formKebersihan.image = ""; 
          this.formKebersihan.deskripsi = ""; 
          this.formKebersihan.category = ""; 
          this.formKebersihan.type = ""; 
          this.formKebersihan.harga = ""; 
          this.updateSubmitAlatKebersihan = false; 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, 
    delAlatKebersihan(kebersihan) { 
      axios 
        .delete("http://localhost:3000/alatkebersihans/" + kebersihan.id) 
        .then(() => { 
          this.loadAlatKebersihan(); 
          let index = this.alatkebersihans.indexOf(); 
          this.alatkebersihans.splice(index, 1); 
        }); 
    }, 
    // function 
    btnMakananInstant() { 
      this.MakananInstant = true; 
      this.MakananRingan = false; 
      this.MinumanDingin = false; 
      this.MinumanInstant = false; 
      this.ObatObatan = false; 
      this.PerlengkapanSekolah = false; 
      this.AlatTulis = false; 
      this.BukuBuku = false; 
      this.AlatMakan = false; 
      this.AlatKebersihan = false; 
    },
    btnMakananRingan() { 
      this.MakananInstant = false; 
      this.MakananRingan = true; 
      this.MinumanDingin = false; 
      this.MinumanInstant = false; 
      this.ObatObatan = false; 
      this.PerlengkapanSekolah = false; 
      this.AlatTulis = false; 
      this.BukuBuku = false; 
      this.AlatMakan = false; 
      this.AlatKebersihan = false; 
    }, 
    btnMinumanDingin() { 
      this.MakananInstant = false; 
      this.MakananRingan = false; 
      this.MinumanDingin = true; 
      this.MinumanInstant = false; 
      this.ObatObatan = false; 
      this.PerlengkapanSekolah = false; 
      this.AlatTulis = false; 
      this.BukuBuku = false; 
      this.AlatMakan = false; 
      this.AlatKebersihan = false; 
    }, 
    btnMinumanInstant() { 
      this.MakananInstant = false; 
      this.MakananRingan = false; 
      this.MinumanDingin = false; 
      this.MinumanInstant = true; 
      this.ObatObatan = false; 
      this.PerlengkapanSekolah = false; 
      this.AlatTulis = false; 
      this.BukuBuku = false; 
      this.AlatMakan = false; 
      this.AlatKebersihan = false; 
    }, 
    btnObatObatan() { 
      this.MakananInstant = false; 
      this.MakananRingan = false; 
      this.MinumanDingin = false; 
      this.MinumanInstant = false; 
      this.ObatObatan = true; 
      this.PerlengkapanSekolah = false; 
      this.AlatTulis = false; 
      this.BukuBuku = false; 
      this.AlatMakan = false; 
      this.AlatKebersihan = false; 
    }, 
    btnPerlengkapanSekolah() { 
      this.MakananInstant = false; 
      this.MakananRingan = false; 
      this.MinumanDingin = false; 
      this.MinumanInstant = false; 
      this.ObatObatan = false; 
      this.PerlengkapanSekolah = true; 
      this.AlatTulis = false; 
      this.BukuBuku = false; 
      this.AlatMakan = false; 
      this.AlatKebersihan = false; 
    }, 
    btnAlatTulis() { 
      this.MakananInstant = false; 
      this.MakananRingan = false; 
      this.MinumanDingin = false; 
      this.MinumanInstant = false; 
      this.ObatObatan = false; 
      this.PerlengkapanSekolah = false; 
      this.AlatTulis = true; 
      this.BukuBuku = false; 
      this.AlatMakan = false; 
      this.AlatKebersihan = false; 
    }, 
    btnBukuBuku() { 
      this.MakananInstant = false; 
      this.MakananRingan = false; 
      this.MinumanDingin = false; 
      this.MinumanInstant = false; 
      this.ObatObatan = false; 
      this.PerlengkapanSekolah = false; 
      this.AlatTulis = false; 
      this.BukuBuku = true; 
      this.AlatMakan = false; 
      this.AlatKebersihan = false; 
    }, 
    btnAlatMakan() { 
      this.MakananInstant = false; 
      this.MakananRingan = false; 
      this.MinumanDingin = false; 
      this.MinumanInstant = false; 
      this.ObatObatan = false; 
      this.PerlengkapanSekolah = false; 
      this.AlatTulis = false; 
      this.BukuBuku = false; 
      this.AlatMakan = true; 
      this.AlatKebersihan = false; 
    }, 
    btnAlatKebersihan() { 
      this.MakananInstant = false; 
      this.MakananRingan = false; 
      this.MinumanDingin = false; 
      this.MinumanInstant = false; 
      this.ObatObatan = false; 
      this.PerlengkapanSekolah = false; 
      this.AlatTulis = false; 
      this.BukuBuku = false; 
      this.AlatMakan = false; 
      this.AlatKebersihan = true; 
    }, 
 
    close() { 
      window.location.reload(); 
    }, 
  }, 
}; 
</script> 
 
<style> 
.foods { 
  display: flex; 
  gap: 20px; 
} 
</style>