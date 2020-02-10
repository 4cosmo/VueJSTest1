<template>
  <div id="Login">
      <h3>
      Username :
      <input v-model="accountN.username" type="text" placeholder="Enter your Username">
    </h3>
    <h3>
      Password :
      <input v-model="accountN.password" type="text" placeholder="Password">
      <h1><router-link to="/into"><button @click="onClickLogin">Login</button></router-link></h1>
      <h3 :class="classAr"><span>{{accountN.username}}</span></h3>
      <h3 :class="[classAr[0], classSS]"><span>{{accountN.password}}</span></h3>
      <h3 ><span>{{ArryN}}</span></h3>
    </h3>
  </div>
  
</template>

<script>
export default {
 name: 'Login',

 data() {
     return {
       accountN: {
        username : "",
        password : ""
       },
       ArryN: [
         'AAA',
         'BBB',
         'CCC'
       ],
        boolLogin : false,
        classAr : [
          'sad1',
          'sad2'
        ],
        classSS : 'sad3',
         
     }
 },

 methods: {
    onClickLogin(){
      this.boolLogin = true
    },

  }

}
</script>

<style scoped>
  .sad1{
    font: 18px sans-serif;
  }
  .sad2{
    color: blue;
  }
  .sad3{
    background-color: red;
  }
</style>