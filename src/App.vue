<template>
  <div>
    <h1>{{Bycusmo}}</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
      
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      Bycusmo: "By Cusmo IIoTSE",
    }
  },
  
}
</script>

<style>
  h1{
    background: rgb(0, 185, 231);
  }
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    display: initial;
    margin-left: 8px;
  }
</style>