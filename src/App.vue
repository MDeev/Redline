<template>
  <div id="redline">
    <Navbar />
    <router-view/>
    <Footer />
    <Loader />
    <ScrollTop />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import ScrollTop from '@/components/ScrollTop'

export default {
  components: {
    Navbar,
    Footer,
    Loader,
    ScrollTop
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/style.scss";

  #redline{
    height: 100%;
    min-height: 100vh;
    @include pb(75);

    .loading{
      text-align: center;
      @include fontSize(22);
      @include colors(white);
    }
  }

</style>
