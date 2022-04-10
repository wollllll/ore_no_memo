<template>
  <Base>
    <main>
      <ul>
        <li
            :ref="`memo_${memo.id}`"
            class="memo card"
            draggable="true"
            :key="memo.id"
            v-for="memo in memos"
            :style="{top: `${memo.top}px`, left: `${memo.left}px`}"
            @drag="dragMemo($event, memo)"
            @dragend="dragendMemo($event, memo)"
        >
          <div class="content-box">{{ memo.id }}{{ memo.content }}</div>
          <div class="icon-box"><i class="bi bi-caret-down-square" data-bs-toggle="modal" data-bs-target="#modal"
                                   @click="setShowMemo(memo)"></i></div>
        </li>
      </ul>
    </main>
  </Base>
</template>

<script>
import Base from "@/components/layouts/Base";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'index',
  components: {
    Base
  },
  methods: {
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
  }
}
</script>