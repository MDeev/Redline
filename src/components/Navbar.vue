<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div class="container">
            <a class="navbar-brand" href="#">Redline</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/" exact>Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/popular" exact>Popular</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/latest" exact>Latest</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/about" exact>About us</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/contact" exact>Contact</router-link>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <a href="#" class="search">
                        <i class="far fa-search"></i>
                    </a>
                </form>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    .navbar{ 
        text-align: center;
        .navbar-brand{
            @include font($italic);
            @include fontSize(40);
            @include colors(gray1);
            border-radius: 10px;
            height: 45px;
            line-height: 1.2;
            position: relative;
            @include transition;

            &:before{
                content: '';
                position: absolute;
                top: 99%;
                height: 3px;
                width: 100%;
                @include colors(null, red4);
                border-radius: 50px;
                @include transition;
                z-index: -1;
            }

            &:hover{ @include colors(white); }
        }

        .navbar-collapse{  @include mt(12); }

        .nav-item{
            text-align: center;

            .nav-link{
                @include font($bold);
                @include fontSize;
                @include colors(white);
                @include p(4px 10px);
                @include mr(2);
                @include ml(2);
                @include transition;
                @extend %inline;
                border-radius: 50px;

                &.active{ @include colors(white, red3); }

                
                @media #{$sm} { @include mb(5); } 

                @media #{$md} { @include mb(5); } 

                @media #{$lg} { @include mb(0); } 
            }
        }
        form{
            @include ml(15);
            position: relative;
            overflow: hidden;
            @extend %inline;

            input{
                border-radius: 50px;
                overflow: hidden;
                height: 33px;
                @include fontSize(17);
            }
            .search{
                position: absolute;
                right: 8px;
                height: 100%;
                @include colors(blue4, white);
                border-radius: 0 50px 50px 0;
                @include p(0 10px 0 5px);
                @include fontSize(20);
                @include transition;
                box-shadow: none;
                outline: none;
                border: 2px solid map-get($color, white);

                &:hover{ @include colors(red4); }
            }
        }
    }
</style>



