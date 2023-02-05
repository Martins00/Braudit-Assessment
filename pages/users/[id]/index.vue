<template>
    <div class="details-page">
        <h1 class="details-page__header font-bold">Welcome to {{ user?.name }}'s details page</h1>

        <div class="details-page__detail-container text-2xl font-semibold mt-20">
            <p class="details-page__details">Full name: {{ user?.name }}</p>
            <p class="details-page__details">User Name: {{ user?.username }}</p>
            <p class="details-page__details">Email: {{ user?.email }}</p>
            <p class="details-page__details">Phone: {{ user?.phone }}</p>
            <p class="details-page__details">City: {{ user?.address?.city }}</p>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard'
})
const { id } = useUserId()
const uri = BASE_URL + id.value

//fetch user
const { data: user } = await useFetch(uri, { key: id.value })
</script>

<style lang="scss" scoped>
.details-page {
    &__details {
        margin-bottom: 1.5rem;

    }
}
</style>