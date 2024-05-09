<template>
    <div class='item'>
        <!-- 设置插槽 -->
        <slot></slot>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style>
.item{
    /* 高度410px */
    height: 7rem;
    border: 0px solid;
    /* 外边距20px */
    margin: .25rem;
    background-color: rgba(134,126,118,.6);
    border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
    /* float : right; */
    box-shadow: 0 2px 4px rgba(116,120,122, 0.9); /* 添加阴影效果 */
}
</style>
