<script setup>
import {noteService} from '@/services/noteService'
</script>

<template>
  <header class="row">
    <div class="col-4 offset-4">
      <h1 class="title">zatsu-memo</h1>
    </div>
    <div class="col-4 btn-create-note">
      <button
          @click="noteService.store.commit.setIsShowModal(true)"
          class="btn btn-primary"
      >
        +
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 12px 0;

  .title {
    text-align: center;
    font-size: 32px;
  }

  .btn-create-note {
    text-align: right;
  }
}
</style>