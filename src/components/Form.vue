<template>
  <b-container class="form" fluid>
    <b-row class="my-1" v-for="(type, index) in blanks" :key="index">
      <b-col sm="3">
        <label :for="`${index}`"
          ><b> {{ type }}:</b></label
        >
      </b-col>
      <b-col sm="9">
        <b-form-input
          :id="`${index}`"
          type="text"
          v-on:input="onChange($event, index)"
        ></b-form-input>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Form",
  props: {
    blanks: Array,
  },
  data: () => ({
    modified: [],
  }),
  methods: {
    onChange: function(event, index) {
      this.modified[index] = event;
      this.$emit("changed", this.modified);
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  color: white;
  background-color: #4429ca;
  padding: 1rem;
}
</style>
