<!-- TODO:
Build the base skeleton to the Project.
Add styling to all the buttons from outside style files.
-->

<script setup>
import { ref } from 'vue'
import { Transactions } from '../../modules/Transaction_List/models/Transaction.js'
import HistoryOverlay from '../components/HistoryOverlay.vue'
import TransactionList from '../components/TransactionList.vue'
import Mainnetoptions from '../components/Mainnet_options.vue'

var current_balance = ref('20.40$')
var wallet_token = ref('0x5c51b7af2533504eab84f7f23d21918660fbb78d')
const transactionList = ref(Transactions)
const historyOverlay = ref(false)

function toggleOverlay() {
  historyOverlay.value = !historyOverlay.value
}
</script>
<template>
  <div>
    <!-- Main div-->
    <div style="display: flex; gap: 10px">
      <div id="balance" class="box center-box">
        <!-- Balance Div -->
        <div class="box" style="width: 30%">
          <p style="text-align: center"><u>Total account balance</u></p>
          <div style="display: flex">
            <Mainnetoptions></Mainnetoptions>
          </div>
          <div id="Icon&Type" class="icon-type">
            <!-- Here should add Components to the Balance div-->
            <div class="box">Icon</div>
            <div class="box">
              <p :id="current_balance">{{ current_balance }}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="preform_transaction" class="box center-box">
        <!-- Transaction Div-->
        <div class="box center-box" style="width: 80%">
          <div>
            <span :id="'wallet_token'">{{ wallet_token }} - </span>
            <button id="copy_wallet_token" style="border-radius: 20px; border: 1px">Copy</button>
          </div>
          <br />
          <div style="display: flex; min-height: 40px; border-radius: 20px">
            <button class="full-button">Preform Transactions</button>
          </div>
        </div>
      </div>
    </div>

    <br />

    <div class="box">
      <div class="box center-box">
        <TransactionList @expand="toggleOverlay"> </TransactionList>
        <HistoryOverlay
          :visible="historyOverlay"
          :transactions="transactionList"
          @close="toggleOverlay"
        >
        </HistoryOverlay>
      </div>
    </div>
  </div>
</template>

<!-- Contains the styles for the divs only -->
<style scoped>
.box {
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  min-height: 60px;
  flex: 1;
}
.center-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.full-button {
  flex: 1;
  border: 1px;
  border-radius: 40px;
  width: 100%;
  height: 100%;
}
.icon-type {
  display: flex;
  gap: 15px;
  width: 70%;
  align-items: center;
}
</style>
