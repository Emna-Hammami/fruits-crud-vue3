<template>
    <div class="list row">
      <div class="col-md-6">
        <h4>Fruits List</h4>
        <ul class="list-group">
          <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(fruit, index) in fruits"
            :key="index"
            @click="setActiveFruit(fruit, index)"
          >
            {{ fruit.name }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div v-if="currentFruit">
          <tutorial-details
            :tutorial="currentFruit"
            @refreshList="refreshList"
          />
        </div>
        <div v-else>
          <br />
          <p>Please click on a Fruit...</p>
        </div>
      </div>
    </div>
  </template>
  
  
 
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>
  
  <script>
  import FruitsDataService from "../services/FruitsDataService";
import FruitsDetails from "./Fruits";
  
  export default {
    name: "fruits-list",
    // eslint-disable-next-line vue/no-unused-components
    components: { FruitsDetails },
    data() {
      return {
        fruits: [],
        currentFruit: null,
        currentIndex: -1,
        unsubscribe: null
      };
    },
    methods: {
      onDataChange(items) {
        let _fruits = [];
  
        items.forEach((item) => {
          let id = item.id;
          let data = item.data();
          _fruits.push({
            id: id,
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            published: data.published,
          });
        });
  
        this.fruits = _fruits;
      },
  
      refreshList() {
        this.currentFruit = null;
        this.currentIndex = -1;
      },
  
      setActiveFruit(fruits, index) {
        this.currentFruit = fruits;
        this.currentIndex = index;
      },
    },
    mounted() {
      this.unsubscribe = FruitsDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
    },
    beforeUnmount() {
      this.unsubscribe();
    }
  };
  </script>