<template lang="pug"> 
  div.app_container
    router-view
    Login
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: { Login },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
