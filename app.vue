<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
  const { name } = useAppConfig()
  useHead({
    titleTemplate: (chunk) => `${chunk ? chunk + ' | ' : ''}${name}`,
  })

  const route = useRoute()
  // when page route changes, scroll to the top of the page if the route has no hash else scroll to the element on the page whose id matches the hash
  watch(route, () => {
    if (route.hash) {
      const el = document.querySelector(route.hash)
      if (el) window.scrollTo(0, el.offsetTop - 100)
      return
    }
    window.scrollTo(0, 0)
  })
</script>

<style lang="scss">
@import "assets/styles/main";

html {
  padding: 1rem;
  font-family: poppins;
  color: var(--primary-color);
  background-color: var(--primary-bg);
}
</style>
