<template>
  <footer class="row">
    <div class="col-4 offset-4 text-center">
      <button @click="truncateMemo()" type="button" class="btn btn-danger">全て削除</button>
    </div>
  </footer>
</template>

<script>
import { repository } from "@/repositories";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
  methods: {
    truncateMemo() {
      repository.memo.truncate()

      this.$emit('resetMemos');
    },
  }
}
</script>

<style lang="scss">
footer {
  margin: 12px;
}
</style>