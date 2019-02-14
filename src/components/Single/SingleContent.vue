<template>
    <div class="content">
        <h2>{{ blogContent.title }}</h2>
        <div>
            <span class="content-date float-sm-left">
                January 01, 2019
            </span>
            <div class="social float-sm-right">
                <a href="#">
                    <span class="fa-1x">
                        <i class="fal fa-share-alt"></i>
                    </span>
                    Share
                </a>
                <a href="#">
                    <span class="fa-stack fa-1x">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="#">
                    <span class="fa-stack fa-1x">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="#">
                    <span class="fa-stack fa-1x">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-google-plus-g fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </div>
            <div class="clearfix"></div>
        </div>
        <img class="img-fluid" :src="CheckImage()" alt="RedLine Blog">
        <p>
            {{ blogContent.body }}
        </p>
    </div>
</template>

<script>
export default {
    props:{
        blogContent: Object
    }
}
</script>

<style lang="scss" scoped>
    .content{
        @media #{$sm} { text-align: center; } 
        @media #{$md} { text-align: center;  } 
        @media #{$lg} { text-align: left;  } 

        h2{
            @include font($bold2);
            @include mb(20);
            @include colors(whire);
            
            @media #{$sm} { @include fontSize(30); }
            @media #{$md} { @include fontSize(35); }
            @media #{$lg} { @include fontSize(40); } 
        }

        & > div{
            position: relative;
            @include pb(10);
            @include colors(gray2);
            @include mb(20);

            &:before{
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                height: 1px;
                width: 100%;
                @include colors(null, gray3);
            }
            
            .content-date{
                text-transform: uppercase;
                @extend %inline;

                @media #{$sm} { @include mb(15); } 
                @media #{$md} { @include mb(15); } 
                @media #{$lg} { @include mb(0); } 
            }

            .social{
                @extend %inline;

                a{
                    @include mr(3);
                    @include ml(3);
                    @include font($bold);
                    @include colors(red3);
                    @include fontSize(18);
                    @include transition;
                    text-decoration: none;

                    &:first-of-type{
                        @include colors(white, red3);
                        border-radius: 50px;
                        @include p(3px 15px);
                        @extend %inline;
                        
                        &:hover{ @include colors(white, red4); }
                    }
                    &:not(:first-of-type){
                        @include p(0);
                        &:hover{ @include colors(red4); }
                    }
                }
            }
        }
        img{
            @include mb(30);
        }
        p{
            @include fontSize(18);
            @include colors(gray2);
            @extend %inline;
            @media #{$sm} { @include mb(45); } 
            @media #{$md} { @include mb(45); } 
            @media #{$lg} { @include mb(0); } 
        }
    }
</style>
