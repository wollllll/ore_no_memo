import Dexie from 'dexie';

export const db = new Dexie('zatsu_memo');
db.version(1).stores({
    notes: '++id, content, top, left'
});
