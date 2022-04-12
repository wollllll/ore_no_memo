import {store} from '@/store'
import {noteRepository} from '@/repositories/noteRepository'
import {computed} from 'vue'

export const noteService = {
  getNotes() {
    return noteRepository.get()
  },
  create(content) {
    try {
      const note = {
        content: content,
        top: 0,
        left: 0
      }

      note.id = noteRepository.create(note)
      noteService.getNotes().then(response => {
        noteService.store.commit.setNotes(response)
      })
      noteService.store.commit.setIsShowModal(false)
    } catch (exception) {
      alert(exception)
    }
  },
  update(note) {
    try {
      noteRepository.update(note.id, {
        content: note.content,
        top: note.top,
        left: note.left
      })
    } catch (exception) {
      alert(exception)
    }
  },
  truncate() {
    try {
      noteRepository.truncate()

      noteService.getNotes().then(response => {
        noteService.store.commit.setNotes(response)
      })
    } catch (exception) {
      alert(exception)
    }
  },
  store: {
    getters: {
      isShowModal() {
        return computed(() => store.getters['todo/isShowModal'])
      },
      notes() {
        return computed(() => store.getters['todo/notes'])
      },
      showNote() {
        return computed(() => store.getters['todo/showNote'])
      }
    },
    commit: {
      setIsShowModal(bool) {
        store.commit('todo/setIsShowModal', bool)
      },
      setNotes(notes) {
        store.commit('todo/setNotes', notes)
      },
      setShowNote(note) {
        store.commit('todo/setShowNote', note)
      }
    }
  }
}