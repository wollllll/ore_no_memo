<script setup>
import { noteService } from '@/services/noteService'
import { computed } from 'vue'

const notes = computed(() => noteService.store.getters.notes().value)
const truncateNote = () => {
  if (!window.confirm('全て削除しますか')) return false

  noteService.truncate()
}
</script>

<template>
  <footer class="row">
    <div v-if="notes.length" class="col-4 offset-4 text-center">
      <button @click="truncateNote" type="button" class="btn btn-danger">
        全て削除
      </button>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin: 12px;
}
</style>
