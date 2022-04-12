import {db} from '@/repositories'

export const noteRepository = {
  async get() {
    return await db.memos.toArray()
  },
  async create(note) {
    return await db.memos.add(note)
  },
  update(id, inputs) {
    db.memos.update(id, inputs)
  },
  truncate() {
    db.memos.clear()
  }
}