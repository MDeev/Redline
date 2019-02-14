<template>
    <div class="latest-blogs">
        <div class="container">
            <h3>Latest</h3>
            <div class="loading" v-if="!loading" v-cloak>
                Loading...
            </div>
            <div class="latest-blog">
                <div class="row">
                    <div class="col-lg-4" v-for="(latestB, index) in latestBlogs" :key="index">
                        <router-link class="latest-link" :to="'/blog/' + latestB.id">                           
                            <div class="card text-center">
                                <div class="latest-header">
                                    <img class="card-img-top latest-bg" :src="CheckImage()" :alt="latestB.title">
                                    <div class="latest-tag">{{ categories[getRandomNumber(12)] }}</div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title latest-title">{{ latestB.title }}</h5>
                                    <p class="card-text latest-text">{{ latestB.body | shortPara }}</p>
                                </div>
                                <div class="card-footer text-muted">
                                    By <span class="latest-author">{{ users[getRandomNumber(9)] }}</span>, 
                                    <span class="latest-date">1 days ago</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .latest-blogs{
        @include pt(40);
        @media #{$sm} { @include pb(90); } 
        @media #{$md} { @include pb(80); } 
        @media #{$lg} { @include pb(60); } 

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
                height: 3px;
                width: 100%;
                @include colors(null, gray1);
            }
        }

        .latest-blog{
            overflow: hidden;
            
            a, .latest-link{
                overflow: hidden;
                text-decoration: none;
                @extend %inline;
                @include mb(25);

                .card{
                    border: none;
                    position: relative;

                    &:after{
                        content: '';
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        width: 0;
                        height: 0;
                        border-radius: 50%;
                        @include colors(null, dark1);
                        @include transition;
                        opacity: 0;
                    }

                    &:hover:after{
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 0;
                        opacity: .16;
                    }

                    .latest-header{
                        position: relative;

                        .latest-tag{
                            position: absolute;
                            top: 0;
                            left: 0;
                            @include font($bold);
                            @include fontSize(13);
                            @include p(3px 7px);
                            @include colors(white, red3);
                            border-radius: 3px 0 3px 0;
                        }
                    }
                    
                    .card-body{
                        .latest-title{
                            @include font($bold);
                            @include colors(red3);
                        }
                        .latest-text{
                            @include colors(gray4);
                            @include fontSize;
                        }
                    }
                    
                    .card-footer{
                        @include pt(5);
                        @include pb(5);
                        span{ @extend %inline; @include fontSize(14); }
                        .latest-author{ text-transform: uppercase; @include font($bold); }
                    }
                }
            }
        }
    }
</style>


