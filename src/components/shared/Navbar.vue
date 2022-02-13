<template>
  <div class="navbar">
    <nav>
      <h1><router-link :to="{ name: 'Home' }">Playlist</router-link></h1>
      <div class="links">
        <button @click="handleClickLogout" v-if="user">Logout</button>
        <router-link class="btn" :to="{ name: 'Signup' }" v-if="!user"
          >Signup</router-link
        >
        <router-link class="btn" :to="{ name: 'Login' }" v-if="!user"
          >Login</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script setup>
import useLogout from "../../composables/useLogout";
import useGetUser from "../../composables/useGetUser";
import { useRouter } from "vue-router";

const { error, logout, isPending } = useLogout();
const { user } = useGetUser();
const router = useRouter();
const handleClickLogout = async () => {
  const res = await logout();
  router.push("/login");
  if (!error) {
    console.log("res =>", res);
    console.log("user logged out");
  }
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}

nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
</style>
