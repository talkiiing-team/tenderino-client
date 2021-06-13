<template>
  <div v-if="tender" class="py-8  ">
    <h1 class="pb-4">Информация о тендере</h1>
    <h3>{{ `${tender.name} (${tender.metric})` }}</h3>
    <p class="mb-3 text-gray-400">{{ `${tender.class}, ${tender.category}` }}</p>
    <img class="w-full max-w-md h-72 object-cover mb-2" :src="tender.image">

    <Paragraph v-if="tender.reason && tender.reason.photo" class="mb-2">
      {{ tender.reason.photo }}
    </Paragraph>

    <p>{{ tender.description }}</p>

    <!--  Table  -->
    <div class="flex flex-col w-full mt-4 divide-y gap-y-2">
      <div class="w-full grid grid-cols-table text-gray-400 font-medium">
        <div>Харкатеристика</div>
        <div>Значение</div>
      </div>
      <div
        v-for="{ name, value, metric } in tender.details"
        :key="name"
        class="w-full grid grid-cols-table"
      >
        <div>{{ name }}</div>
        <div>{{ `${value} ${metric}` }}</div>
      </div>
    </div>
    <div v-if="validating"
      class="flex flex-row mt-4">
      <VButton @click="validate()"
        class="bg-white text-green-400 border-2 border-green-400
        hover:bg-green-400 hover:text-white"
      >Подтвердить</VButton>
      <VButton @click="reject()"
        class="ml-4 bg-white text-red-400 border-2 border-red-400
        hover:bg-red-400 hover:text-white"
      >Отклонить</VButton>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { tenders, fetchTenders } from '@/api/index';
import Paragraph from '@/components/Paragraph.vue';
import VButton from '@/components/VButton.vue';

export default {
  name: 'EmitterTender',
  components: {
    Paragraph,
    VButton,
  },
  setup() {
    const validating = useRoute().path.includes('validator');
    const { id } = useRoute().params.id;

    console.log(tenders.value);

    // eslint-disable-next-line no-underscore-dangle
    const tender = tenders.value.find((i) => i._id === id);
    // const tender = tenders.value[0];
    console.log(tender);

    onMounted(() => {
      fetchTenders();
    });

    // console.log(tenders.find((i) => i._id === id));

    const background = computed(() => tender && ({
      pending: 'border-blue-200',
      rejected: 'border-red-200',
      accepted: 'border-green-200',
      moderation: 'border-yellow-200',
      'request-info': 'border-yellow-400',
    }[tender.status]));

    const validate = async () => {};
    const reject = async () => {};

    return {
      tender,
      background,
      validating,
      validate,
      reject,
    };
  },
};
</script>
