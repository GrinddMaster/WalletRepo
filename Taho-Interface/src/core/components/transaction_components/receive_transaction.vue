<script setup lang="ts">
import { ref } from 'vue'

const showTooltip = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)

function handleMouseMove(event: MouseEvent) {
  mouseX.value = event.clientX + 10
  mouseY.value = event.clientY + 10
}
</script>

<template>
  <div class="receive_box">
    <div class="receive_box"></div>
    <div
      class="hash-container2"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
      @mousemove="handleMouseMove"
    >
      <span>0x5c51b7af2533504eab84f7f23d21918660fbb78d</span>

      <div
        v-if="showTooltip"
        class="info-box2"
        :style="{ top: mouseY + 'px', left: mouseX + 'px' }"
      >
        Copy!
      </div>
    </div>
  </div>
</template>

<style>
.receive_box {
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  flex: none;
  width: auto;
}

.hash-container2 {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding-top: 20px;
  flex: none;
  width: auto;
  justify-content: center;
  align-items: center;
  position: relative;
}

.info-box2 {
  position: fixed;
  background-color: #333;
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  white-space: nowrap;
  font-size: 12px;
  pointer-events: none;
  z-index: 9999;
}
</style>
