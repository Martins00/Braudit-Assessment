<template>
    <div class="albums p-0 lg:px-12" id="posts" ref="POSTS">
        <h1 class="text-2xl lg:text-4xl font-semibold mb-4">Albums</h1>
        <div class="albums__wrapper relative" v-for="(album, index) in albums">
            <div class="album__wrapper grid grid-cols-12 items-center mb-6">
                <div class="col-span-1">
                    <div class="album__line" v-if="index !== albums.length - 1"></div>
                    <div class="album__dot"></div>
                    <div class="album__pointer"></div>
                </div>
                <div class="album__content col-span-10 px-12 py-6">
                    {{ album.title }}
                </div>
            </div>
        </div>

        <div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
definePageMeta({
    layout: 'dashboard'
})

const { id } = useUserId()
const uri = BASE_URL + id.value + '/albums'

//fetch user
const { data: albums } = await useFetch(uri, { key: id.value })

</script>

<style lang="scss" scoped>
.album {
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

@media screen and (min-width: 768px) {
    .album__content::before {
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