<script setup>
const props = defineProps({
  transactions: { type: Array, required: true },
  visible: { type: Boolean, required: true, default: false },
})

const emit = defineEmits(['close'])
</script>

<template>
  <div v-if="visible" class="history_screen">
    <div class="history_content">
      <h3>Transaction History</h3>
      <div
        class="box"
        style="width: 50%; margin-bottom: 12px; border-radius: 25px"
        v-for="transaction in transactions"
        :key="transaction.hash"
      >
        <p>
          <strong>Hash:</strong> {{ transaction.hash }}<br />
          <strong>Amount:</strong> {{ transaction.amount }}
        </p>
      </div>
      <button @click="emit('close')" style="border-radius: 20px">Close</button>
    </div>
  </div>
</template>

<style>
.history_screen {
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

.history_content {
  background: white;
  padding: 20px;
  width: 30%;
  height: 60%;
  border-radius: 12px;
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
</style>
