<template>
  <div class="hello-world">
    <h1>{{ props.message }}</h1>
    <h2>Hello,World!</h2>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

// definePropsを使って受け取りたいPropsを定義
const props = defineProps({
  // messageという名前のPropsを定義。型はStringで必須とする
  message: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.hello-world {
  color: #42b883;
  font-family: sans-serif;
  text-align: center;
}
</style>