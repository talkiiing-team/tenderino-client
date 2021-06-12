<template>
  <div class="flex flex-col justify-between items-center mx-16">
    <h2 class="mb-4">Ваши тендеры</h2>
    <ul class="flex flex-col justify-start items-center border border-black
      rounded-md p-4 w-full">
      <li v-for="item in items" :key="item" :class="background[item.status]"
        class="my-2 flex flex-row w-full justify-between items-center p-3
        rounded-md">
        <div class="flex flex-row items-center">
          <p>{{ item.name }}</p>
          <DotsHorizontalIcon class="ml-2 w-5 h-5" />
        </div>
        <p>{{ item.status }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { DotsHorizontalIcon } from '@heroicons/vue/outline';

export default {
  name: 'EmitterHome',
  components: {
    DotsHorizontalIcon,
  },
  setup() {
    const background = {
      pending: 'bg-yellow-200',
      rejected: 'bg-red-200',
      accepted: 'bg-green-200',
    };

    return {
      items: [
        { name: 'aboba', status: 'pending' },
        { name: 'noutbuk hp 16 gigov', status: 'rejected' },
        { name: 'vitalya', status: 'accepted' },
      ],
      background,
    };
  },
};
</script>
