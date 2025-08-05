<template>
  <button @click="hundleClick">{{ props.message }}</button>
</template>

<script setup lang="ts">
  import {defineProps,defineEmits} from 'vue';

  interface Props {
    message: string;
  }

  const props = defineProps<Props>();

  const emits = defineEmits<{(e: 'my-click',value:number):void;}>();

  const hundleClick = () => {
    emits('my-click',5);
  }
</script>

<style scoped>
  button {
    padding: 10px 20px;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>