<template>
    <div class="mx-6 lg:mx-0">
        <h2 class="text-2xl lg:text-4xl font-semibold mb-8">
            Below, is a list of some of our most loyal users
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div v-for="user in users">
                <UsersUserData :user="user" />
            </div> 
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'website'
})

//fetch the users
const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users')
</script>