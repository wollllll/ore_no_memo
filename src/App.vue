<script setup>
import NoteIndex from "@/pages/notes/index"
import {onBeforeMount} from 'vue'
import {noteService} from '@/services/noteService'

onBeforeMount(() => {
  noteService.getNotes().then(response => {
    noteService.store.commit.setNotes(response)
  })
})
</script>

<template>
  <NoteIndex/>
</template>
