<template>
  <div class="container-fluid">
    <Header @resetFormMemo="resetFormMemo"/>
    <slot></slot>
    <Footer @resetMemos="resetMemos"/>
  </div>
</template>

<script>
import { db } from '@/repositories'
import { memoRepository } from "@/repositories/memoRepository";
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Base',
  components: {Footer, Header},
  data() {
    return {
      form: {
        memo: {
          id: null,
          content: null,
          top: 0,
          left: 0
        }
      },
      memos: [],
    }
  },
  methods: {
    async createMemo() {
      const memo = {
        content: this.form.memo.content,
        top: 0,
        left: 0
      }
      memoRepository.create(memo)
          .then(memoId => {
            memo.id = memoId
            this.memos.push(memo)
            this.form.memo.content = ''
            this.$refs.closeModal.click()
          })
          .catch(error => alert(error))
    },
    async putMemo(memo) {
      try {
        const memoId = memo.id
        await db.memos.put({
          id: memo.id,
          content: memo.content,
          top: memo.top,
          left: memo.left
        });

        this.memos.find(memo => memo.id === memoId).content = memo.content
        this.$refs.closeModal.click()
      } catch (error) {
        alert(error)
      }
    },
    async deleteMemo(memo) {
      try {
        const memoId = memo.id
        await db.memos.delete(memo.id)

        this.memos = this.memos.filter(memo => memo.id !== memoId)
        this.$refs.closeModal.click()
      } catch (error) {
        alert(error)
      }
    },
    resetMemos() {
      this.memos = []
    },
    resetFormMemo() {
      this.form.memo = {
        id: null,
        content: null,
        top: null,
        left: null
      }
    },
    setShowMemo(memo) {
      this.form.memo = {
        id: memo.id,
        content: memo.content,
        top: memo.top,
        left: memo.left
      }
    },
    dragMemo(event, memo) {
      this.updatePosition(event, memo)
    },
    dragendMemo(event, memo) {
      this.updatePosition(event, memo)
      this.putMemo(memo)
    },
    updatePosition(event, memo) {
      memo.top = event.pageY - 50
      memo.left = event.pageX - 50
    }
  },
  created() {
    memoRepository.all()
        .then(memos => this.memos = memos)
        .catch(error => alert(error))
  }
}
</script>

<style lang="scss">
.container-fluid {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-flow: column;
  height: 100vh;
  margin: 0;

  main {
    flex: 1;

    .memo {
      position: absolute;
      border: 1px solid red;
      height: 100px;
      width: 100px;
      cursor: grab;

      &:active {
        cursor: grabbing;
      }

      .content-box {
        text-align: center;
        height: 70%;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: pre
      }

      .icon-box {
        display: flex;
        width: 100%;
        height: 30%;
        flex-flow: wrap;
        justify-content: space-around;
        align-items: flex-end;
      }
    }
  }
}
</style>
