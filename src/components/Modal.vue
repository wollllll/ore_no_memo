<script setup>
import { noteService } from '@/services/noteService'
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
          <slot name="title" />
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          @click="noteService.store.commit.setIsShowModal(false)"
        ></button>
      </div>
      <div class="modal-body">
        <slot name="body" />
      </div>
      <div class="modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);

  .modal-content {
    width: 50%;
    height: 80vh;
  }
}
</style>
