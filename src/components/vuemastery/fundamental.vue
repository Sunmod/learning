<template>
  <div>
    <div>
      <h1>{{ product }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "fundamental",
  data() {
    return {
      product: 'Socks',
      description: 'A pair of warm, fuzzy socks'
    }
  }
}
</script>

<style scoped>

</style>