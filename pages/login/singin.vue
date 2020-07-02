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
        ></b-form-input>
      </b-form-group>
        <label for="text-password">Password</label>
        <b-input v-model="form.password" type="password" id="text-password" aria-describedby="password-help-block"></b-input>
        <b-form-text id="password-help-block">
        Your password must be 8-20 characters long, contain letters and numbers, and must not
        contain spaces, special characters, or emoji.
        </b-form-text>
        <b-button @click="singin" variant="outline-primary">singin</b-button>
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
        singin(){
            this.$store.dispatch("users/singin",this.form)
            .then(()=>{
                this.$router.push("/profile")
            })
            .catch(err =>{
                console.log(err)
            })
        }
    },
}
</script>
<style scoped>
.container{
    width: 40%;
}
</style>