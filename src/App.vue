<template>
  <div id="app">
    <h1><a href="https://www.facebook.com/ByFocu5"><img v-bind:src="linkImgEngi" height="70px"></a> {{Bycusmo}}</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/test">Test</router-link></li>
    </ul>
      
    <router-view></router-view>
    <div :class="ByengCss">
    <p align='right'>----- FOCUS ----- <br> {{Byeng}}&nbsp;InSE&nbsp;17</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      Bycusmo: "By Cusmo IIoTSE",
      linkImgEngi: "https://upload.wikimedia.org/wikipedia/th/9/93/Engkmutnb2222.png",
      Byeng: "ENGINEER 52",
      ByengCss: "BEC",
    }
  },
  
}
</script>

<style scoped>
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
  .BEC{
    background: rgb(0, 185, 231);
    font: 18px TH Sarabun New;
  }
</style>