<template>
  <div class="layout">
    <div 
      class="left-panel fixed lg:relative top-0 bottom-0 z-20 lg:left-0"
    :class="[isNavOpen ? 'left-0' : '-left-full']">
      <Sidebar @close="toggleNavOpen(false)" />
    </div>
    <div 
      v-if="isNavOpen"
      @click="toggleNavOpen"
      class="overlay bg-[#00000033] fixed inset-0 z-10 lg:hidden" 
    ></div>

    <div class="relative lg:fixed">
    </div>

    <div class="right-panel py-3 px-4  lg:py-10 lg:px-12">
      <TopBar @open="toggleNavOpen" />
      <div class="">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const isNavOpen = ref(false);

function toggleNavOpen(val) {
  isNavOpen.value = val == null ? !isNavOpen.value : val;
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid: 1fr / max-content 1fr;
  font-family: poppins;
  color: var(--primary-color);
  background-color: var(--primary-bg);
  transition: left 300ms ease;
  /*gap: 32px;*/
}

.right-panel {
  position: relative;
  display: grid;
  grid: max-content auto / 100%;
  width: 100%;
  height: 100vh;
  padding-inline: 32px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>