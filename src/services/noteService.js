import { store } from '@/store'
import { noteRepository } from '@/repositories/noteRepository'
import { computed } from 'vue'

export const noteService = {
  getNotes() {
    return noteRepository.get()
  },
  create(note) {
    try {
      note.id = noteRepository.create({
        content: note.content,
        top: note.top,
        left: note.left,
      })
      noteService
        .getNotes()
        .then((response) => noteService.store.commit.setNotes(response))
        .catch((error) => alert(error))
    } catch (exception) {
      alert(exception)
    }
  },
  update(note) {
    try {
      noteRepository.update(note.id, {
        content: note.content,
        top: note.top,
        left: note.left,
      })
    } catch (exception) {
      alert(exception)
    }
  },
  delete(note) {
    try {
      noteRepository.delete(note.id)
      noteService
        .getNotes()
        .then((response) => noteService.store.commit.setNotes(response))
        .catch((error) => alert(error))
    } catch (exception) {
      alert(exception)
    }
  },
  truncate() {
    try {
      noteRepository.truncate()

      noteService
        .getNotes()
        .then((response) => noteService.store.commit.setNotes(response))
        .catch((error) => alert(error))
    } catch (exception) {
      alert(exception)
    }
  },
  store: {
    getters: {
      isShowModal() {
        return computed(() => store.getters['note/isShowModal'])
      },
      notes() {
        return computed(() => store.getters['note/notes'])
      },
      showNote() {
        return computed(() => store.getters['note/showNote'])
      },
    },
    commit: {
      setIsShowModal(bool) {
        store.commit('note/setIsShowModal', bool)
      },
      setNotes(notes) {
        store.commit('note/setNotes', notes)
      },
      setShowNote(note) {
        store.commit('note/setShowNote', note)
      },
    },
  },
}
