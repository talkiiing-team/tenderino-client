<template>
  <div class="flex flex-col justify-between items-center mb-10 w-full py-32">
    <h2 class="mb-4">Ваши тендеры</h2>
    <TenderList :items="tenders" />
    <template v-if="emitting">
      <h3 class="mt-14 mb-4">Создать тендер</h3>
      <TenderForm />
    </template>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Axios from 'axios';
import TenderForm from '@/components/TenderForm.vue';
import TenderList from '@/components/TenderList.vue';

export default {
  name: 'EmitterHome',
  components: {
    TenderList,
    TenderForm,
  },
  setup() {
    const { path } = useRoute();
    const emitting = path.includes('emitter');

    const tenders = ref([
      { id: 1, name: 'aboba', status: 'pending' },
      { id: 2, name: 'noutbuk hp 16 gigov', status: 'moderation' },
      { id: 3, name: 'vitalya', status: 'request-info' },
      { id: 4, name: 'pasha', status: 'rejected' },
      { id: 4, name: 'hello', status: 'accepted' },
    ]);

    Axios.get('/tickets')
      .then((res) => { tenders.value = res.data.data; });

    return {
      tenders,
      emitting,
    };
  },
};
</script>
