<template>
    <div class="blog">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <Content :blogContent="blogContent" />
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-12">
                            <Author />
                            <hr />
                        </div>
                        <div class="col-12">
                            <Other />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Content from '@/components/Single/SingleContent'
import Author from '@/components/Single/SingleAuthor'
import Other from '@/components/Single/SingleOther'

export default {
    props: ['id'],
    components: {
        Content,
        Author,
        Other
    },
    data() {
        return {
            blogContent: {}
        }
    },
    methods: {
        getTheBlog: function() {
            if(!isNaN(this.id) && this.id <= 100){
                this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then((result) => {
                    this.blogContent = result.data;
                });
            } else { this.$router.push('/404') }
        }
    },
    beforeCreate: function() {
        document.body.className = 'single';
    },
    created: function() {
        this.getTheBlog();
    }
}
</script>

<style lang="scss" scoped>
    .blog{
        @include pt(50);
        @media #{$sm} { @include pb(80); } 
        @media #{$md} { @include pb(60); } 
        @media #{$lg} { @include pb(40); } 


        hr {
            display: block;
            height: 1px;
            border: 0;
            border-top: 1px solid map-get($color, gray3);
            margin: 1em 0;
            padding: 0; 
        }
    }
</style>
