<template>
    <div v-if="currentTutorial" class="edit-form">
      <h4>Fruit</h4>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="currentFruit.name"
          />
        </div>
  
        <div class="form-group">
          <label for="price">Price</label>
          <input
            type="number"
            class="form-control"
            id="price"
            v-model="currentFruit.price"
          />
        </div>

        <div class="form-group">
            <label for="quantity">Quantity</label>
            <input
              type="number"
              class="form-control"
              id="quantity"
              v-model="currentFruit.quantity"
            />
          </div>
  
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentFruit.published ? "Published" : "Pending" }}
        </div>
      </form>
  
      <button
        class="badge badge-primary mr-2"
        v-if="currentFruit.published"
        @click="updatePublished(false)"
      >
        UnPublish
      </button>
      <button
        v-else
        class="badge badge-primary mr-2"
        @click="updatePublished(true)"
      >
        Publish
      </button>
  
      <button class="badge badge-danger mr-2" @click="deleteFruit">
        Delete
      </button>
  
      <button type="submit" class="badge badge-success" @click="updateFruit">
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a Fruit...</p>
    </div>
  </template>
  
 
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>
  
  <script>
  import FruitsDataService from "../services/FruitsDataService";
  
  export default {
    name: "fruitApp",
    props: ["fruit"],
    data() {
      return {
        currentFruit: null,
        message: "",
      };
    },
    watch: {
      fruit: function(fruit) {
        this.currentFruit = { ...fruit };
        this.message = "";
      },
    },
    methods: {
      updatePublished(status) {
        FruitsDataService.update(this.currentFruit.id, {
          published: status,
        })
          .then(() => {
            this.currentFruit.published = status;
            this.message = "The status was updated successfully!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      updateFruit() {
        const data = {
          name: this.currentFruit.name,
          price: this.currentFruit.price,
          quantity: this.currentFruit.quantity,
        };
  
        FruitsDataService.update(this.currentFruit.id, data)
          .then(() => {
            this.message = "The fruit was updated successfully!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      deleteFruit() {
        FruitsDataService.delete(this.currentFruit.id)
          .then(() => {
            this.$emit("refreshList");
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.message = "";
      this.currentFruit = { ...this.fruit }
    },
  };
  </script>