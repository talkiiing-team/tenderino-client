<template>
  <router-link
    class="
      flex flex-row justify-between w-full items-center
      border-l-8 rounded-md shadow-lg w-full px-4 h-11
      text-black
    "
    :class="background"
    :to="`${path}/tender/${tenderInfo._id}`"
  >
    <div class="flex flex-row w-full justify-between">
      <p> {{ tenderInfo.name }}</p>
      <p class="text-gray-400">{{ status }}</p>
    </div>
    <!-- <DotsHorizontalIcon class="ml-2 w-5 h-6"/> -->
  </router-link>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'TenderListItem',
  props: {
    tenderInfo: {
      type: Object,
    },
  },
  setup(props) {
    // const route = useRoute();
    const { path } = useRoute();
    // console.log(path[path.length - 1].replace('/', ''));
    // console.log(path);

    const background = computed(() => ({
      pending: 'border-blue-200 hover:text-blue-200',
      rejected: 'border-red-200 hover:text-red-200',
      accepted: 'border-green-200 hover:text-green-200',
      moderation: 'border-yellow-200 hover:text-yellow-200',
      'request-info': 'border-yellow-400 hover:text-yellow-400',
    }[props.tenderInfo.status]));
    const status = computed(() => ({
      pending: 'Обработка',
      rejected: 'Отклонено',
      accepted: 'Принято',
      moderation: 'На модерации',
      'request-info': 'Требуются правки',
    }[props.tenderInfo.status]));
    return {
      background,
      status,
      path,
    };
  },
};
</script>
