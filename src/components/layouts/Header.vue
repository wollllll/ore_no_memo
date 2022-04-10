<template>
  <header class="row">
    <div class="col-4 offset-4">
      <h1 class="title">zatsu-memoRepository</h1>
    </div>
    <div class="col-4 create-memo">
      <button
          @click="resetFormMemo()"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modal">
        +
      </button>
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  methods: {
    resetFormMemo() {
      this.$emit('resetFormMemo');
    },
  }
}
</script>

<style lang="scss">
header {
  padding: 12px 0;

  .title {
    text-align: center;
    font-size: 30px;
  }

  .create-memo {
    text-align: right;
  }
}
</style>