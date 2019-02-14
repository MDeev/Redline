<template>
    <div class="not-found text-center">
        <div class="notfound">
            <div>Page not found</div>
            <h2>
                404
            </h2>
            <div class="lnk">
                <router-link to="/">Home</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  beforeCreate: function() {
    document.body.className = 'notfound';
  }
}
</script>

<style lang="scss" scoped>
    .not-found{
        position: relative;
        min-height: calc(100vh - 50px);
        @include colors(white);
        text-transform: uppercase;

        .notfound{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            @include font($bold2);

            div{
                @include fontSize(50);
                @include mb(-40);
            }
            h2{
                @include mt(0);
                @include mb(0);
                @include fontSize(240);
            }
            .lnk{
                a{
                    @extend %block;
                    @include font($bold);
                    @include fontSize(23);
                    @include p(8px 0);
                    @include mt(-10);
                    @include mr(10);
                    @include ml(10);
                    @include transition;
                    border-radius: 50px;
                    text-decoration: none;
                    @include colors(white, red3);
                    &:hover{
                        @include colors(white, red4);
                    }
                }
            }
        }        
    }
</style>

