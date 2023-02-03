<template>
  <div class="layout">
    <div class="left-panel">
      <Sidebar />
    </div>
    <div class="right-panel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard"
}
</script>

<style>
.layout {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid: 1fr / max-content auto;
  /*gap: 32px;*/
}

h1,
h2 {
  font-weight: var(--fw-600);
}

h1 {
  font-size: 2.4rem;
  line-height: 3.2rem;
}

h2 {
  font-size: 1.8rem;
  line-height: 2.7rem;
}

.right-panel {
  position: relative;
  width: 100%;
  padding-inline: 32px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>