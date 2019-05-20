<template>
  <div class="home">
    <Navbar />
    
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Navbar, Login
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>