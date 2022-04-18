<script setup>
import { noteService } from '@/services/noteService'
import { computed, ref } from 'vue'
import { stringHelper } from '@/helpers/stringHelper'

import Base from '@/components/layouts/Base'
import { initInteract } from '@/plugins/interact'

const store = noteService.store
const notes = computed(() => store.getters.notes().value)

const setNoteRef = (element) => {
  if (!element) return false

  noteService
    .findByNoteId(parseInt(element.dataset.noteId))
    .then((response) => {
      const screenX = ref(response.left)
      const screenY = ref(response.top)

      initInteract({
        element,
        screenX,
        screenY,
        note: response,
      })
    })
}
const showModal = (note) => {
  store.commit.setIsShowModal(true)
  store.commit.setShowNote(note)
}
</script>

<template>
  <Base>
    <div
      :ref="setNoteRef"
      v-for="note in notes"
      :key="note.id"
      :data-note-id="note.id"
      :style="{ transform: `translate(${note.left}px, ${note.top}px)` }"
      class="absolute w-32 h-32 rounded shadow"
    >
      <div
        class="w-100 h-1/4 flex flex-wrap content-around justify-center bg-gray-200 cursor-move"
      >
        <i class="text-gray-800 bi bi-arrows-move"></i>
      </div>
      <div
        class="w-100 h-3/4 cursor-pointer p-2 overflow-hidden bg-gray-100"
        @click="showModal(note)"
      >
        {{ stringHelper.omittedText(note.content, 20) }}
      </div>
    </div>
  </Base>
</template>
