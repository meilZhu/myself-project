<template>
    <div class="tips-content">
        <span class="filament"></span>
        <i class="dot"></i>
        <span class="tips-text">{{tipsTitle}}</span>
        <i class="dot"></i>
        <span class="filament"></span>
    </div>
</template>

<script>
    export default {
        name: 'titletips',
        data () {
            return {

            }
        },
        props: {
            tipsTitle: {
                type: String,
                default: '限时抢购'
            }
        }
    }
</script>

<style lang='scss' scoped>
    .tips-content {
        width:100%;
        margin:.4rem 0;
        display: flex;
        justify-content: center;
        padding:0 .3rem;
        align-items: center;
        font-size:12px;
        .filament {
            display: inline-block;
            height:0;
            border-bottom:.03rem #aaa solid;
            flex:1;
        }
        .dot {
            border:.06rem solid #999;
            border-radius:50%;
        }
        .tips-text {
            margin:0 .2rem;
            color:#666;
        }
    }
</style>