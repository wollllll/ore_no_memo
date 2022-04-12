import { db } from '@/repositories'

export const noteRepository = {
  async get() {
    return await db.notes.toArray()
  },
  async create(note) {
    return await db.notes.add(note)
  },
  update(id, inputs) {
    db.notes.update(id, inputs)
  },
  truncate() {
    db.notes.clear()
  },
}
