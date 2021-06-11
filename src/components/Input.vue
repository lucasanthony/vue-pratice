<template lang="pug"> 
  input.customInput(:placeholder="placeholder" :type="type" v-model="value" @change="valueChanged()")
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    valueChanged() {
      this.$emit("valueChanged", this.value);
    },
  },
  props: {
    placeholder: { String, default: "Digite algo" },
    type: { String, default: "name" },
  },
};
</script>

<style scoped>
.customInput {
  width: 80%;
  height: 10%;
  border-radius: 20px;
  border: 1px solid black;
  text-align: center;
  outline: none;
}

.customInput:focus {
  border-color: blue;
}
</style>
