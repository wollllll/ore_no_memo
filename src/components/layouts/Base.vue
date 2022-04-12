<script setup>
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import Modal from "@/components/Modal";
</script>

<template>
  <div class="container-fluid">
    <Header/>
    <main>
      <slot></slot>
    </main>
    <Modal/>
    <Footer/>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-flow: column;
  height: 100vh;
  margin: 0;

  main {
    flex: 1;
  }
}
</style>
