<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'CityHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus"  scoped>
  @import '~styles/varibles.styl'
  .header
    position relative
    overflow hidden
    height : $headerHeight
    line-height : $headerHeight
    text-align : center
    color  #fff
    background: $bgColor
    font-size :.32rem
    .header-back
      position :absolute
      width :.64rem
      top:0
      left :0
      text-align : center
      font-size :.4rem
      color :#fff
</style>
