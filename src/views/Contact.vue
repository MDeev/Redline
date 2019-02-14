<template>
    <div class="contact-us">
        <div class="container">
            <div class="contact">
                <h2 class="text-center">Contact US</h2>
                <form class="form-group">
                    <label for="fullname">Fullname</label>
                    <input class="form-control" type="text" id="fullname" placeholder="Type your name...">
                    <label for="email">Email</label>
                    <input class="form-control" type="text" id="email" placeholder="Type your email...">
                    <label for="msg">Message</label>
                    <textarea class="form-control" id="msg" rows="5" placeholder="Type your message..."></textarea>
                    <div>
                        <input class="btn btn-danger float-left" type="button" value="Send">
                        <div class="social float-right">
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
                            <a href="#">
                                <span class="fa-stack fa-1x">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-youtube fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  beforeCreate: function() {
    document.body.className = 'contact';
  }
}
</script>

<style lang="scss" scoped>

    .contact-us{
        @include pt(50);
        @media #{$sm} { @include pb(90); } 
        @media #{$md} { @include pb(80); } 
        @media #{$lg} { @include pb(60); } 

        .contact{
            h2{
                @include font($bold2);
                @include fontSize(65);
                @include mb(20);
                text-transform: uppercase;
                @include colors(white);
            }

            form{
                
                @include m(0 auto);
                @media #{$sm} { width: 95%; } 
                @media #{$md} { width: 75%; } 
                @media #{$lg} { width: 55%; } 

                label{
                    @include mt(10);
                    @include mb(5);
                    @include font($bold);
                    @include fontSize(17);
                    @include colors(white);
                }

                input, textarea{
                    box-shadow: none;
                    outline: none;
                    @include transition;
                    
                    &:not([type='button']){
                        border: 2px solid map-get($color, white);
                        @include colors(white);
                        background-color: transparent;
                        
                        &:focus{
                            @include colors(red1);
                            border-color: map-get($color, red3);
                            @include shadow(0, 0, 6px, map-get($color, red3), .6);
                            @include transition;
                            &::placeholder{ @include colors(red3); }
                        }
                    }
                    &::placeholder{ @include colors(gray3); }

                    &[type='button']{
                        @include font($bold);
                        @include fontSize(18);
                        @include pr(40);
                        @include pl(40);
                        border: none;
                        border-radius: 50px;
                        @include colors(white, red3);

                        &:active:focus, &:hover{
                            box-shadow: none;
                            outline: none;
                            @include colors(white, red4);
                        }
                    }
                }

                textarea{ resize: none }

                & > div{
                    @include mt(15);
                }

                .social{
                    a{
                        @include fontSize(18);
                        @include colors(red3);
                        @include mr(3);
                        @include ml(3);
                        @include transition;

                        &:hover, &:active{
                            @include colors(red4);
                        }
                    }
                }
            }
        }
    }
</style>

