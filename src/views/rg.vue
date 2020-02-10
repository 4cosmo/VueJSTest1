<template>
  <div id="RGi">
      <h3>Register</h3>
      <form @submit.prevent="submit">
          <div>
              <label for="First_name">Firstname :</label>
              <input type="text" placeholder="Firstname" name="First_name" v-model="app.First_name">
          </div>

          <div>
              <label for="Last_name">Lastname :</label>
              <input type="text" placeholder="Lastname" name="Last_name" v-model="app.Last_name">
          </div>

          <div>
              <label for="sex">Male</label>
              <input type="radio" name="sex" value="male" v-model="app.sex">
          </div>
          <div>
              <label for="sex">Female</label>
              <input type="radio" name="sex" value="Female" v-model="app.sex">
          </div>

          <div>
              <select name="city" v-model="app.city">
                  <option value="Chiang Mai">Chiang Mai</option>
                  <option value="Bangkok">Bangkok</option>
                  <option value="Prachin Buri">Prachin Buri</option>
              </select>
          </div>

          <div style="margin-top: 16px; color: red;">
              #Spy {{ JSON.stringify(app)}}
          </div>

          <div>
              <button type="clear" @click="clear">Clear</button>
              <button type="submit">Submit</button>
          </div>

      </form>
  </div>
</template>

<script>
export default {
    name: "RGi",
    data() {
        return {
            app:{
                First_name: "",
                Last_name: "",
                sex: "male",
                city: "Chiang Mai"
            }
        }
    },
    methods: {
        clear(){
            this.app = {
                First_name: "",
                Last_name: "",
                sex: "male",
                city: "Chiang Mai"
            }
        },
        submit(even){
            even.preventDefault();
            alert(JSON.stringify(this.app));
        }
    },

}
</script>

<style>

</style>