<template>
  <textarea :value="modelValue" @input="handleInput" :placeholder="placeholder" class="
    h-24 py-3 shadow-inner-md focus:shadow-inner-lg rounded-md px-4 focus:outline-none outline-none
    hover:bg-gray-50 duration-200 transition-all
  "></textarea>
</template>

<script>
export default {
  name: 'VTextArea',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  setup(_, { emit }) {
    const handleInput = ({ target }) => emit('update:modelValue', target.value);
    return {
      handleInput,
    };
  },
};
</script>
