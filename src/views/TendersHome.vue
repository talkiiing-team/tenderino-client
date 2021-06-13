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
import { useRoute } from 'vue-router';
import { tenders, fetchTenders } from '@/api/index';
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

    fetchTenders();

    return {
      tenders,
      emitting,
    };
  },
};
</script>
