<script setup>
import {ref, watchEffect} from 'vue'
import {noteService} from '@/services/noteService'

const store = noteService.store
const isShowModal = ref(store.getters.isShowModal())
const showNote = ref(store.getters.showNote())
const updateOrCreateByNote = () => {
  const resetShowMemo = {
    content: null,
    top: 0,
    left: 0
  }

  'id' in showNote.value ? noteService.update(showNote.value) : noteService.create(showNote.value)
  noteService.store.commit.setIsShowModal(false)
  noteService.store.commit.setShowNote(resetShowMemo)
}

watchEffect(() => {
  isShowModal.value = store.getters.isShowModal()
  showNote.value = store.getters.showNote()
})
</script>

<template>
  <div v-if="isShowModal" class="container position-absolute">
    <div>{{ showNote }}</div>
    <textarea v-model="showNote.content" name="content" rows="10" class="form-control"></textarea>
    <template v-if="'id' in showNote">
      <button @click="updateOrCreateByNote()" type="button" class="btn btn-primary">更新</button>
    </template>
    <template v-else>
      <button @click="updateOrCreateByNote()" type="button" class="btn btn-primary">追加</button>
    </template>
  </div>
</template>
