import Dexie from 'dexie'

export const db = new Dexie('俺のメモ')
export const mode = 'rw'
db.version(1).stores({
  notes: '++id, content, top, left',
})
