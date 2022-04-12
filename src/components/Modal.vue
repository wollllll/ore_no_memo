<script setup>
import { ref, watchEffect } from 'vue'
import { noteService } from '@/services/noteService'

const store = noteService.store
const isShowModal = ref(store.getters.isShowModal())
const showNote = ref(store.getters.showNote())
const updateOrCreateByNote = () => {
  const resetShowMemo = {
    content: null,
    top: 0,
    left: 0,
  }

  'id' in showNote.value
    ? noteService.update(showNote.value)
    : noteService.create(showNote.value)
  noteService.store.commit.setIsShowModal(false)
  noteService.store.commit.setShowNote(resetShowMemo)
}
const deleteNote = () => {
  if (window.confirm('削除しますか')) {
    noteService.delete(showNote.value)
    noteService.store.commit.setIsShowModal(false)
  }
}

watchEffect(() => {
  isShowModal.value = store.getters.isShowModal()
  showNote.value = store.getters.showNote()
})
</script>

<template>
  <div v-if="isShowModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
          {{ 'id' in showNote ? 'メモの更新' : 'メモの保存' }}
        </h5>
        <button
          @click="noteService.store.commit.setIsShowModal(false)"
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <textarea
          v-model="showNote.content"
          name="content"
          rows="10"
          class="form-control"
        >
        </textarea>
      </div>
      <div class="modal-footer">
        <template v-if="'id' in showNote">
          <button @click="deleteNote()" type="button" class="btn btn-danger">
            削除
          </button>
          <button
            @click="updateOrCreateByNote()"
            type="button"
            class="btn btn-primary"
          >
            更新
          </button>
        </template>
        <template v-else>
          <button
            @click="updateOrCreateByNote()"
            type="button"
            class="btn btn-primary"
          >
            保存
          </button>
        </template>
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

    .form-control {
      height: 100%;
    }
  }
}
</style>
