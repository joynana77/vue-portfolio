<template>
  <div>
   <p>郵便番号</p>
   <input v-model.trim="addressStore.zipCode">
   <button @click="addressStore.getAddress()">検索</button>
   <p>住所：{{ addressStore.address }}</p>
  </div>
</template>

<script setup lang="ts">
  // import { ref, onMounted } from 'vue';
  import { useAddressStore } from '../stores/zipcode'

  const addressStore =  useAddressStore();

</script>