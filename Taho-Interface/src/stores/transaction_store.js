import { ref, computed } from 'vue'
import { Transactions } from '../modules/Transaction_List/models/Transaction.js'
import { defineStore } from 'pinia'

export const useTransactionStore = defineStore('transactionStore', () => {
  const transactions = ref(Transactions) // your initial data

  function addTransaction(tx) {
    transactions.value.push(tx)
  }

  const limitTransactions = computed(() => {
    return transactions.value.length > 5
      ? [...transactions.value.slice(0, 5), { id: 'dots', placeholder: true }]
      : transactions.value
  })

  return { transactions, addTransaction, limitTransactions }
})
