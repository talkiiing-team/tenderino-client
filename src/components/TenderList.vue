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
  setup() {
    const items = [
      { id: 1, name: 'aboba', status: 'pending' },
      { id: 2, name: 'noutbuk hp 16 gigov', status: 'rejected' },
      { id: 3, name: 'vitalya', status: 'accepted' },
    ];
    return {
      items,
    };
  },
};
</script>
