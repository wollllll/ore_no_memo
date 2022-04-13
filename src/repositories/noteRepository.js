import { db } from '@/repositories'

export const noteRepository = {
  /**
   * 一覧を取得
   *
   * @returns {Promise<*>}
   */
  async get() {
    return await db.notes.toArray()
  },
  /**
   * 保存
   *
   * @param note
   * @returns {Promise<*>}
   */
  async create(note) {
    return await db.notes.add(note)
  },
  /**
   * 更新
   *
   * @param id
   * @param inputs
   */
  update(id, inputs) {
    db.notes.update(id, inputs)
  },
  /**
   * 削除
   *
   * @param id
   */
  delete(id) {
    db.notes.delete(id)
  },
  /**
   * 全削除
   */
  truncate() {
    db.notes.clear()
  },
}
