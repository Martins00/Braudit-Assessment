<template>
    <div class="posts__container px-12">
        <div class="post grid grid-cols-12 items-center">
            <div class="post__dot col-span-1"></div>
            <div class="post__content col-span-10 px-8 py-6">
                I am also working <br>
                This is a post <br>
                This is some content
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard'
})
</script>

<style lang="scss" scoped>
.post {
    &__content {
        background-color: white;   
    }
    &__dot {
        background-color: black;
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
}
</style>