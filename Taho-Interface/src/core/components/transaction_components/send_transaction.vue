<script lang="ts"></script>
<template>
  <div class="send_box" style="flex-direction: column">
    <div class="send_box">
      <div id="send_field">
        <span>Icon Text</span>
      </div>
      <div style="width: 70%">
        <input
          type="number"
          step="0.01"
          placeholder="0.0"
          id="amount-input-box"
          min="0.0"
          @keydown="
            (e) => {
              if (e.key === '-') e.preventDefault()
            }
          "
        />
      </div>
    </div>
    <div id="SendIcon" style="margin-left: 23%">
      <img id="send_muny" src="@/assets/images/send_money.png" />
    </div>
    <div class="send_box">
      <input id="hash-input-box" type="text" placeholder="0x..." />
    </div>
  </div>
</template>
<style src="@/assets/styles/common.css"></style>
