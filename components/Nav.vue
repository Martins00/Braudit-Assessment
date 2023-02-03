<template>
    <div class="nav flex justify-between">
        <div class="nav__logo text-2xl font-bold items-center">
            <NuxtLink to="/">Assessments</NuxtLink>
        </div>
        
        <ul class="nav__pages flex text-base font-medium items-center">
            <li class="nav__pages--home mx-4 py-2 px-6 rounded hover:border hover:border-[#919F88] hover:translate-y-2 duration-500">
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="nav__pages--users mx-4 py-2 px-6 rounded hover:translate-y-2 duration-500">
                <NuxtLink to="/users">Users</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.nav {
    &__logo {
        color: var(--primary-color);
    }

    &__pages {
        &--users {
            color: var(--white);
            background-color: var(--primary-button);
        }
    }
}
</style>