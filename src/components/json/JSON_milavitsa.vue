<template>
  <div>
    <div class="list">
<!--   Название, страна, картинка, цена, описание, категория, материал, fillnes   -->
      <div class="product__item" v-for="(product_item,key) in json.data" :key="key">

        <div class="img" :style="{ backgroundImage: 'url(' + 'https://milavitsa.store' + product_item.images[0].src + ')' }"/>
        <div class="name">{{product_item.name}}</div>
        <div class="description" v-if="product_item.description">{{product_item.description}}</div>
        <div class="description__block">
          <div class="description__item">Категория: {{ product_item.category }}, {{ product_item.range_group }}, {{ product_item.range_subgroup }}</div>
          <div class="description__item">Цена: {{product_item.price}} руб.</div>
          <div class="description__item">Коллекция: {{ product_item.collection }}, {{ product_item.collection_class }}</div>
          <div class="description__item" v-if="product_item.country">Страна: {{product_item.country}}</div>
          <div class="description__item">Материал: {{ product_item.material }}</div>
          <div class="description__item">Производитель: {{ product_item.factory }}</div>

        </div>
        <div class="teh__desc">
          <div class="item">создано: {{ product_item.created_at }}</div>
          <div class="item">обновленно: {{ product_item.updated_at }}</div>
          <div class="item">id: {{product_item.id}}</div>
          <div class="item">code: {{product_item.code}}</div>
          <div class="item">marker: <div class="marker" :style="{ 'background-color': product_item.marker }"/></div>
          <div class="item">УИД: <span class="uid">{{product_item.uid}}</span></div>
          <div class="item">Цена продажи: {{product_item.sale_price}} руб.</div>
          <div class="item">product_category_id: {{ product_item.product_category_id }}</div>
          <div class="item">collection_class_1c: {{ product_item.collection_class_1c }}</div>
          <div class="item" v-if="product_item.frame">frame: {{ product_item.frame }}</div>
          <div class="item" v-if="product_item.mill">mill: {{ product_item.mill }}</div>
          <div class="item">straps: {{ product_item.straps }}</div>
          <div class="item">fullness: {{ product_item.fullness }}</div>
          <div class="item">design: {{ product_item.design }}</div>
        </div>

<!--        <div>product_category: {{ product_item.product_category }}</div>-->

<!--        <div>props: {{ product_item.props }}</div>-->
      </div>
    </div>
  </div>
</template>

<script>
// import People from "./People";

export default {
  // components: {People},
  name: 'HelloWorld',
  props: {
    json: Object,
    product_item: String
  },
  data() {
    return {
      counter: 1,
      peoples: [
        {
          id: 1,
          name: 'ivan',
          age: 31,
          skillz: ['html', 'css', 'js'],
          peoples: [
            {
              id: 1,
              name: 'ivan',
              age: 31,
              skillz: ['html', 'css', 'js'],
            },
            {
              id: 2,
              name: 'stepan',
              age: 20,
              skillz: ['html', 'css', 'js'],
              peoples: [
                {
                  name: 'Anna',
                  age: 3,
                  skillz: ['Laugh', 'Noize']
                },
              ]
            },
          ],
        },
        {
          id: 2,
          name: 'stepan',
          age: 20,
          skillz: ['html', 'css', 'js'],
          peoples: [
            {
              name: 'Anna',
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
          peoples: [
            {
              name: 'Manna',
              age: 3,
              skillz: ['Laugh', 'Noize']
            },
          ]
        },
      ],
    }
  },
  methods: {
    add() {
      this.peoples[this.peoples.length - 1].peoples.push(this.peoples[0])
    }
  },
}
</script>
<style>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product__item {
  overflow: scroll;
  width: 23%;
  height: 500px;
  border: 1px solid #cecece;
  border-radius: 10px;
  margin: 15px 0;
}

.img {
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-bottom: 1px solid #cecece;
}

.name {
  text-align: center;
  margin: 5px 0;
  font-size: 18px;
}

.description {
  margin: 0 5px;
  padding: 5px 0;
  border-top: 3px solid #ddd;
  border-bottom: 3px solid #ddd;
}

.description__block {
  padding: 0 20px 5px 5px;
}

.description__item {
  border-bottom: 1px dotted #dedede;
  margin-top: 5px;
}

.marker {
  width: 15px;
  height: 15px;
  margin-left: 5px;
}

.uid {
  font-size: 15px;
  margin-left: 5px;
}

.teh__desc {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #dedede;
}

.item {
  display: flex;
  padding-left: 5px;
}

</style>
