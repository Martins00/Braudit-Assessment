<template>
    <div>
        <div class="hero-section grid grid-cols-1 lg:grid-cols-2 items-center">
            <div class="hero-section__left mt-16 items-center">
                <h2 class="hero-section__header text-xl lg:text-6xl font-bold lg:font-semibold  sm:mb-4">Assesments Hub</h2>
                <p class="hero-section__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sit necesHic,
                    cupiditate. Mapisci error, numquam ducimus et repellendus.
                    Fugiat sit necesHic,
                    cupiditate. Mapisci error, numquam ducimus et repellendus.
                </p>
                <NuxtLink to="/users">
                    <button class="hero-section__button mt-12 py-2 px-12 rounded hover:translate-y-2 duration-500">
                        Users
                    </button>
                </NuxtLink>
            </div>

            <div class="hero-section__right">
                <img src="~/assets/img/HeroImage.png" alt="Hero-Image" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'website'
})
</script>

<style lang="scss" scoped>
.hero-section {

    &__button {
        color: var(--white);
        background-color: var(--primary-button);
    }

    @media screen and (max-width: 767px) {
        &__header {
            line-height: 4rem;
        }
    }
}
</style>