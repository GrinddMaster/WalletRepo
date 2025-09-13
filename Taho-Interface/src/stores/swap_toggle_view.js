import { defineStore } from 'pinia'
import { ref } from 'vue'
import { optionList as Mainnets } from '@/modules/MainNet_List/models/main_net_options.js'

export var netOptions = defineStore('netOptions', () => {
  var nets = ref(Mainnets)
  var selected_net = ref(`${nets.value[0].icon} ${nets.value[0].name}`)
  var selected_net_recieve = ref(`${nets.value[0].icon} ${nets.value[0].name}`)

  function netSelection(net) {
    selected_net.value = net
  }
  function netSelectionRecieve(net) {
    selected_net_recieve.value = net
  }
  return { nets, selected_net, netSelection, netSelectionRecieve, selected_net_recieve }
})
