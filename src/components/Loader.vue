<template>
    <div class="loader">
        <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .loader{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        @include colors(null, gray1);
        overflow: hidden;
        z-index: 9999;

        div{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            span{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: inline-block;
                @include colors(null, blue3);
                @include mr(3);
                @include ml(3);
                animation: loading 1s ease-in-out infinite;
            
                &:first-of-type{
                    animation-delay: .2s;
                }

                &:nth-child(2){
                    animation-delay: .4s;
                }

                &:nth-child(3){
                    animation-delay: .6s;
                }

                &:last-of-type{
                    animation-delay: .8s;
                }
            }
        }
    }

@keyframes loading{
    0%, 100%{
        transform: scale(1);
        @include colors(null, blue3);
    }
    
    50%{
        transform: scale(1.2);
        @include colors(null, red3);
    }
}

</style>
