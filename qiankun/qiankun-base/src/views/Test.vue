<template>
  <div class="wrap">
    <div class="content" v-for="i in 5" :key="i">
      <img src="../assets/logo.png" style="width:100px;height:100px;border-radius:20px;overflow:hidden;">
      <span>标题</span>
    </div>
  </div>
</template>
<style>
.wrap{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
