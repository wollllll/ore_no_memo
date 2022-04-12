<script setup>
import {ref, watchEffect} from 'vue'
import {noteService} from '@/services/noteService'

const store = noteService.store
const isShowModal = ref(store.getters.isShowModal())
const showNote = ref(store.getters.showNote())

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
      <button type="button" class="btn btn-primary">更新</button>
    </template>
    <template v-else>
      <button @click="noteService.create(showNote.content)" type="button" class="btn btn-primary">追加</button>
    </template>
  </div>
</template>
