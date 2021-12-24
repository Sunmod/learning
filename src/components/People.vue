<template>
  <div>
    <table border="1">
      <thead>
      <tr>
        <th v-for="(field,key) in peoples[0]" :key="key"> {{key}} </th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="people in peoples" :key="people.id">
          <td>{{ people.id }}</td>
          <td>{{ people.name }}</td>
          <td>{{ people.age }}</td>
          <td>
            <ul>
              <li v-for="(skill, key) in people.skillz" :key="key">{{skill}}</li>
            </ul>
          </td>
          <td>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      counter: 1,
      name: 'Stepan',
      answer: Boolean,
      car: {
        wheels: 5,
        circle: 'bmw',
      },
      peoples: [
        {
          id: 1,
          name: 'ivan',
          age: 31,
          skillz: ['html', 'css', 'js'],
          childs: [
            {
              name:'Anna',
              age: 3,
              skillz: ['Laugh', 'Noize']
            },
          ]
        },
        {
          id: 2,
          name: 'stepan',
          age: 20,
          skillz: ['html', 'css', 'js'],
          childs: [
            {
              name:'Anna',
              age: 3,
              skillz: ['Laugh', 'Noize']
            },
          ]
        },
        {
          id: 3,
          name: 'Sarah Jessica Parker',
          age: 56,
          skillz: ['html', 'css', 'js'],
          childs: [
            {
              name:'Anna',
              age: 3,
              skillz: ['Laugh', 'Noize']
            },
            {
              name:'Anna',
              age: 3,
              skillz: ['Laugh', 'Noize']
            },
            {
              name:'Anna',
              age: 3,
              skillz: ['Laugh', 'Noize']
            },
            {
              name:'Anna',
              age: 3,
              skillz: ['Laugh', 'Noize']
            },
          ]
        },
        {
          id: 4,
          name: 'Sarah Connor',
          age: 40,
          skillz: ['html', 'css', 'js'],
          childs: [
            {
              name:'Anna',
              age: 3,
              skillz: ['Laugh', 'Noize']
            },
          ]
        },
        {
          id: 5,
          name: 'Agnessa',
          age: 20,
          skillz: ['html', 'css', 'js'],
          childs: [
            {
              name:'Manna',
              age: 3,
              skillz: ['Laugh', 'Noize']
            },
            {
              name:'Hanna',
              age: 3,
              skillz: ['Laugh', 'Noize']
            },
            {
              name:'Anna',
              age: 3,
              skillz: ['Laugh', 'Noize']
            },
            {
              name:'Jnna',
              age: 3,
              skillz: ['Laugh', 'Noize', 'Noize', 'Noize', 'Noize', 'Noize', 'Noize', 'Noize', 'Noize', 'Noize', 'Noize', 'Noize', 'Noize', 'Noize', 'Noize', 'Noize', 'Noize', 'Noize']
            },
          ]
        },
      ],
    }
  },
}
</script>
<style scoped>
td{
  padding: 10px;
}
table{
  margin: 15px;
}
</style>
