<template lang="pug"> 
  button.customButton(@click="clicked()") {{text}}
</template>

<script>
export default {
  name: "Button",
  props: {
    text: { type: String, default: "CLique aqui" }
  },
  methods: {
    clicked() {
      this.$emit("clicked");
    },
  }
};
</script>

<style scoped>
.customButton {
  background-color: blue;
  width: 50%;
  height: 10%;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: wheat;
  font-weight: bold;
  font-size: 1rem;
}

.customButton:hover {
  background-color: darkblue;
}
</style>
