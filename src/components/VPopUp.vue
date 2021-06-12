<template>
  <div class="">
    <transition name="fade">
      <div v-if="show" :class="colors[type]"
        class="absolute left-1/4 bottom-16 w-2/4 h-16 rounded-xl
          p-4 flex justify-start items-center shadow-xl">
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'VPopUp',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      default: 'fail',
    },
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    const colors = {
      fail: 'bg-red-400',
      warn: 'bg-yellow-400',
      success: 'bg-green-400',
      '': 'bg-red-600',
    };

    return {
      colors,
    };
  },
};
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
</style>
