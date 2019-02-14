<template>
  <div class="content">
    <Popular />
    <Latest />
  </div>
</template>

<script>
import Popular from '@/components/PopularBlogs'
import Latest from '@/components/LatestBlogs'

export default {
  components: {
    Popular,
    Latest
  },
  beforeCreate: function() {
      document.body.className = 'home';
  }
}
</script>
