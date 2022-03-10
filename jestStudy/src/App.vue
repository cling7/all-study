<template>
  <div id="app">
    <div class="list">
      <div class="item" v-for="i in 5" :key="i">
        <img src="./assets/头像可乐.jpg">
        <span>运镖侠</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.item{
  display: flex;
  flex-direction: column;
}
.item img{
  width:120px;
  height:120px;
  background-size: cover;
}
</style>
