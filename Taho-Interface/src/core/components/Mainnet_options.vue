<script setup>
import { ref } from 'vue'
import { optionList } from '../../modules/MainNet_List/models/main_net_options.js'

var options = ref(optionList)
var isOpen = ref(false)
var selected = ref(`${options.value[0].icon} ${options.value[0].name}`)

function toggleDropDown() {
  isOpen.value = !isOpen.value
}
function selectOption(option) {
  selected.value = `${option.icon} ${option.name}`
  isOpen.value = false
}
</script>

<template>
  <div class="dropdown">
    <button @click="toggleDropDown" class="dropdown-btn">
      {{ selected }}
    </button>

    <ul v-if="isOpen" class="dropdown-list">
      <li v-for="option in options" :key="option.name" @click="selectOption(option)">
        {{ option.icon }} {{ option.name }}
      </li>
    </ul>
  </div>
</template>
>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  border: 1px solid #aaa;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  background: #fff;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  margin: 4px 0 0;
  padding: 0;
  border: 1px solid #aaa;
  border-radius: 8px;
  background: #fff;
  z-index: 100;
}

.dropdown-list li {
  padding: 8px 12px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background: #f0f0f0;
}
</style>
>
