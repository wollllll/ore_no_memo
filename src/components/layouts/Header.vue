<script setup>
import Modal from '@/components/Modal'
import { noteService } from '@/services/noteService'
import { computed } from 'vue'

const store = noteService.store
const showNote = computed(() => store.getters.showNote().value)
const isShowModal = computed(() => store.getters.isShowModal().value)
const showModal = () => {
  store.commit.setIsShowModal(true)
  store.commit.setShowNote({})
}
const updateOrCreateByNote = () => {
  'id' in showNote.value
    ? noteService.update(showNote.value)
    : noteService.create(showNote.value)
  store.commit.setIsShowModal(false)
  store.commit.setShowNote({})
}
const deleteNote = () => {
  if (window.confirm('削除しますか')) {
    noteService.delete(showNote.value)
    store.commit.setIsShowModal(false)
  }
}
</script>

<template>
  <header>
    <div class="row">
      <div class="col-4 offset-4">
        <h1 class="title">俺のメモ</h1>
      </div>
      <div class="col-4 btn-create-note">
        <button @click="showModal()" class="btn btn-primary">+</button>
      </div>
    </div>
    <Modal v-if="isShowModal">
      <template #title>{{
        showNote.id ? 'メモの更新' : 'メモの保存'
      }}</template>
      <template #body>
        <textarea
          v-model="showNote.content"
          name="content"
          rows="10"
          class="form-control"
        >
        </textarea>
      </template>
      <template #footer>
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
      </template>
    </Modal>
  </header>
</template>

<style lang="scss" scoped>
header {
  .title {
    text-align: center;
    font-size: 32px;
  }

  .btn-create-note {
    text-align: right;
  }

  .form-control {
    height: 100%;
  }
}
</style>
