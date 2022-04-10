<template>
  <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">メモを追加</h5>
          <button ref="closeModal" type="button" class="btn-close" data-bs-dismiss="modal"
                  aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <textarea v-model="form.memo.content" name="content" rows="10" class="form-control"></textarea>
        </div>
        <div class="modal-footer">
          <template v-if="form.memo.id">
            <button @click="deleteMemo(form.memo)" type="button" class="btn btn-danger">削除</button>
            <button @click="putMemo(form.memo)" type="button" class="btn btn-primary">更新</button>
          </template>
          <template v-else>
            <button @click="createMemo()" type="button" class="btn btn-primary">追加</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>