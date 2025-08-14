<!-- TODO:
Build the base skeleton to the Project.
Add styling to all the buttons from outside style files.
-->

<script setup>
import { ref } from 'vue'
import { Transactions } from '../../modules/Transaction_List/models/Transaction.js'

var current_balance = ref('PlaceHolder for Current Balance')
var wallet_token = ref('Token string')
const transactionList = ref(Transactions)
</script>
<template>
  <div>
    <!-- Main div-->
    <div style="display: flex; gap: 10px">
      <div id="balance" class="box center-box">
        <!-- Balance Div -->
        <div class="box">
          <div id="Icon&Type" class="box icon-type">
            <!-- Here should add Components to the Balance div-->
            <div class="box">Icon</div>
            <div class="box">Icon type</div>
          </div>
          <br />
          <p :id="'${current_balance}'">{{ current_balance }}</p>
        </div>
      </div>
      <div id="preform_transaction" class="box center-box">
        <!-- Transaction Div-->
        <div class="box center-box" style="width: 80%">
          <div>
            <span :id="'${wallet_token}'">{{ wallet_token }} - </span>
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
      <!-- List Div -->
      <!-- TODO:
    - Import Transaction Objects from the Taho Repo
    - Connect them to Dynamic elements in this list
    - Display the Transaction Objects on screen-->
      <div
        class="box"
        style="width: 50%"
        v-for="transaction in transactionList"
        :key="transaction.hash"
      >
        <p>
          <strong>Hash:</strong> {{ transaction.hash }}<br />
          <strong>Amount:</strong> {{ transaction.amount }}
        </p>
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
  width: 50%;
  align-items: center;
}
</style>
