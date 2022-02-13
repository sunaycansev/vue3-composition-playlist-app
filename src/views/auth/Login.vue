<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <button v-if="!isPending">Login</button>
    <button v-if="isPending" disabled>Loading...</button>
  </form>
</template>

<script setup>
import useLogin from "../../composables/useLogin";
import { ref } from "vue";

const email = ref(null);
const password = ref(null);

const { error, login, isPending } = useLogin();

const handleSubmit = async () => {
  const res = await login(email.value, password.value);
  if (!error.value) {
    console.log("user logged in");
    console.log("res", res);
  }
};
</script>

<style scoped></style>
