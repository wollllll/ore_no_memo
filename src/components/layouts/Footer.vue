<script setup>
import {noteService} from "@/services/noteService"
import {ref} from 'vue'

const notes = ref(noteService.store.getters.notes())
const truncateNote = () => {
  if (window.confirm('全て削除します。')) {
    noteService.truncate()
  }
}
</script>

<template>
  <footer class="row">
    <div v-if="notes.length" class="col-4 offset-4 text-center">
      <button @click="truncateNote" type="button" class="btn btn-danger">全て削除</button>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin: 12px;
}
</style>