<template>
  <div class="recommend">
    <div class="swiper-container banners">
      <div class="swiper-wrapper" @touchstart="startSwiper" @touchmove="moveSwiper" @touchend="endSwiper">
        <div class="swiper-slide banner" ref="swiper" v-for="(banner,index) in banners" :key="index"><a :href="banner.linkUrl"><img class="pic" :src="banner.picUrl"/></a></div>
      </div>
    </div>
    <div class="rec-radio">
      <p class="rec-radio-p">电台</p>
      <div class="rec-radio-content">
        <div class="rec-radio-list" v-for="(radio,index) in radioList" :key="index">
          <a href="javascript:;">
            <div class="rec-radio-img"><img :src="radio.picUrl"><span></span></div>
            <p>{{ radio.Ftitle }}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="rec-song">
      <p class="rec-song-p">热门歌单</p>
      <div class="rec-song-content">
        <div class="rec-song-list" v-for="(song,index) in songList" :key="index">
          <a href="javascript:;">
            <div class="rec-song-img">
              <img :src="song.picUrl">
              <span class="play"></span>
              <div class="moods"><span></span>{{ song.accessnum }}</div>
            </div>
            <p>{{ song.songListDesc }}</p>
            <p>{{ song.songListAuthor }}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="rec-explain">
      <div class="rec-explain-pc">查看电脑版</div>
      <div class="rec-explain-logo"><img src="@/assets/img/logo_ch.svg"></div>
      <div class="rec-explain-copyright">
        <p>Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
        <p>联系电话：0755-86013388 QQ群：55209235</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getRecommend } from '@/api/recommend.js'
import { Bunner } from '@/assets/js/bunner.js'
// import 'swiper/dist/css/swiper.css'
// import Swiper from 'swiper'
export default {
  name: 'HelloWorld',
  data () {
    return {
      banners: [],
      radioList: [],
      songList: [],
      bunner1: null,
      clientNum: [0, 0, 0]
    }
  },
  created () {
    this.getRecommend()
  },
  mounted () {
    alert(1)
    setTimeout(() => {
      this.bunner1 = new Bunner(this.$refs.swiper, 10)
      this.bunner1.init()
      this.bunner1.run(-1)
    }, 500)
  },
  computed: {
  },
  methods: {
    startSwiper: function (e) {
      this.bunner1.stop()
      this.clientNum[0] = e.touches[0].clientX
      this.clientNum[2] = e.touches[0].clientX
    },
    moveSwiper: function (e) {
      console.log(this.clientNum)
      this.clientNum[1] = e.touches[0].clientX
      this.bunner1.drag(this.clientNum[1] - this.clientNum[0])
      this.clientNum[0] = e.touches[0].clientX
    },
    endSwiper: function (e) {
      this.bunner1.stop()
      if (e.view.innerWidth / 2 > Math.abs(this.clientNum[2] - this.clientNum[0])) {
        if (this.clientNum[2] - this.clientNum[0] > 0) {
          this.bunner1.run(-1)
        } else {
          this.bunner1.run(1)
        }
      } else {
        this.bunner1.run(-1)
      }
    },
    getRecommend: function () {
      // let _this = this
      getRecommend().then(res => {
        if (res.code === 0) {
          console.log(res)
          this.banners = res.data.slider
          this.radioList = res.data.radioList
          this.songList = res.data.songList
          for (let i = 0; i < this.songList.length; i++) {
            if (this.songList[i].accessnum >= 10000 && this.songList[i].accessnum < 100000000) {
              this.songList[i].accessnum = Math.floor(this.songList[i].accessnum / 1000) / 10 + '万'
            } else if (this.songList[i].accessnum >= 100000000) {
              this.songList[i].accessnum = Math.floor(this.songList[i].accessnum / 10000000) / 10 + '亿'
            }
          }
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .swiper-wrapper{
    width: 100%;
    position: relative;
    height: 2.4rem;
    .swiper-slide {
      width: 100%;
      position: absolute;
    }
    a {
      display: block;
    }
    img {
      display: block;
    }
  }
  .recommend{
    font-size: 0.26rem;
  }
  .banner{
    width: 100%;
    .pic{
      width: 100%;
    }
  }
  .rec-radio{
    padding: .1rem;
    .rec-radio-p{
      font-size: 18px;
      height: .4rem;
      padding: .2rem .1rem;
    }
    .rec-radio-content{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .rec-radio-list{
      width: 50%;
      box-sizing: border-box;
      padding: .1rem;
      img{
        width: 100%;
      }
      a{
        display: block;
        color: #111;
        font-size: 16px;
        .rec-radio-img{
          position: relative;
        }
        span{
          display: block;
          width: .5rem;
          height: .5rem;
          position: absolute;
          right: .2rem;
          bottom: .2rem;
          background-image: url('../../../assets/img/list_sprite.png');
          background-size: 100%;
        }
        p{
          text-indent: .2rem;
        }
      }
    }
  }

  .rec-song{
    padding: .1rem;
    .rec-song-p{
      font-size: 18px;
      height: .4rem;
      padding: .2rem .1rem;
    }
    .rec-song-content{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .rec-song-list{
      width: 50%;
      box-sizing: border-box;
      padding: .1rem;
      img{
        width: 100%;
      }
      a{
        display: block;
        color: #111;
        font-size: 16px;
        flex-wrap: wrap;
        .rec-song-img{
          position: relative;
        }
        .play{
          display: block;
          width: .5rem;
          height: .5rem;
          position: absolute;
          right: .2rem;
          bottom: .2rem;
          background-image: url('../../../assets/img/list_sprite.png');
          background-size: 100%;
        }
        .moods{
          color: #fff;
          padding-left: .35rem;
          height: .5rem;
          position: absolute;
          left: .2rem;
          bottom: .2rem;
          span{
            color: #fff;
            display: block;
            width: .3rem;
            height: .3rem;
            position: absolute;
            left: 0;
            top: .05rem;
            background-image: url('../../../assets/img/list_sprite.png');
            background-size: .7rem;
            background-position: bottom left;
            background-repeat: no-repeat;
          }
        }
        p{
          text-indent: .2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .rec-explain{
    padding: .3rem 0;
    text-align: center;
    .rec-explain-pc{
      font-size: 18px;
      color: #111;
    }
    .rec-explain-logo{
      padding: .2rem;
      img{
        width: 2rem;
      }
    }
    .rec-explain-copyright{
      padding: .1rem 0;
      font-size: 12px;
      color: rgba(0,0,0,.6);
    }
  }
</style>
