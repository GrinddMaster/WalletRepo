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
      <div  style="display: flex; flex-direction: row; flex: 1">
        <div style="width: 90%">
          <RecycleScroller
            :items="transactions"
            :item-size="105"
            key-field="hash"
            style="max-height: 100%; overflow-y: auto; max-width: 100%; flex: 1"
          >
            <template #default="{ item }">
              <div class="box" style="margin-bottom: 12px; border-radius: 25px">
                <p>
                  <strong>Hash:</strong> {{ item.hash }}<br />
                  <strong>Amount:</strong>{{ item.amount }}
                </p>
              </div>
            </template>
          </RecycleScroller>
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
