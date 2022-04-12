import {createStore} from 'vuex'
import {note} from '@/store/note'

export const store = createStore({
  modules: {
    note,
  }
})


