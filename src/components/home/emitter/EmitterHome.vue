<template>
  <div class="flex flex-col justify-between items-center mb-10 w-full">
    <h2 class="mb-4">Ваши тендеры</h2>
    <TenderList />
    <h3 class="mt-14 mb-4">Создать тендер</h3>
    <TenderForm />
  </div>
</template>

<script>
import TenderForm from '@/components/TenderForm.vue';
import TenderList from '@/components/TenderList.vue';

export default {
  name: 'EmitterHome',
  components: {
    TenderList,
    TenderForm,
  },
};
</script>
