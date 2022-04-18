<script setup>
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
</script>

<template>
  <div class="relative flex h-screen p-3 col-1 flex-col overflow-hidden">
    <Header />
    <main class="flex-1">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
