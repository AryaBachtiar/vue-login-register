<template>
  <div id="app">
<router-view  />
  </div>
</template>

<script>

export default {
  name: 'App',
 computed: {
    
    userRole() {
      return this.loggedIn && this.loggedIn.role;
    }
  },
  methods:

  {
 out() {
      sessionStorage.clear();
      this.$router.push("/");
    },
        logout() {
      localStorage.clear();
    },
  }
  
};
 

</script>

<style>

</style>
