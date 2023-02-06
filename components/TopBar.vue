<template>
    <nav class="nav sticky top-0 flex flex-col justify-center lg:hidden ml-4">
      <button class="flex flex-col justify-center" @click="toggleNav()">
        <div class="nav__strokes"></div>
        <div class="nav__strokes"></div>
        <div class="nav__strokes"></div>
      </button>
    </nav>
</template>

<script setup>
 const emit = defineEmits(['open'])
 
 function toggleNav() {
  emit('open')
 }
</script>

<style lang="scss" scoped>
.nav {
  flex-basis: 70px;
  height: 70px;

  &__strokes {
    width: 10px;
    height: 2px;
    margin-bottom: .1rem;
    background-color: var(--primary-color);
  }
}</style>