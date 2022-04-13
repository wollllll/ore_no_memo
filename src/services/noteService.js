import { store } from '@/store'
import { noteRepository } from '@/repositories/noteRepository'
import { computed } from 'vue'

export const noteService = {
  /**
   * メモ一覧を取得
   *
   * @returns {Promise<*>}
   */
  getNotes() {
    return noteRepository.get()
  },
  /**
   * メモの作成
   *
   * @param note
   */
  create(note) {
    try {
      note.id = noteRepository.create({
        content: note.content,
        top: 0,
        left: 0,
      })
      noteService
        .getNotes()
        .then((response) => noteService.store.commit.setNotes(response))
        .catch((error) => alert(error))
    } catch (exception) {
      alert(exception)
    }
  },
  /**
   * メモの更新
   *
   * @param note
   */
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
  /**
   * メモの削除
   *
   * @param note
   */
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
  /**
   * メモの全削除
   */
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
      /**
       * モーダル表示判定を取得
       *
       * @returns {any}
       */
      isShowModal() {
        return computed(() => store.getters['note/isShowModal'])
      },
      /**
       * メモ一覧を取得
       *
       * @returns {any}
       */
      notes() {
        return computed(() => store.getters['note/notes'])
      },
      /**
       * モーダルで表示するメモを取得
       *
       * @returns {any}
       */
      showNote() {
        return computed(() => store.getters['note/showNote'])
      },
    },
    commit: {
      /**
       * モーダル表示判定を保存
       *
       * @param bool
       */
      setIsShowModal(bool) {
        store.commit('note/setIsShowModal', bool)
      },
      /**
       * メモ一覧を保存
       *
       * @param notes
       */
      setNotes(notes) {
        store.commit('note/setNotes', notes)
      },
      /**
       * モーダルで表示するメモを保存
       *
       * @param note
       */
      setShowNote(note) {
        store.commit('note/setShowNote', note)
      },
    },
  },
}
