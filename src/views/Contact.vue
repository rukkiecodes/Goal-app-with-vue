<template>
  <div class="home">
    <Navbar />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "home",
  components: {
    Navbar, Contact
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>