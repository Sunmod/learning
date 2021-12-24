<template>
  <table border="1">
    <thead>
    <tr>
      <td>id</td>
      <td>name</td>
      <td>age</td>
      <td>skillz</td>
      <td v-if="people.peoples">peoples</td>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>{{ people.id }}</td>
      <td>{{ people.name }}</td>
      <td>{{ people.age }}</td>
      <td>
        <ul>
          <li v-for="(skill, key) in people.skillz" :key="key">{{ skill }}</li>
        </ul>
      </td>
      <td v-if="people.peoples">
        <people v-for="(people, key) in people.peoples" :people="people" :key="key"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
import People from './People.vue'

export default {
  componets: {People},
  name: 'People',
  props: {
    people: Object
  },
  mounted() {
    console.log(this.people)
  },
}
</script>
<style scoped>
td {
  padding: 10px;
}

table {
  margin: 15px;
}
</style>
