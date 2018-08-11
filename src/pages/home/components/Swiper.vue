<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
        <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!--<div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>轮播箭头和滚动条去掉-->
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20180716_wap_11043.jpg'
      }]
    }
  }
}
</script>
<style lang='stylus' scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background : #fff
    .wrapper
        width :100%
        height :0
        padding-bottom :24.53%
        overflow :hidden
        background :#eee
        .swiper-img
            width :100%
</style>
