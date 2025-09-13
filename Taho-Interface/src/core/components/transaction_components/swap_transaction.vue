<script setup>
import { ref } from 'vue'
import SwapDropView from './Component_Elements/swap_dropdown_view.vue'
import { netOptions } from '@/stores/swap_toggle_view'

var toggleSend = ref(false)
var toggleRecieve = ref(false)
const store = netOptions()

function toggleDropDown(type) {
  if (type === dropDownType.SEND) {
    toggleSend.value = !toggleSend.value
  } else {
    toggleRecieve.value = !toggleRecieve.value
  }
}

var dropDownType = {
  SEND: 0,
  RECIEVE: 1,
}
</script>
<template>
  <div class="send_box" style="flex-direction: column">
    <div class="send_box">
      <div id="send_field" @click="toggleDropDown(dropDownType.SEND)">
        <SwapDropView v-if="toggleSend" @close="toggleDropDown(dropDownType.SEND)" type="send" />
        <span>{{ store.selected_net }}</span>
      </div>
      <div style="width: 70%">
        <input
          type="number"
          step="0.01"
          placeholder="0.0"
          id="amount-input-box"
          min="0.0"
          @keydown="
            (e) => {
              if (e.key === '-') e.preventDefault()
            }
          "
        />
      </div>
    </div>
    <div id="SendIcon" style="margin-left: 23%">
      <img id="send_muny" src="@/assets/images/swap.png" />
    </div>
    <div class="send_box">
      <div id="send_field" @click="toggleDropDown(dropDownType.RECIEVE)">
        <SwapDropView
          v-if="toggleRecieve"
          @close="toggleDropDown(dropDownType.RECIEVE)"
          type="recieve"
        />
        <span>{{ store.selected_net_recieve }}</span>
      </div>
      <div style="width: 70%">
        <input
          type="number"
          step="0.01"
          placeholder="0.0"
          id="amount-input-box"
          min="0.0"
          @keydown="
            (e) => {
              if (e.key === '-') e.preventDefault()
            }
          "
        />
      </div>
    </div>
  </div>
</template>
<style src="@/assets/styles/prefrom_transaction/swap_view.css"></style>
