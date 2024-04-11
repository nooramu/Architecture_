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
    height: 5.5rem;
    border: 0px solid;
    /* 外边距20px */
    margin: .25rem;
    background-color: rgba(53,51,60,.6);
}
</style>
