<template lang="pug"> 
  div.home_container
    div.login_container
      Input(placeholder="Digite o email" type="name" @valueChanged="handleName")
      Input(placeholder="Digite a senha" type="password" @valueChanged="handlePassword")
      Button(text="Entrar" @clicked="handleLogin")
</template>

<script>
import Button from "./Button.vue";
import Input from "./Input.vue";
// import Api from "../services/Api";

export default {
  name: "Login",
  components: {
    Button,
    Input,
  },
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    handleName(value) {
      this.name = value;
    },
    handlePassword(value) {
      this.password = value;
    },
    async handleLogin() {
      try {
        // const response = await Api.post("user/signIn", {
        //   email: this.name,
        //   password: this.password,
        // });
        // const data = response.data;
        // console.log(data);
        this.$router.push('/dashboard')
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};
</script>

<style scoped>
.home_container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.login_container {
  background-color: aliceblue;
  width: 50%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  gap: 5%;
}
</style>
