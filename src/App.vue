<template>
  <div id="app">
<!--    <json-milavitsa :json="json"/>-->
    <fundamental/>
  </div>
</template>

<script>

import json from './data'
import Fundamental from "./components/vuemastery/fundamental";
// import JsonMilavitsa from "./components/JSON_milavitsa";

export default {
  name: 'App',
  components: {
    Fundamental
    // JsonMilavitsa
  },
  data() {
    return {
      json
    }
  },
}
</script>

<style>
</style>
