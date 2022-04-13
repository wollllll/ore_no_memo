<script setup>
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import Modal from '@/components/Modal'
import { computed } from 'vue'
import { noteService } from '@/services/noteService'

const isShowModal = computed(
  () => noteService.store.getters.isShowModal().value
)
</script>

<template>
  <div class="base-container">
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
    <Modal v-if="isShowModal" />
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
