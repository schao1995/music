<template>
  <div class="search">
    <div class="search-input">
      <div class="search-input-box">
        <input type="text" v-model="searchContent" placeholder="搜索歌曲，歌单，专辑" />
        <span class="search-input-clear"></span>
      </div>
      <div class="search-input-close">取消</div>
    </div>
    <div class="hotkey">
      <div class="special"><a :href="data.special_url"> {{ data.special_key }} </a></div>
      <div class="" v-for="(key, index) in data.hotkey" @click="createKey(key.k)"  :key="index"> {{ key.k }} </div>
    </div>
  </div>
</template>

<script>
import { getRich } from '@/api/search.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: [],
      searchContent: ''
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
          console.log(res.data)
          this.data = res.data
        }
      })
    },
    createKey: function (val) {
      this.searchContent = val
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 .top{
   background: #fff;
 }
 .search{
  .search-input{
    padding: .2rem;
    background: #fafafa;
    height: .7rem;
    font-size: 14px;
    display: flex;
    .search-input-box{
      display: flex;
      flex: 1;
      border-radius: .1rem;
      overflow: hidden;
      padding:.1rem .1rem .1rem .8rem;
      background-color: #fff;
      background-image: url('../../../assets/img/search.png');
      background-size: .4rem;
      background-position: .25rem .15rem;
      background-repeat: no-repeat;
      input{
        outline: none;
        flex: 1;
        width: 100%;
        height: 100%;
        border: 0;
        padding: 0;
        color: rgba(0,0,0,.3);
      }
      input::-webkit-input-placeholder{
        color: rgba(0,0,0,.3);
      }
      .search-input-clear{
        margin: .1rem;
        position: relative;
        display: block;
        border-radius: 50%;
        width: .3rem;
        height: .3rem;
        background: #b1b1b1;
      }
      .search-input-clear:after {
        width: 2px;
        height: 10px;
        margin-left: -1px;
        margin-top: -5px;
      }
      .search-input-clear:after, .search-input-clear:before {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        border-radius: 8px;
        background: #fff;
        -webkit-transform: rotate(45deg);
      }
      .search-input-clear:before {
        width: 10px;
        height: 2px;
        margin-left: -5px;
        margin-top: -1px;
      }
    }
    .search-input-close{
      line-height: .7rem;
      padding: 0 .2rem;
      color: #555;
    }
  }
  .hotkey{
    padding: .2rem;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    div{
      border-radius: .4rem;
      border: 1px solid #111;
      color: #111;
      padding: .1rem .2rem;
      margin: .1rem;
    }
    .special{
      padding: 0;
      a{
        color: red;
        display: block;
        padding: .1rem .2rem;
      }
      border: 1px solid red;
    }
  }
 }
</style>
