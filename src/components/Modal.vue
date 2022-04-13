<script setup>
import { noteService } from '@/services/noteService'
</script>

<template>
  <div class="bg-black/50 absolute w-full h-full top-0 left-0 z-10">
    <div
      class="bg-white rounded absolute w-1/3 h-1/2 top-0 left-0 right-0 bottom-0 m-auto z-20"
    >
      <div
        class="flex justify-between items-center p-2 rounded-t border-b dark:border-gray-600"
      >
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          <slot name="title" />
        </h3>
        <button
          @click="noteService.store.commit.setIsShowModal(false)"
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm py-1.5 px-2.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="medium-modal"
        >
          <i class="text-lg bi bi-x"></i>
        </button>
      </div>
      <div class="p-2">
        <slot name="body" />
      </div>
      <!-- Modal footer -->
      <div
        class="p-2 flex items-center p-3rounded-b border-t border-gray-200 dark:border-gray-600"
      >
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
