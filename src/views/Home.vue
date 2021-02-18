<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/madlib.png" />
    <MadLib msg="RESET" />
  </div>
</template>

<script>
// @ is an alias to /src
import MadLib from "@/components/MadLib.vue";

export default {
  name: "Home",
  components: {
    MadLib
  }
};
</script>
