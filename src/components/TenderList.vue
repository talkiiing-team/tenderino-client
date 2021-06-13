<template>
  <div class="flex flex-col justify-items-end items-start w-full gap-y-5">
    <TenderListItem
      v-for="item in items"
      :key="item.id"
      :tender-info="item"
    />
  </div>
</template>

<script>
import TenderListItem from '@/components/TenderListItem.vue';

export default {
  name: 'TenderList',
  components: {
    TenderListItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
    };
  },
};
</script>
