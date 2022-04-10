import Dexie from 'dexie';

export const db = new Dexie('zatsu_memo');
db.version(1).stores({
    memos: '++id, content, top, left'
});
