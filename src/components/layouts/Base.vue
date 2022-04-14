<script setup>
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
</script>

<template>
  <div class="relative flex h-screen p-3 col-1 flex-col">
    <Header />
    <main class="flex-1">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.base-container {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-flow: column;
  height: 100vh;
  padding: 16px;

  main {
    flex: 1;
  }
}
</style>
