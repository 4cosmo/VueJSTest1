<template>

<div id="Test">
<form>

  <div :class="segment">
    <h1>Sign up</h1>
  </div>
  
  <label>
    <input type="text" placeholder="Email Address"/>
  </label>
  <label>
    <input type="password" placeholder="Password"/>
  </label>
  <button :class="red" type="button"><i :class="icon1"></i> Log in</button>
  
  <div :class="segment">
    <button :class="unit" type="button"><i :class="icon2"></i></button>
    <button :class="unit" type="button"><i :class="icon2"></i></button>
    <button :class="unit" type="button"><i :class="icon2"></i></button>
  </div>
  
  <div :class="INgroup">
    <label :class="groupLa">
      <input type="text" placeholder="Email Address"/>
    </label>
    <button :class="unit" type="button"><i :class="icon2"></i></button>
  </div>
  
</form>
</div>

</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            segment: 'segment',
            icon1: 'icon1',
            icon2: 'icon2',
            INgroup: 'input-group',
            red: 'red',
            groupLa: 'input-groupLa',
            unit: 'unit'
        }
    },

}
</script>

<style scoped>
    body, html {
        background-color: #EBECF0;
    }

    body,p, input, select, textarea, button {
        font-family: 'Montserrat', sans-serif;
        letter-spacing: -0.2px;
        font-size: 16px;
    }
    div, p {
        color: #BABECC;
        text-shadow: 1px 1px 1px #FFF;
    }
    form {
        padding: 16px;
        width: 16px*20;
        margin: 0 auto;
    }
    button, input {
        border: 0;
        outline: 0;
        font-size: 16px;
        border-radius: 16px*20;
        padding: 16px;
        background-color:#EBECF0;
        text-shadow: 1px 1px 0 #FFF;
    }
    label {
        display: block;
        margin-bottom: 16px*1.5;
        width: 100%;
    }
    input {
        margin-right: 16px/2;
        box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;
        width: 100%;
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;
        appearance: none;
        -webkit-appearance: none;
    }
    button {
        color:#61677C;
        font-weight: bold;
        box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        font-weight: 600; 
    }
    .icon1 {
        margin-right: 16px/2;
    }
    .icon2 {
        margin-right: 0; 
    }
    .red {
        display: block;
        width: 100%;
        color:#AE1100;
    }
    .unit {
        border-radius: 16px/2;
        line-height: 0;
        width: 16px*3;
        height: 16px*3;
        display:inline-flex;
        justify-content: center;
        align-items:center;
        margin: 0 16px/2;
        font-size: 16px*1.2;
    }

    .input-group {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .input-groupLa{
        margin: 0;
        flex: 1;
    }
</style>