<script setup>
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
</script>

<template>
  <div class="base-container">
    <Header />
    <main>
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
