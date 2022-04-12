<script setup>
import MemoIndex from "@/pages/memos/index"
import {onBeforeMount} from 'vue'
import {noteService} from '@/services/noteService'

onBeforeMount(() => {
  noteService.getNotes().then(response => {
    noteService.store.commit.setNotes(response)
  })
})
</script>

<template>
  <MemoIndex/>
</template>
