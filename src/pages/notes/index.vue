<script setup>
import Base from '@/components/layouts/Base'
import { noteService } from '@/services/noteService'
import { ref } from 'vue'

const notes = ref(noteService.store.getters.notes())
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
  noteService.store.commit.setIsShowModal(true)
  noteService.store.commit.setShowNote(note)
}
</script>

<template>
  <Base>
    <ul>
      <li
        class="note card"
        draggable="true"
        :key="note.id"
        v-for="note in notes"
        :style="{ top: `${note.top}px`, left: `${note.left}px` }"
        @drag="dragNote($event, note)"
        @dragend="dragendNote($event, note)"
      >
        <div class="content-box">{{ note.content }}</div>
        <div @click="showModal(note)" class="icon-box">
          <i class="bi bi-caret-down-square"></i>
        </div>
      </li>
    </ul>
  </Base>
</template>

<style lang="scss" scoped>
.note {
  position: absolute;
  border: 1px solid red;
  height: 100px;
  width: 100px;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  .content-box {
    text-align: center;
    height: 70%;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: pre;
  }

  .icon-box {
    display: flex;
    width: 100%;
    height: 30%;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: flex-end;
  }
}
</style>
