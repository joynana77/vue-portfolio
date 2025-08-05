<template>
  <v-container>
    <v-card width="600px" class="pa-4">
      <v-card-title>郵便番号検索</v-card-title>
      <v-card-text>
        <v-text-field v-model.trim="addressStore.zipCode"
        label="郵便番号(ハイフン不要)"
        variant="filled"
        >
        </v-text-field>
      <v-card-actions>
        <v-btn 
          @click="addressStore.getAddress()"
          color="primary"
          variant="elevated"
          block
          class="mb-8"
        >
          検索
        </v-btn>
      </v-card-actions>

        <p v-if="addressStore.error" class="text=left message-text error-text">
          {{ addressStore.error }}
        </p>
        <p v-if="addressStore.address" class="text-left message-text">
          住所：{{ addressStore.address }}
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
  // import { ref, onMounted } from 'vue';
  import { useAddressStore } from '../stores/zipcode'

  const addressStore =  useAddressStore();

</script>

<style scoped>
  .message-text {
    font-size: 1.5rem;
  }
  .error-text {
    color: red;
  }
</style>