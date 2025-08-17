<script setup>
import { useTransactionStore } from '../../stores/transaction_store.js'

const store = useTransactionStore()
</script>

<template>
  <p><u>Transaction History</u></p>
  <div
    class="box"
    style="width: 50%; margin-bottom: 12px; border-radius: 25px"
    v-for="transaction in store.limitTransactions"
    :key="transaction.hash"
  >
    <h2
      v-if="transaction.placeholder"
      style="text-align: center; font-weight: bold"
      @click="$emit('expand')"
    >
      ...
    </h2>
    <p v-else>
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
