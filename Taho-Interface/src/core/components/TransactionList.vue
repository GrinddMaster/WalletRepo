<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  transaction_list: { type: Array, required: true },
})
</script>

<template>
  <p><u>Transaction History</u></p>
  <div
    class="box"
    style="width: 50%; margin-bottom: 12px; border-radius: 25px"
    v-for="transaction in transaction_list"
    :key="transaction.hash"
  >
    <p>
      <strong>Hash:</strong> {{ transaction.hash }}<br />
      <strong>Amount:</strong> {{ transaction.amount }}
    </p>
  </div>
</template>

<style>
.box {
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  min-height: 60px;
  flex: 1;
}
</style>
