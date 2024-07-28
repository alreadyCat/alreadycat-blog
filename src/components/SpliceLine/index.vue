<template>
    <hr>

    </hr>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
hr {

    position: relative;
    margin: 40px auto;
    border: 2px dashed  var(--pink-color);
    width: calc(100% - 4px);

    &::before {
        display: inline-block;
        font-weight: 600;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        position: absolute;
        top: -17px;
        left: 5%;
        z-index: 1;
        color: var(--pink-color);
        content: '\2702';
        font-size: 30px;
        line-height: 1;
        transition: all 1s ease-in-out;
    }

    &:hover::before{
        left: 95%;
    }
}
</style>