<template>
  <div class="logout">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="logout-form">
              <h1 class="center">ARE YOU SURE YOU WANT TO LEAVE?</h1>
              
              <div class="links">
                <router-link to="/admin" class="btn blue">STAY</router-link>
                <button @click="logout()" class="btn blue">LOGOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { fb } from '../firebase';
export default {
  name: "Logout",
  props: {
    msg: String
  },
  methods:{
    logout(){
      fb.auth().signOut()
      .then(() => {
        this.$router.replace('/');
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>