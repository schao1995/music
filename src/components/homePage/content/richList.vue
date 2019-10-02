<template>
  <div class="rich">rich</div>
</template>

<script>
import { getRich } from '@/api/search.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.getRich()
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    getRich: function () {
      // let _this = this
      getRich().then(res => {
        if (res.code === 0) {
          console.log(res)
        }
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .top{
   background: #fff;
 }
</style>
