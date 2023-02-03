<template>
    <div class="layout-root">
        <div class="nav p-4">
            <Nav />
        </div>
        <div class="content lg:p-8">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'website'
}
</script>

<style lang="scss">
html {
    // padding: 1rem;
    font-family: poppins;
    color: var(--primary-color);
    background-color: var(--primary-bg);
}

.layout-root {
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
}
</style>