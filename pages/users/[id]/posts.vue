<template>
    <div class="posts p-0 lg:px-12">
        <h1 class="text-2xl lg:text-4xl font-semibold mb-4">Posts</h1>
        <div class="posts__wrapper relative" v-for="(post, index) in posts">
            <div class="post__wrapper grid grid-cols-12 items-center mb-6">
                <div class="col-span-1">
                    <div class="post__line" v-if="index !== posts.length - 1"></div>
                    <div class="post__dot"></div>
                    <div class="post__pointer"></div>
                </div>
                <div class="post__content col-span-10 px-12 py-6">
                    {{ post.body }}
                </div>
            </div>
        </div>

        <div>

        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard'
})

const { id } = useUserId()
const uri = BASE_URL + id.value + '/posts'

//fetch user
const { data: posts } = await useFetch(uri, { key: id.value })

</script>

<style lang="scss" scoped>
.post {
    &__content {
        background-color: white;
        border-radius: 4px;
        position: relative;
    }

    &__dot {
        background-color: white;
        width: 32px;
        height: 32px;
        border: 8px solid rgba(0, 0, 0, 0.721);
        border-radius: 50%;
        z-index: 1;
        position: relative;
    }

    &__line {
        background-color: rgba(0, 0, 0, 0.721);
        width: 4px;
        height: 150%;
        position: absolute;
        left: 13.5px;
        top: 40%;
        z-index: 0;
    }

    &__pointer {
        background-color: rgba(0, 0, 0, 0.721);
        width: 100px;
        height: 4px;
        position: absolute;
        left: 13.5px;
        top: 50%;
        z-index: 0;
    }
}


.posts .posts__wrapper:last-child {

    .post__line {
        display: none;
    }
}

@media screen and (min-width: 768px) {
    .post__content::before {
        content: "";
        position: absolute;
        height: 100%;
        top: 0px;
        left: 0px;
        width: 35px;
        z-index: 1;
        background: black;
        opacity: 0.7;
        clip-path: polygon(0% 0%, 11% 0%, 100% 82%, 33% 100%, 0% 100%);
    }
}
</style>