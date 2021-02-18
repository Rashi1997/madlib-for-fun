<template>
  <div class="hello mt-4">
    <b-button variant="button-color" size="sm" v-on:click="nextMadlib"
      ><b class="text-white">{{ msg }}</b></b-button
    >
    <b-container class="bv-example-row mt-2">
      <b-row align-h="center" align-v="center">
        <b-col cols="7"
          ><Form
            v-model="madlib"
            @changed="changeOptions"
            :blanks="getOptions()"
        /></b-col>
        <b-col cols="5" class="text" v-html="text"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const { getItems, replaceItems, highlight } = require("../store/madLibCode");
const madlibs = require("../store/data");
import Form from "@/components/Form.vue";

function handleSubmit(e, madlib) {
  e.preventDefault();
  console.log(madlib);
}

export default {
  name: "MadLib",
  props: {
    msg: String,
  },
  data: () => ({
    index: 0,
    madlibs: madlibs,
    madlib: madlibs[0],
    text: highlight(madlibs[0])
  }),
  components: {
    Form,
  },
  methods: {
    nextMadlib: function() {
      this.index = Math.floor(Math.random() * Math.floor(this.madlibs.length));
      console.log(this.index);
      this.madlib = this.madlibs[this.index];
      this.text = highlight(this.madlibs[this.index]);
    },
    getMadlib: function() {
      this.madlib = this.madlibs[this.index];
      return this.madlib;
    },
    madlibItems: function() {
      return getItems(this.getMadlib());
    },
    onSubmit: function(e) {
      handleSubmit(e, this.getMadlib());
    },
    changeOptions(value) {
      console.log(value); // someValue
      this.text = replaceItems(this.madlib, value);
    },
    getOptions: function() {
      return getItems(this.madlib);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.text {
  font-size: 1.3rem;
}
</style>
