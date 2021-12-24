<template>
 <div class="container">
   <div>
     <i>v-if, v-else</i>
     <!-- v-if not in DOM -->
     <p v-if="inStock">In Stock</p>
     <p v-else>Out of Stock</p>
   </div>
   <div>
     <i>v-else-if</i>
     <!-- logic 3 lvl -->
     <p v-if="inventory > 10">In Stock</p>
     <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
     <p v-else>Out of Stock</p>
   </div>
   <div>
     <i>v-show</i>
     <!-- v-show in DOM -->
     <p v-show="inStock">In Stock</p>
     <!-- haven't v-else. when false - display: none -->
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
      inventory: 10
    //  <10 , 10<= , 0<=
    }
  }
}
</script>

<style scoped>
.container {
  border: 1px solid red;
  padding: 10px;
}
</style>