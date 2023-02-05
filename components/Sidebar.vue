<template>
    <div class="sidebar">
        <div class="logo text-2xl font-bold mb-24">
            Assessments
        </div>

        <nav class="">
            <ul class="nav-list ">
                <li v-for="link in navList" :key="link.display" class="text-xl font-semibold mb-16">
                    <NuxtLink :to="link.to" active-class="router-link-active"
                        :class="{ 'router-link-active': !link.exact && $route.path.startsWith(link.to) }">
                        {{ link.display }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
const { id } = useUserId()

const navList = computed(() => {
    return [
        { display: 'Posts', to: `/users/${id.value}/posts`, exact: true },
        { display: 'Albums', to: `/users/${id.value}/albums`, exact: false },
        { display: 'Todos', to: `/users/${id.value}/todos`, exact: false },
    ]
}) 
</script>

<style lang="scss" scoped>
.sidebar {
    width: var(--sidebar-width);
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    // border-radius: 0 32px 0 0;
    padding: 3rem;
    color: var(--white);
    background: var(--primary-button);
}

.logo {
    display: flex;
    justify-content: flex-start;
}

.nav-list {
    display: grid;
    grid: auto-flow max-content /1fr;
    gap: 16px;

    a {
        display: grid;
        grid: 1fr / 24px auto;
        align-items: center;
        border-radius: 4px;
        gap: 8px;
        padding: 6px;
        color: var(--clr-grey-400);
        text-decoration: none;
        font-weight: var(--fw-500);

        &.router-link-active {
            color: var(--clr-white);
            text-decoration: underline;
        }

        .icon {
            display: grid;
            place-content: center;
        }

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>