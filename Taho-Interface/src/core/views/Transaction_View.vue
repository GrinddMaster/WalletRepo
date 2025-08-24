<script setup lang="ts">
import { ref } from 'vue'

const overlay = ref(false)

function closeOverlay() {
  overlay.value = false
}

function toggleOverlay() {
  overlay.value = !overlay.value
}
</script>
<template>
  <div v-if="overlay" class="transaction_screen" @click="closeOverlay">
    <div class="transaction_content" @click.stop>
      <div style="display: flex; flex: 1; height: 95%">
        <div class="barbox transactionBar">
          <div class="tabItem">
            <img src="@/assets/images/money.png" alt="Money" class="Bar-Icons" />
          </div>
          <div class="tabItem">
            <img src="@/assets/images/currency-exchange.png" alt="Exchange" class="Bar-Icons" />
          </div>
          <div class="tabItem">
            <img src="@/assets/images/receive-money.png" alt="Recieve" class="Bar-Icons" />
          </div>
        </div>
        <div class="box" style="align-items: center; justify-content: center"></div>
      </div>
    </div>
  </div>
  <button class="full-button" style="cursor: pointer" @click="toggleOverlay">
    Preform Transactions
  </button>
</template>
<style>
.transaction_screen {
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

.transaction_content {
  background: white;
  padding: 20px;
  width: 65%;
  height: 90%;
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
.round-Icon {
  display: flex;
  border-radius: 100%;
  border: 1px solid black;
  min-width: 20%;
  min-height: 20%;
}
.barbox {
  display: flex;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  min-height: 60px;
}
.full-button {
  flex: 1;
  border: 1px;
  border-radius: 40px;
  width: 100%;
  height: 100%;
}
.transactionBar {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 20%;
}
.tabItem {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  margin: 10px auto;
}
.Bar-Icons {
  display: block;
  margin: 0 auto 0px auto;
  max-width: 50%;
  max-height: 50%;
  object-fit: contain;
}
</style>
