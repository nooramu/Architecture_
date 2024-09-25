<template>
    <div class='item'>
        <slot></slot>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
.item{
    height: 7rem;
    border: 0px solid;
    margin: .25rem;
    background-color: rgba(134,126,118,.6);
    border-radius: 40px 60px 40px 60px / 60px 40px 60px 40px;
    /* float : right; */
    box-shadow: 0 2px 4px rgba(116,120,122, 0.9); 
}
</style>
