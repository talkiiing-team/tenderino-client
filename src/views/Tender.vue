<template>
  <div v-if="tender" class="py-8  ">
    <h1 class="pb-4">Информация о тендере</h1>
    <h3>{{ `${tender.name} (${tender.metric})` }}</h3>
    <p class="mb-3 text-gray-400">{{ `${tender.category}` }}</p>
    <img class="w-full max-w-md object-cover mb-2"
      :src="tender.imagePrepared?tender.imagePrepared:tender.image"
      :class="tender.imagePrepared?'':'h-72'">

    <Paragraph v-if="tender.reason && tender.reason.photo" class="mb-2">
      {{ tender.reason.photo }}
    </Paragraph>

    <p v-html="highlightedDescription"></p>

    <!--  Table  -->
    <div class="flex flex-col w-full mt-4 divide-y gap-y-2"
      v-if="tender.details.length > 0">
      <div class="w-full grid grid-cols-table text-gray-400 font-medium">
        <div>Характеристика</div>
        <div>Значение</div>
      </div>
      <div
        v-for="{ name, value, unitCode } in tender.details"
        :key="name"
        class="w-full grid grid-cols-table"
      >
        <div>{{ name }}</div>
        <div>{{ `${value} ${unitCode?unitCode:''}` }}</div>
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
    const route = useRoute();

    const validating = route.path.includes('validator');
    const { id } = route.params;

    // eslint-disable-next-line no-underscore-dangle
    const tender = tenders.value.find((i) => i._id === id);

    onMounted(() => {
      fetchTenders();
    });

    const highlightedDescription = computed(() => {
      if (tender.censorita) {
        return tender.description.split(/[\s,.!?:]/).map((v) => (tender.censorita.includes(v) ? `<span class="text-red-400 font-bold">${v}</span>` : v)).join(' ');
      }
      return tender.description;
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
      highlightedDescription,
    };
  },
};
</script>
