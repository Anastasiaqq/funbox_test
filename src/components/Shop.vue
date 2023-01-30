<template>
  <div class="shop__container">
    <div class="shop">
      <h1 class="shop__header">Ты сегодня покормил кота?</h1>
      <div class="shop__goods">
        <Item v-for="item in goods" :key="item.contents" :contents="item.contents" :weight="item.weight" :presents="item.presents" :desc="item.desc" :active="item.active"/>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
export default {
  name: "Shop",
  data() {
    return {
      goods: [
        {contents: 'с фуа-гра', weight: '0,5', presents: ['10 порций', 'мышь в подарок'], desc: 'Печень утки разварная с артишоками', active: true},
        {contents: 'с рыбой', weight: '2', presents: ['40 порций', '2 мыши в подарок'], desc: 'Головы щучьи с чесноком да свежайшая сёмгушка', active: true},
        {contents: 'с курой', weight: '5', presents: ['100 порций', '5 мышей в подарок', 'заказчик доволен'], desc: 'Филе из цыплят с трюфелями в бульоне', active: false}
      ]
    }
  },
  components:{
    Item
  }
};
</script>
