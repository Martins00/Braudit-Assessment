<template>
    <div>
        <p>this is for user {{ id }}</p>

        <p>{{ user.name }}</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://jsonplaceholder.typicode.com/users/' + id

//fetch user
const { data: user } = await useFetch(uri, {key: id})
</script>