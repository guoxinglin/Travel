<template>
    <ul class="list">
      <li class="item"
          v-for="item of alphabets"
          :key="item"
          :ref="item"
          @click="handleLetterClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          >
          {{item}}</li>
    </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    alphabets () {
      const alphabets = []
      for (const obj in this.cities) {
        alphabets.push(obj)
      }
      return alphabets
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    addClass (el) {
      $(el).css({color: '#FFC125'})
      $(el).siblings().css({color: ''})
    },
    handleLetterClick (e) {
      let tar = e.srcElement || e.target
      this.addClass(tar)
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 74
          let index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.alphabets.length) {
            let tar = this.$refs[this.alphabets[index]][0]
            this.addClass(tar)
            this.$emit('change', this.alphabets[index])
          }
        })
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus"  scoped>
  @import '~styles/varibles.styl'
  .list
    display :flex
    flex-direction :column
    justify-content center
    position :absolute
    right :0
    top: 1.58rem
    bottom :0
    width :.4rem
    .item
      text-align :center
      line-height :.4rem
      color :$bgColor
</style>
