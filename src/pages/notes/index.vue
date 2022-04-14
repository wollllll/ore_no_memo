<script setup>
import { noteService } from '@/services/noteService'
import { computed } from 'vue'
import { stringHelper } from '@/helpers/stringHelper'

import Base from '@/components/layouts/Base'

const store = noteService.store
const notes = computed(() => store.getters.notes().value)

const dragNote = (event, note) => updatePosition(event, note)
const dragendNote = (event, note) => {
  updatePosition(event, note)
  noteService.update(note)
}
const updatePosition = (event, note) => {
  note.top = event.pageY - 50
  note.left = event.pageX - 50
}
const showModal = (note) => {
  store.commit.setIsShowModal(true)
  store.commit.setShowNote(note)
}
</script>

<template>
  <Base>
    <ul>
      <li
        :key="note.id"
        v-for="note in notes"
        draggable="true"
        class="absolute w-32 h-32 rounded shadow"
        :style="{ top: `${note.top}px`, left: `${note.left}px` }"
        @drag="dragNote($event, note)"
        @dragend="dragendNote($event, note)"
      >
        <div
          class="w-100 h-1/4 flex flex-wrap content-around justify-center bg-gray-200 cursor-move"
        >
          <i class="text-gray-800 bi bi-arrows-move"></i>
        </div>
        <div
          class="w-100 h-3/4 cursor-pointer p-2 overflow-hidden"
          @click="showModal(note)"
        >
          {{ stringHelper.omittedText(note.content, 20) }}
        </div>
      </li>
    </ul>
  </Base>
</template>
