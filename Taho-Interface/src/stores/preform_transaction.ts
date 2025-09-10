import { defineStore } from "pinia";
import { ref } from 'vue';

export const preform_Transaction = defineStore('currTransactionView', () => {
  const currentView = ref<'send' | 'swap' | 'receive'>('send')

  function switchView(view: 'send' | 'swap' | 'receive') {
    currentView.value = view
  }

  return { currentView, switchView }
})
