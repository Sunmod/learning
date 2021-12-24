<template>
  <div id="app">
<!--    <json-milavitsa :json="json"/>-->
  </div>
</template>

<script>

import json from './data'
// import JsonMilavitsa from "./components/JSON_milavitsa";

export default {
  name: 'App',
  components: {
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
