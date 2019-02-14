<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <div class="copyrights">
                        Redline &copy;2019. All Rights Reserved
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <div class="dev">
                        Made with <i class="fas fa-heart"></i> by <a href="https://www.mohamedjaoufi.ml" target="_blank">Mohamed JAOUFI</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .footer{
        @include colors(white, red4);
        @include font($light);
        @include fontSize(18);
        @include mt(40);
        @include pt(35);
        @include pb(30);
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        
        .dev{
            a{
                text-decoration: none;
                @include colors(gray2);
            }
        }

        @media #{$sm} {
            .copyrights, .dev{ text-align: center; }
            .copyrights{ @include mb(10); }
        } 

        @media #{$md} {
            .copyrights, .dev{ text-align: center; }
            .copyrights{ @include mb(10); }
        } 

        @media #{$lg} {
            .copyrights{ text-align: left; }
            .copyrights{ @include mb(0); }
            .dev{ text-align: right; }
        } 
    }
</style>
