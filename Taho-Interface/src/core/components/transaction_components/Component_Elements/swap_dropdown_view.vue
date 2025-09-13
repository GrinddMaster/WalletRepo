<script setup>
import { RecycleScroller } from 'vue3-virtual-scroller'
import { ref } from 'vue'
import { netOptions } from '@/stores/swap_toggle_view.js'

const store = netOptions()
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="ddw" style="display: flex; max-width: 80px; max-height: 80px">
    <RecycleScroller :items="store.nets" :item-size="50" key-field="name" class="dd">
      <template #default="{ item }">
        <div
          class="option"
          @click="
            props.type == 'send'
              ? store.netSelection(`${item.icon} ${item.name}`)
              : store.netSelectionRecieve(`${item.icon} ${item.name}`)
          "
        >
          <span>{{ item.icon }} {{ item.name }}</span>
        </div>
      </template>
    </RecycleScroller>
  </div>
  <div>
    <span>{{ store.selected_net.value }}</span
    ><
  </div>
</template>
<style lang="css">
.ddw {
  position: relative;
  width: 180px;
}
.dd {
  position: absolute;
  padding-top: 10px;
  padding-left: 30%;
  bottom: 50%; /* below send_field */
  left: 50%; /* center align */
  transform: translateX(-50%) translateY(50%);
  width: 180%;
  max-height: 200px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: auto;
  z-index: 9999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.option {
  cursor: pointer;
  padding: 8px 12px;
}
.option:hover {
  background-color: #f0f0f0;
}

.icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
</style>
