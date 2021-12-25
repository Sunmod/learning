<template>
 <div class="container">
   <div class="item">
     <i>v-if, v-else</i>
     <!-- v-if not in DOM -->
     <p v-if="inStock">In Stock</p>
     <p v-else>Out of Stock</p>
   </div>
   <div class="item">
     <i>v-else-if</i>
     <!-- logic 3 lvl -->
     <p v-if="inventory > 10">In Stock</p>
     <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
     <p v-else>Out of Stock</p>
   </div>
   <div class="item">
     <i>v-show</i>
     <!-- v-show in DOM -->
     <p v-show="inStock">In Stock</p>
     <!-- haven't v-else. when false - display: none -->
   </div>
   <div class="item">
     <i>v-for</i>
     <ul>
       <li v-for="detail in details" :key="detail.key">{{ detail }}</li>
     </ul>
     <div v-for="variant in variants" :key="variant.key">
       <p>{{ variant.color }} {{ variant.id }}</p>
     </div>
   </div>
   <div class="item">
     <i>event handling</i>
     <div class="item">
       <!-- x += y | x = x + y -->
       <button @click="point += 1">
         Add something (+=)
       </button>
       <!-- Добавляет единицу к своему операнду. -->
       <button @click="point++">
         Add something (++)
       </button>
       <div>
         That something: {{ point }}
       </div>
       <!-- x -= y | x = x - y -->
       <button @click="point -= 1">
         Remove something (-=)
       </button>
       <!-- Вычитает единицу из значения своего операнда. -->
       <button @click="point--">
         Remove something (--)
       </button>
     </div>
     <div class="item">
       <button @click="addToCart">
         Add cart
       </button>
       <div>
         Cart ({{ cart }})
       </div>
     </div>
     <div class="item">

     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "examples",
  data () {
    return {
      inStock: false,
    //  false - show v-else and display: none when v-show
      inventory: 10,
    //  <10 , 10<= , 0<=
      details: ["one","two","three"],
      variants: [
        {
          id: 1112,
          color: 'red'
        },
        {
          id: 1113,
          color: 'blue'
        }
      ],
      point: 0,
      cart: 0
    }
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    }
  }
}
</script>

<style scoped>
.container {
  border: 1px solid red;
  padding: 5px;
  width: 100%;
  display: flex;
}

.item {
  border: 1px solid green;
  padding: 5px;
  margin: 5px;
}
</style>