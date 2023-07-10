<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="fruits.name"
            name="name"
          />
        </div>
  
        <div class="form-group">
          <label for="price">Price</label>
          <input
            type="number"
            class="form-control"
            id="price"
            required
            v-model="fruits.price"
            name="price"
          />
        </div>

        <div class="form-group">
            <label for="quantity">Quantity</label>
            <input
                type="number"
              class="form-control"
              id="quantity"
              required
              v-model="fruits.quantity"
              name="quantity"
            />
          </div>
  
        <button @click="saveFruit" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newFruit">Add</button>
      </div>
    </div>
  </template>
  
  
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>
  
  <script>
  import FruitsDataService from "../services/FruitsDataService";
  
  export default {
    name: "add-fruit",
    data() {
      return {
        fruits: {
          name: "",
          price: 0,
          quantity: 0,
          published: false
        },
        submitted: false
      };
    },
    methods: {
      saveFruit() {
        var data = {
          name: this.fruits.name,
          price: this.fruits.price,
          quantity: this.fruits.quantity,
          published: false
        };
  
        FruitsDataService.create(data)
          .then(() => {
            console.log("Created new item successfully!");
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newFruit() {
        this.submitted = false;
        this.fruits = {
          name: "",
          price: 0,
          quantity: 0,
          published: false
        };
      }
    }
  };
  </script>