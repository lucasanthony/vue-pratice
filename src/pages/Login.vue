<template lang="pug"> 
  div.home_container
    div.login_container
      el-input(placeholder="Digite o email" v-model="email" size="medium")
      el-input(placeholder="Digite a senha" v-model="password" type="password")
      el-button(size="medium") Entrar
</template>

<script>
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
// import Api from "../services/Api";

export default {
  name: "Login",
  components: {
    Button,
    Input,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleName(value) {
      this.email = value;
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
