<template>
    <div class="todos">
        <h1 class="todos__header text-2xl lg:text-4xl font-semibold">Todo List</h1>
       <div class="mt-4">
        <div v-for="todo in todos" >
            <div class="todos__task flex items-center rounded py-12 px-4 mb-4">
                <input type="checkbox" v-model="todo.completed" class="todos__checkbox">
                <p class="todos__title text-lg font-semibold ml-4">{{ todo.title }}</p>
            </div>
        </div>
       </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard'
})

const { id } = useUserId()
const uri = BASE_URL + id.value + '/todos'

//fetch todos
const { data: todos } = await useFetch(uri, { key: id.value })

</script>

<style lang="scss" scoped>
.todos {
    &__task {
        color: var(--white);
        background-color: var(--primary-button);
        max-width: 600px;
    }
    &__checkbox {
        accent-color: var(--white);
        cursor: pointer;
    }
}
</style>