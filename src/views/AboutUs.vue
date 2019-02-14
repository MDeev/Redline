<template>
    <div class="about-us">
        <div class="container">
            <div class="about text-center">
                <h2>About us</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quo laboriosam laborum ipsam tenetur numquam, dolorum officiis quaerat minima pariatur exercitationem in iusto similique, amet beatae, dignissimos ut? Provident, voluptas.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
                <div>
                    <router-link to="/">Home</router-link>
                    <router-link to="/contact">Contact</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  beforeCreate: function() {
    document.body.className = 'about';
  }
}
</script>

<style lang="scss" scoped>
    .about-us{
        min-height: calc(100vh - 50px);
        @include colors(white);
        @include pt(50);
        @media #{$sm} { @include pb(90); } 
        @media #{$md} { @include pb(80); } 
        @media #{$lg} { @include pb(60); } 

        .about{
            h2, p { cursor: default; }

            h2{
                @include font($bold2);
                @include fontSize(65);
                color: transparent;
                @include mb(30);
                text-transform: uppercase;
                @include colors(white);
            }

            p{
                @extend %inline;
                @include fontSize(18);
                @include colors(gray2);
                @include mb(20);
                line-height: 1.6;

                &:last-of-type{ @include mb(50); }
            }

            div{
                a{
                    @include font($bold);
                    @include fontSize(23);
                    @include p(8px 25px);
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

