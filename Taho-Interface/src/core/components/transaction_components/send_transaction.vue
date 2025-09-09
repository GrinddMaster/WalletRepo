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
<style>
.send_box {
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  min-height: 60px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 18px;
  flex: 1;
}
#SendIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50%;
  margin: 10px auto;
}
#send_field {
  border: 1px solid black;
  width: 30%;
  justify-content: center;
  align-items: center;
  display: flex;
}
#amount-input-box {
  height: 90%;
  width: 99%;
  border: none;
  text-align: right;
  font-size: 100%;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
}
#hash-input-box {
  border: none;
  font-size: 100%;
  overflow: hidden;
  flex: 1;
  padding: 0 8px;
  box-sizing: border-box;
}
input:focus {
  outline: none;
  box-shadow: 0 0 3px #4caf50;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
#send_muny {
  display: block;
  margin: 0 auto 0px auto;
  transform: scaleY(-1);
  max-width: 17%;
  max-height: 17%;
  cursor: pointer;
  object-fit: contain;
}
</style>
