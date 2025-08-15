<!-- TODO:
Build the base skeleton to the Project.
Add styling to all the buttons from outside style files.
-->

<script setup>
import { ref } from 'vue'
import { Transactions } from '../../modules/Transaction_List/models/Transaction.js'

var current_balance = ref('PlaceHolder for Current Balance amount')
var wallet_token = ref('Token string')
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
        <div class="box">
          <p><u>Current balance</u></p>
          <div id="Icon&Type" class="icon-type">
            <!-- Here should add Components to the Balance div-->
            <div class="box">Icon</div>
            <div class="box">Icon type</div>
          </div>
          <br />
          <p :id="'current_balance'">{{ current_balance }}</p>
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
            <button class="full-button">Begin Transaction</button>
          </div>
        </div>
      </div>
    </div>

    <br />

    <div id="transaction_list" class="box">
      <div class="box center-box">
        <p><u>Transaction History</u></p>
        <div
          class="box"
          style="width: 50%; margin-bottom: 12px; border-radius: 25px"
          v-for="transaction in transactionList"
          :key="transaction.hash"
        >
          <p>
            <strong>Hash:</strong> {{ transaction.hash }}<br />
            <strong>Amount:</strong> {{ transaction.amount }}
          </p>
        </div>
        <button style="border-radius: 20px" @click="toggleOverlay">expand</button>
        <div v-if="historyOverlay" class="history_screen">
          <div class="history_content">
            <h3>Transaction History</h3>
            <div
              class="box"
              style="width: 50%; margin-bottom: 12px; border-radius: 25px"
              v-for="transaction in transactionList"
              :key="transaction.hash"
            >
              <p>
                <strong>Hash:</strong> {{ transaction.hash }}<br />
                <strong>Amount:</strong> {{ transaction.amount }}
              </p>
            </div>
            <button @click="toggleOverlay">Close</button>
          </div>
        </div>
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
</style>
