<template>
    <div class="nav flex justify-between">
        <div class="nav__logo text-2xl font-bold items-center">
            <NuxtLink to="/">Assessments</NuxtLink>
        </div>

        <ul class="nav__pages flex text-base font-medium items-center">
            <NuxtLink to="/">
                <li
                    class="nav__pages--home hidden md:block mx-4 py-2 px-6 rounded hover:border hover:border-[#919F88] hover:translate-y-2 duration-500">
                    Home
                </li>
            </NuxtLink>

            <NuxtLink to="/users">
                <li class="nav__pages--users mx-4 py-2 px-6 rounded hover:translate-y-2 duration-500">
                    Users
                </li>
            </NuxtLink>
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