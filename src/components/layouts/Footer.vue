<script setup>
import { noteService } from '@/services/noteService'
import { computed } from 'vue'

import DangerButton from '@/components/DangerButton'

const notes = computed(() => noteService.store.getters.notes().value)
const truncateNote = () => {
  if (!window.confirm('全て削除しますか')) return false

  noteService.truncate()
}
</script>

<template>
  <footer>
    <div class="grid grid-cols-12">
      <div class="col-span-4 col-start-5 text-center">
        <DangerButton v-if="notes.length" @click="truncateNote">
          全て削除
        </DangerButton>
      </div>
    </div>
  </footer>
</template>
