<template>
  <div class="home">
    <top class="top"/>
    <contents class="contents"/>
    <bottom class="bottom"/>
  </div>
</template>

<script>
import top from './top'
import contents from './contents'
import bottom from './bottom'
export default {
  name: 'homePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    top, contents, bottom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .contents{
      overflow: hidden;
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .bottom{
      background: rgba(255, 255 ,255 ,.3);
      height: 1.3rem;
    }
  }
</style>
