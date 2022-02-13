<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create Playlist</h4>
    <input type="text" required placeholder="Playlist title" v-model="title" />
    <textarea
      placeholder="Playlist description..."
      v-model="description"
    ></textarea>
    <label
      >Upload playlist cover image
      <input type="file" name="" id="" @change="handleChange"
    /></label>
    <div class="error" v-if="fileError">{{ fileError }}</div>
    <button>Create</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const title = ref(null);
const description = ref(null);
const file = ref(null);
const fileError = ref(null);

const handleSubmit = () => {
  console.log(title.value, description.value);
};

// allowed file types
const types = ["image/png", "imag/jpeg"];

const handleChange = (e) => {
  const selected = e.target.files[0];
  if (selected && types.includes(selected.type)) {
    file.value = selected;
    fileError.value = null;
  } else {
    file.value = null;
    fileError.value = "Please select an image file (.png or .jpeg)";
  }
};
</script>

<style scoped>
input[type="file"] {
  border: 0;
  padding: 0;
}
label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>
