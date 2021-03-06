export const note = {
  namespaced: true,
  state: {
    isShowModal: false,
    notes: [],
    showNote: {},
  },
  getters: {
    isShowModal: (state) => state.isShowModal,
    notes: (state) => state.notes,
    showNote: (state) => state.showNote,
  },
  mutations: {
    setIsShowModal(state, bool) {
      state.isShowModal = bool
    },
    setNotes(state, notes) {
      state.notes = notes
    },
    setShowNote(state, note) {
      state.showNote = note
    },
  },
}
