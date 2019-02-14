<template>
    <div class="popular-blogs">
        <div class="container">
            <h3>Popular</h3>
            <div class="loading" v-if="!loading" v-cloak>
                Loading...
            </div>
            <div class="popular-blog">
                <router-link class="popular-link" v-for="(popularB, index) in popularBlogs" :key="index" :to="'/blog/' + popularB.id">
                    <div class="img-bg" :style="'background-image: url('+ CheckImage() +');'"></div>
                    <div class="info">
                        <span class="tag">{{ categories[getRandomNumber(12)] }}</span>
                        <h4>{{ popularB.title }}</h4>
                        <p v-if="index < 1">{{ popularB.body | shortPara }}</p>
                        <span class="author-date">
                            By <span class="author">{{ users[getRandomNumber(9)] }}</span>, 
                            <span class="date">1 days ago</span>
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .popular-blogs{
        min-height: calc(100vh - 55px);
        @include pt(30);
        @media #{$sm} { @include pb(80); } 
        @media #{$md} { @include pb(60); } 
        @media #{$lg} { @include pb(40); } 

        h3{
            @include font($bold2);
            text-transform: uppercase;
            position: relative;
            @include mb(30);
            @include colors(gray1);

            &:before{
                content: '';
                position: absolute;
                left: 0;
                bottom: -5px;
                height: 2px;
                width: 100%;
                @include colors(null, gray1);
            }
        }
    
        .popular-blog{
            display: grid;
            grid-gap: 20px;

            .popular-link{
                position: relative;
                text-decoration: none;
                border-radius: 5px;
                overflow: hidden;
                cursor: pointer;
                @include colors(null, red4);
                
                .img-bg{
                    @extend %block;
                    height: 55%;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                
                .info{
                    @extend %block;
                    min-height: 45%;
                    text-align: center;
                    @include pl(20);
                    @include pr(30);

                    position: relative;
                    
                    .tag{
                        @include colors(white, blue4);
                        @include p(3px 10px);
                        @include font($light);
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                    h4{
                        @include font($bold2);
                        @include mt(20);
                        @include mb(10);
                        text-transform: uppercase;
                    }
                    .author-date{
                        @include font($light);
                        @include fontSize(13);
                        @include p(5px 10px);
                        @extend %block;
                        .author, .date{ @extend %inline; @include colors(gray2); }
                        .author{ text-transform: uppercase; @include font($bold); }
                        .date{  @include ml(10); @include mb(10); }
                    }
                }
    
                &:first-of-type{
                    grid-template-rows: minmax(420px, auto);
                    @media #{$lg} { grid-column: 1/9; grid-row: 1/3; } 

                    &::before{
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        @include colors(null, dark1);
                        opacity: .3;
                        @include transition;
                    }
                    
                    .img-bg{
                        height: 100%;
                    }

                    .info{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        min-height: 45%;
                        @include colors(white);

                        .tag{
                            @include fontSize(18);
                        }
                        h4{
                            @include fontSize(50);
                        }
                        p{
                            @include font($italic);
                            @include fontSize(22);
                            @include pr(10);
                            height: 30px;
                            min-height: 30px;
                            overflow: hidden;
                        }
                    }

                    &:hover{ 
                        &::before{
                            opacity: .6;
                        }
                    }
                }
                
                &:not(:first-of-type){
                    grid-template-rows: minmax(200px, auto);
                    
                    .img-bg{
                        height: 150px;
                        min-height: 55%;
                        transform: scale(1);
                        @include transition(.5s);
                    }

                    .info{
                        min-height: 45%;
                        @include colors(white, red4);
                        @include pt(.1);
                        @include transition(.5s);

                        .tag{
                            @include fontSize(14);
                            &:before{
                                content: '';
                                position: absolute;
                                left: -25px;
                                top: 0;
                                height: 100%;
                                width: 0;
                                border: 13px solid;
                                border-color: transparent map-get($color, blue4) transparent transparent;
                                z-index: -1;
                            }
                        }
                        h4{
                            @include fontSize(24);
                        }
                    }
                    
                    &:hover{ 
                        .img-bg{ transform: scale(1.2) rotate(5deg); }
                        .info{ @include colors(white, red3); }
                    }
                }
                
                &:nth-of-type(2){ @media #{$lg} { grid-row: 1/2; } }

                &:nth-of-type(3){ @media #{$lg} { grid-row: 2/3; } }

                &:nth-of-type(2), &:nth-of-type(3){ @media #{$lg} { grid-column: 9/13; } }

                &:nth-of-type(4){ @media #{$lg} { grid-column: 1/4; } }

                &:nth-of-type(5){ @media #{$lg} { grid-column: 4/7; } }

                &:nth-of-type(6){ @media #{$lg} { grid-column: 7/10; } }

                &:nth-of-type(7){ @media #{$lg} { grid-column: 10/13; } }

                &:not(:first-of-type):not(:nth-of-type(2)):not(:nth-of-type(3)){ 
                    @media #{$lg} { grid-row: 3/4; }

                    .img-bg{
                        height: 120px;
                        min-height: 55%;
                    }

                    .info{
                        h4{
                            @include fontSize(20);
                        }
                    }
                }
            }
        }
    }
</style>
