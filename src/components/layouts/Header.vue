<script setup>
import { noteService } from '@/services/noteService'
import { computed } from 'vue'

import Modal from '@/components/Modal'
import PrimaryButton from '@/components/PrimaryButton'
import DangerButton from '@/components/DangerButton'

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
    <div class="grid grid-cols-12">
      <div class="col-span-4 col-start-5">
        <h1 class="text-3xl font-bold underline text-center">
          &nbsp;俺のメモ&nbsp;
        </h1>
      </div>
      <div class="col-span-4 text-right">
        <PrimaryButton class="py-1.5 px-2.5" @click="showModal()">
          <i class="bi bi-plus text-xl"></i>
        </PrimaryButton>
      </div>
    </div>
    <Modal v-if="isShowModal">
      <template #title
        >{{ showNote.id ? 'メモの更新' : 'メモの作成' }}
      </template>
      <template #body>
        <textarea
          v-model="showNote.content"
          name="content"
          rows="10"
          class="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        >
        </textarea>
      </template>
      <template #footer>
        <template v-if="showNote.id">
          <div class="ml-auto">
            <DangerButton @click="deleteNote()"> 削除 </DangerButton>
            <PrimaryButton class="ml-2" @click="updateOrCreateByNote()">
              更新
            </PrimaryButton>
          </div>
        </template>
        <template v-else>
          <PrimaryButton class="ml-auto" @click="updateOrCreateByNote()">
            作成
          </PrimaryButton>
        </template>
      </template>
    </Modal>
  </header>
</template>
