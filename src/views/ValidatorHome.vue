<template>
  <div class="flex flex-col justify-between items-center mb-10 w-full py-32">
    <h2 class="mb-4">Ваши тендеры</h2>
    <TenderList :items="tenders" />
  </div>
</template>

<script>
import TenderList from '@/components/TenderList.vue';

export default {
  name: 'ValidatorHome',
  components: {
    TenderList,
  },
  setup() {
    const tenders = [
      { id: 1, name: 'aboba', status: 'pending' },
      { id: 2, name: 'noutbuk hp 16 gigov', status: 'moderation' },
      { id: 3, name: 'vitalya', status: 'request-info' },
      { id: 4, name: 'pasha', status: 'rejected' },
      { id: 4, name: 'hello', status: 'accepted' },
    ].filter((i) => i.status === 'moderation');
    return {
      tenders,
    };
  },
};
</script>
