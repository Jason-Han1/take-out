<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
    name: "App",
    components: {
      FooterGuide,
    },
    mounted () {
      //异步获取登录信息
      this.$store.dispatch('getUserInfo')
      //异步获取商家信息
      this.$store.dispatch('getShopInfo')
    },
    created () {
      //异步获取address
      this.$store.dispatch('getAddress')

    /*  //异步获取用户信息
      this.$store.dispatch('getUserInfo')*/
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative

</style>
