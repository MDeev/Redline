<template>
    <div class="latest">
        <Latest />
    </div>
</template>

<script>
import Latest from '@/components/LatestBlogs'

export default {
  components: {
    Latest
  },
  beforeCreate: function() {
    document.body.className = 'latest';
  }
}
</script>

<style lang="scss" scoped>
  
</style>

