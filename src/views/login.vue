<template>
  <div id="Login">
      <h3>
      Username :
      <input v-model="username" type="text" placeholder="Enter your Username">
    </h3>
    <h3>
      Password  __:
      <input v-model="password" type="text" placeholder="Password">
      <h1><router-link to="/into"><button @click="onClickLogin">Login</button></router-link></h1>
    </h3>
  </div>
</template>

<script>
export default {
 name: 'Login',

 data() {
     return {
        username : "",
        password : "",
        boolLogin : false
         
     }
 },

 methods: {
    onClickLogin(){
      this.boolLogin = true
    },

  }

}
</script>

<style>

</style>