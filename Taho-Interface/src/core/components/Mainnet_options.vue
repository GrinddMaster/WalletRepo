<script setup>
import { ref } from 'vue'
import { optionList } from '../../modules/MainNet_List/models/main_net_options.js'
import { RecycleScroller } from 'vue3-virtual-scroller'

const options = ref(optionList)
var isOpen = ref(false)
var selected = ref(`${options.value[0].icon} ${options.value[0].name}`)

function toggleOverlay() {
  isOpen.value = !isOpen.value
}
function selectOption(option) {
  selected.value = `${option.icon} ${option.name}`
  isOpen.value = false
}
</script>

<template>
  <div class="dropdown">
    <button style="border-radius: 20px; border: 0px; min-height: 25px" @click="toggleOverlay">
      {{ selected }}
    </button>
  </div>
  <div v-if="isOpen" class="net_screen" @click="toggleOverlay">
    <div class="net_content" @click.stop>
      <div style="display: flex; flex-direction: row; flex: 1">
        <div style="width: 90%">
          <RecycleScroller
            :items="options"
            :item-size="105"
            key-field="name"
            style="max-height: 100%; overflow-y: auto; max-width: 100%; flex: 1"
          >
            <template #default="{ item }">
              <div style="margin-bottom: 12px; border-radius: 25px; display: flex">
                <button class="full-button" @click="selectOption(item)">
                  {{ item.icon }} {{ item.name }}
                </button>
              </div>
            </template>
          </RecycleScroller>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  width: 190px;
}

.dropdown-btn {
  border: 1px solid #aaa;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  background: #fff;
}

.net_screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.net_content {
  background: white;
  padding: 20px;
  width: 30%;
  height: 60%;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-height: 80vh;
  overflow-y: auto;
}

.box {
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  min-height: 60px;
  flex: 1;
}
.full-button {
  flex: 1;
  border: 0px;
  border-radius: 40px;
  width: 100%;
  height: 80px;
}
</style>
>
