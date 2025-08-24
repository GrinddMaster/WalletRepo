<script setup>
import { useTransactionStore } from '@/stores/transaction_store.js'

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
      style="text-align: center; font-weight: bold; cursor: pointer"
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

<style src="@/assets/styles/Box.css"></style>
