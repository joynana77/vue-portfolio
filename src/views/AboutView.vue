<template>
  <div>
    <h1>About画面です</h1>
    <p>Aboutでのカウンターの値：{{counterStore.count}}</p>
    <button @click="() => counterStore.increment(1)">カウントアップ</button>
  </div>
</template>

<script setup lang="ts">
  import { useCounterStore } from '../stores/counter';

  const counterStore = useCounterStore();
</script>