<template>
    <div class="other">
        <div class="other-blogs">
            <h3>Others</h3>
            <div class="loading" v-if="!loading" v-cloak>
                Loading...
            </div>
            <div class="other-blog">
                <div class="row">
                    <div class="col-12" v-for="(blogg, index) in theBlog" :key="index">
                        <a :href="'/blog/' + blogg.id">
                            <div class="row">
                                <div class="col-4">
                                    <img class="img-fluid" :src="CheckImage()" alt="">
                                    <div class="tag text-center">{{ categories[getRandomNumber(12)] }}</div>
                                </div>
                                <div class="col-8">
                                    <h4>{{ blogg.title }}</h4>
                                    <hr />
                                    <div class="info">
                                        By <span class="float-left">{{ users[getRandomNumber(9)] }}</span>
                                        <span class="float-right">January 01, 2019</span>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .other-blogs{
        h3{
            @include font($bold2);
            @include fontSize(22);
            @include mt(5);
            @include mb(20);
            text-transform: uppercase;
            @include colors(gray1);
        }

        .other-blog{
            a{
                @extend %block;
                @include mb(20);
                @include p(5px);
                text-decoration: none;
                position: relative;
                @include transition;
                border-radius: 5px;

                &:before{
                    content: '';
                    position: absolute;
                    left: 0;
                    top: -12px;
                    height: 3px;
                    width: 100%;
                    @include colors(null, red3);
                }

                &:hover{ @include colors(null, red4); }

                .col-4{
                    padding-right: 0;
                }

                .tag{
                    @include fontSize(11);
                    @include mt(0);
                    @include pt(2);
                    @include pb(2);
                    @include colors(white, red3);
                    @include font($bold);
                    text-transform: uppercase;
                    overflow: hidden;
                }

                h4{
                    @include font($bold2);
                    @include fontSize(18);
                    @include mb(5);
                    @include colors(white);
                }

                hr {
                    display: block;
                    height: 1px;
                    border: 0;
                    border-top: 1px solid map-get($color, gray3);
                    margin: 1em 0;
                    padding: 0; 
                }

                .info{

                    @include font;
                    @include fontSize(11);
                    @include mt(5);
                    text-transform: uppercase;
                    @include colors(gray2);
                }
            }
        }
    }
</style>
