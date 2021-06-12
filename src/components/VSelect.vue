<template>
  <div class="
    w-full relative select-none
  ">
    <transition name="fade">
      <div
        v-if="toggled && selectedDisplay"
        class="
          absolute -top-8 rounded-t-md text-xs text-gray-400 bg-white pt-3 pb-1 px-4 left-0 w-full
          z-10
        ">
        {{ placeholder }}
      </div>
    </transition>
    <div class="
      flex flex-row justify-between items-center h-10 px-4 cursor-pointer relative z-10
      bg-white hover:bg-gray-50 transition-all duration-200 group
    " :class="{
      'shadow-inner-md rounded-lg': !toggled,
    }" @click="toggle">
      <span
        class="transition-all duration-300"
        :class="selectedDisplay ? 'text-black' : 'text-gray-400'"
      >
        {{ selectedDisplay || placeholder }}
      </span>
      <ChevronDownIcon
        class="
          h-4 text-gray-400 w-4 transform transition-all duration-300
        "
        :class="{
          'rotate-180': toggled,
        }"
      />
    </div>
    <transition name="fade">
      <div
        v-if="toggled"
        class="
          grid grid-flow-row absolute top-0 left-0 pt-10 bg-white shadow-xl rounded-lg w-full
        "
      >
        <div
          v-for="{ value, display } in trimmedList"
          :key="value"
          class="
            px-4 py-2.5 r2 select-none cursor-pointer hover:bg-gray-100
            transition-colors duration-200
          "
          @click="select(value)"
        >{{ display }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/outline';

export default {
  name: 'VSelect',
  components: {
    ChevronDownIcon,
  },
  props: {
    options: {
      // [{ display: 'Дисплей Нейм', value: 'code_value' }]
      type: Array,
      required: true,
    },
    modelValue: {
      // code_value
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  setup(props, { emit }) {
    const toggled = ref(false);
    const toggle = () => { toggled.value = !toggled.value; };
    const select = (option) => {
      emit('update:modelValue', option);
      toggle();
    };
    const selectedDisplay = computed(() => {
      const selectedElement = props.options.find(({ value }) => value === props.modelValue);
      return selectedElement && selectedElement.display;
    });
    const trimmedList = computed(
      () => props.options.filter(({ value }) => value !== props.modelValue),
    );
    return {
      toggle,
      toggled,
      select,
      selectedDisplay,
      trimmedList,
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
