<template>
    <div class="user-card hover:underline p-4 rounded-lg w-full lg:w-1/2">
        <NuxtLink :to="`/users/${user.id}`">
            <h3 class="user-card__full-name text-lg font-bold">{{ user.name }}</h3>
            <p class="user-card__user-name text-base mt-1">{{ user.username }}</p>
            <p class="user-card__mail text-base mt-1">{{ user.email }}</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { user } = defineProps(['user'])
</script>

<style lang="scss" scoped>
.user-card {
    // color: var(--white);
    // background-color: var(--primary-button);

    @media screen and (max-width: 767px) {}
}
</style>