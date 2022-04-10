import {db} from '@/repositories'

export const memoRepository = {
    async all() {
        return await db.memos.toArray()
    },
    async create(memo) {
        return db.transaction("rw", db.memos, () => {
            return db.memos.add(memo)
        });
    },
    async truncate() {
        await db.memos.clear()
    }
}