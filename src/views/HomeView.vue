<template>
  <div>
    <h1>ホーム画面です</h1>
    <p>ホームでのカウンターの値：{{counterStore.count}}</p>
    <input type="number" v-model="amount" />
    <button @click="counterStore.increment(amount)">加算</button>
    <button @click="counterStore.reset">リセット</button>
  </div>
</template>

<script setup lang="ts">
  import { useCounterStore } from '../stores/counter'
  import { ref } from 'vue'

  const amount = ref<number>(0);
  const counterStore =  useCounterStore();
</script>