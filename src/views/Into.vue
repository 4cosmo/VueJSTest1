<template>
  <div id="into">
    <h1> Hello </h1>
    <h2>{{count}}</h2>
    <Button @click="onClickAdd">Add</Button>
    <Button v-if="count > 0" @click="onClickSub">Sub</Button>
    <h3> Event and Methods </h3>
    <button v-on:click= "clickMe1"> Click1 </button>
    <button v-on:click= "clickMe2('Hello')"> Click2 </button>

    <div :style="ActivateClick ? sad4 : ' '"> สวัสดีผมโฟกัสนะ </div>
    <button @click="ActivateClick = !ActivateClick">ActivateClick</button>

  </div>
</template>

<script>
export default {
    name : "into",

    mounted() {
            this.inti()
        },
    
    data() {
        return {
            count: 0,
            boolLogin: false,
            sad4: {
                backgroundColor : "black",
                color : "red"
            },
            ActivateClick : false
        }
    },

    methods: {
        onClickAdd(){
            this.count = this.count+1
        },
        onClickSub(){
            this.count = this.count-1
        },
            clickMe1(){
            alert("Hi")
        },
        clickMe2(message){
            alert(message)
        },
        inti(){
            console.log("Initialization")
        }
    }
}
</script>

<style>

</style>