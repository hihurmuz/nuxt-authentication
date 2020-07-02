<template>
    <div class="container">
    <b-form @submit.stop.prevent>
        <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
          :state="validEmail(form.email)"
        ></b-form-input>
      </b-form-group>
        <label for="text-password">Password</label>
        <b-input :state="validPassword(form.password)" v-model="form.password" type="password" id="text-password" aria-describedby="password-help-block"></b-input>
        <b-form-text id="password-help-block">
        Your password must be 8-20 characters long
        </b-form-text>
        <b-button @click="singup" variant="outline-primary">singup</b-button>
    </b-form>
</div>
</template>
<script>
export default {
    layout:"anonymousUser",
    data() {
        return {
            form:{
                email:"",
                password:""
            }
        }
    },
    methods: {
        singup(){
            this.$store.dispatch("users/createUser",this.form)
            .then(()=>{
                this.$router.push("/profile")
            })
            .catch(err =>{
                console.log(err)
            })
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        },
        validPassword: function(password){
            if(password.length >=8 && password.length <=20){
                return true
            }else return false
        }
    },
}
</script>
<style scoped>
.container{
    width: 40%;
}
</style>