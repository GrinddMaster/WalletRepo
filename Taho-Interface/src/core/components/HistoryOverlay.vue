<script setup>
import { RecycleScroller } from 'vue3-virtual-scroller'

const props = defineProps({
  transactions: { type: Array, required: true },
  visible: { type: Boolean, required: true, default: false },
})

const emit = defineEmits(['close'])
function closeOverlay() {
  emit('close')
}
</script>

<template>
  <div v-if="visible" class="history_screen" @click="closeOverlay">
    <div class="history_content" @click.stop>
      <div class="box" style="display: flex; flex-direction: row">
        <div style="width: 50%">
          <RecycleScroller
            :items="transactions"
            :item-size="105"
            key-field="hash"
            style="max-height: 100%; overflow-y: auto"
          >
            <template #default="{ item }">
              <div class="box" style="margin-bottom: 12px; border-radius: 25px">
                <p>
                  <strong>Hash:</strong> {{ item.hash }}<br />
                  <strong>Amount:</strong> {{ item.amount }}
                </p>
              </div>
            </template>
          </RecycleScroller>

          <button @click="emit('close')" style="border-radius: 20px">Close</button>
        </div>

        <div class="" style="display: flex; align-items: center; justify-content: center; flex: 1">
          <p>Icon</p>
        </div>
      </div>
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
</style>
