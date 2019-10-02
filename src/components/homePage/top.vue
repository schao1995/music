<template>
  <div class="top">
    <img src="@/assets/img/logo_ch.svg">
    <a href="javascript:;">下载APP</a>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 .top {
   background: #fff;
   height: 1.4rem;
   display: flex;
   justify-content: space-between;
   img {
      width: 2rem;
      display: block;
      margin: auto .2rem;
   }
   a{
    display: block;
    color: #000;
    font-size: 14px;
    text-decoration: none;
    padding: 0 .1rem;
    margin: auto .2rem;
    border: 1px solid #000;
    border-radius: .4rem;
  }
 }
</style>
