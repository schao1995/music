<template>
  <div class="bottom-box">
    <div class="down">安装QQ音乐 发现更多精彩</div>
  </div>
</template>

<script>
export default {
  name: 'bottom',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom-box {
  display: flex;
  justify-content: center;
}
.down {
  padding: .1rem;
  height: .4rem;
  border-radius: .4rem;
  background: #30c27c;
  color: #fff;
  font-size: 14px;
  margin: auto;
}
</style>
