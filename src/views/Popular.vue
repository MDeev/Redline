<template>
    <div class="popular">
        <Popular />
    </div>
</template>

<script>
import Popular from '@/components/PopularBlogs'

export default {
  components: {
    Popular
  },
  beforeCreate: function() {
    document.body.className = 'popular';
  }
}
</script>

<style lang="scss" scoped>

</style>

