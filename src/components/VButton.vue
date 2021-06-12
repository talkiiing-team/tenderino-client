<template>
  <component
    :is="tag"
    class="
      h-11 rounded-md shadow-md text-black hover:bg-gray-100 transition-colors duration-200
      flex items-center justify-center select-none cursor-pointer
    "
  ><slot></slot></component>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
};
</script>
