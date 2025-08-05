<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/zipcode">ZipCode</router-link>
      </nav>
    </header>

    <main>
      <!-- <p>カウンターの値： {{ counterStore.count }}</p>
      <button @click="counterStore.increment">カウントアップ</button> -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { useCounterStore} from './stores/counter';

  const counterStore = useCounterStore();
</script>

<style scoped>

</style>
