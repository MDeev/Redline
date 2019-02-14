<template>
    <div class="author text-center">
        <div class="author-header">
            <img class="img-fluid author-cover" :src="CheckImage()" alt="">
            <img class="img-fluid author-profile" src="../../assets/img/author-01.jpg" alt="">
        </div>
        <div class="author-name">{{ users[getRandomNumber(9)] }}</div>
        <div class="author-social">
            <a href="#">
                <span class="fa-2x">
                    <i class="fab fa-facebook-square"></i>
                </span>
            </a>
            <a href="#">
                <span class="fa-2x">
                    <i class="fab fa-twitter-square"></i>
                </span>
            </a>
            <a href="#">
                <span class="fa-2x">
                    <i class="fab fa-youtube-square"></i>
                </span>
            </a>
            <a href="#">
                <span class="fa-2x">
                    <i class="fab fa-pinterest-square"></i>
                </span>
            </a>
            <a href="#">
                <span class="fa-2x">
                    <i class="fab fa-linkedin"></i>
                </span>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .author{
        border-radius: 5px;
        border: 2px solid;
        border-color: map-get($color, white);
        overflow: hidden;
        @include mr(20);
        @include ml(20);
        @include mb(30);
        @include colors(dark1, white);

        .author-header{
            @include mb(10);
            position: relative;
            overflow: hidden;

            &:before{
                content: '';
                position: absolute;
                left: -25%;
                top: 76%;
                width: 150%;
                height: 100px;
                transform: rotate(-7deg);
                @include colors(null, white);
            }

            .author-cover{
                overflow: hidden;
            }

            .author-profile{
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
                border-radius: 50%;
                width: 110px;
                height: 110px;
                overflow: hidden;
            }
        }
        .author-name{
            @include font($bold2);
            @include fontSize(22);
            @include mb(20);
            @include colors(red4);
        }
        .author-social{
            @include mb(30);

            a{
                @include mr(3);
                @include ml(3);
                @include p(7px);
                @include colors(red3);
                @include transition;
                text-decoration: none;

                &:hover{ @include colors(red4); }
            }
        }
    }
</style>
