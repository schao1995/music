<template>
  <div class="con">
    <div class="link">
      <div class="nav" ref="navLink">
        <div class="current nav-link">
          <router-link @click.native="showSubmenu(0)" to="recommend">推荐</router-link>
        </div>
        <div class="nav-link">
          <router-link @click.native="showSubmenu(1)" to="richList">排行榜</router-link>
        </div>
        <div class="nav-link">
          <router-link @click.native="showSubmenu(2)" to="search">搜索</router-link>
        </div>
      </div>
    </div>
    <!-- <div class="search">
      <router-link to="home" class="searchLink"><span class="icon"></span>搜索</router-link>
    </div> -->
    <div class="show">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contents',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showSubmenu (index) {
      for (let i = 0; i < this.$refs.navLink.children.length; i++) {
        if (index === i) {
          this.$refs.navLink.children[i].className = 'current nav-link'
        } else {
          this.$refs.navLink.children[i].className = 'nav-link'
        }
      }
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
  .show{
  }
  .nav{
    background: #fff;
    display: flex;
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.3rem;
    text-align: center;
    justify-content: space-between;
    div{
      flex: 1;
    }
    a{
      display: block;
      width: 100%;
      height: 100%;
      color: rgba(0, 0, 0, .6);
    }
  }
  .link {
    padding-top: .1rem;
    background: #fafafa;
  }
  .current {
    position: relative;
  }
  .current:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #31c27c;
  }
  /*.search{
  height: 0.6rem;
  .searchLink{
   display: block;
   font-size: 0.22rem;
   height: 0.4rem;
   line-height: 0.4rem;
   text-align: center;
   margin: 0.1rem 0.1rem;
   background: #2daf71;
  }
  }*/
</style>
