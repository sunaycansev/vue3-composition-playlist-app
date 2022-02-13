<template>
  <form @submit.prevent="handleSubmit">
    <h3>Signup</h3>
    <input type="text" placeholder="Username" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <button v-if="!isPending">Signup</button>
    <button v-if="isPending" disabled>Loading...</button>
  </form>
</template>

<script setup>
import useSignup from "../../composables/useSignup";
import { ref } from "vue";

const email = ref(null);
const password = ref(null);
const displayName = ref(null);

const { error, signUp, isPending } = useSignup();

const handleSubmit = async () => {
  const res = await signUp(email.value, password.value, displayName.value);
  if (!error.value) {
    console.log("user logged in");
    console.log("res", res);
  }
};
</script>

<style scoped></style>
