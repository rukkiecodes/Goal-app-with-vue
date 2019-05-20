<template>
  <div class="about">
    <Navbar />
    <div class="container-fluid">
      <h1>About page</h1>
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Navbar, Footer
  },
  mounted(){
    this.$nextTick(() => {

    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>