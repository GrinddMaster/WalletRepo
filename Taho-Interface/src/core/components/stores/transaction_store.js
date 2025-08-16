import { ref } from 'vue'
import { Transactions } from '../../../modules/Transaction_List/models/Transaction.js'
import { defineStore } from 'pinia'

export const useTransactionStore = defineStore('transactionStore', () => {
  const transactions = ref(Transactions) // your initial data

  function addTransaction(tx) {
    transactions.value.push(tx)
  }
  function checkSize() {
    if (transactions.length > 5) {
      //Do something limit the page rendering
    }
  }

  return { transactions, addTransaction, checkSize }
})
