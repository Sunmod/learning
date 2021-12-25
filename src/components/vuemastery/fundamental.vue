<template>
  <div>
    <div class="nav-bar"></div>
    <div class="product">
      <div class="product-image">
        <!-- v-bind:src == :src -->
        <img :src="image" :alt="altText">
      </div>

      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
<!--        <span v-if="onSale">On sale!</span>-->
<!--        <p>{{ description }}</p>-->
<!--        <a :href="link" target="_blank">More products like this</a>-->
        <ul>
          <li v-for="detail in details" :key="detail.key"> {{ detail }} </li>
        </ul>
        <div class="color-box"
             v-for="variant in variants"
             :key="variant.variantId"
             :style="{ backgroundColor: variant.variantColor }"
             @mouseover="updateProduct(variant.variantImage)">
        </div>

        <button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">
          Add to cart
        </button>
        <button @click="cart--">
          Remove from cart
        </button>
        <div class="cart">
          Cart({{cart}})
        </div>

<!--        <ul>-->
<!--          <li v-for="size in sizes" :key="size.key"> {{size}} </li>-->
<!--        </ul>-->
      </div>

      <examples v-if="show"/>
    </div>
  </div>
</template>

<script>
import Examples from "./examples";
export default {
  name: "fundamental",
  components: {Examples},
  data() {
    return {
      show: true,

      product: 'Socks',
      description: 'A pair of warm, fuzzy socks',
      image: require('/src/assets/vmSocks-green.jpg'),
      altText: 'A pair of socks',
      link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
      inStock: false,
      onSale: true,
      details: ["80% cotton","20% polyester","Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: require('/src/assets/vmSocks-green.jpg'),
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: require('/src/assets/vmSocks-blue.jpg'),
        }
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
      cart: 0
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    },
  }
}
</script>

<style scoped>
body {
  font-family: tahoma;
  color:#282828;
  margin: 0px;
}

.nav-bar {
  background: linear-gradient(-90deg, #84CF6A, #16C0B0);
  height: 60px;
  margin-bottom: 15px;
}

.product {
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
}

img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px .5px 1px #d8d8d8;
}

.product-image {
  width: 80%;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 50%;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #1E95EA;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
}

.disabledButton {
  background-color: #d8d8d8;
}

.review-form {
  width: 400px;
  padding: 20px;
  margin: 40px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}

.tab {
  margin-left: 20px;
  cursor: pointer;
}

.activeTab {
  color: #16C0B0;
  text-decoration: underline;
}

.outOfStock {
  text-decoration: line-through;
}
</style>