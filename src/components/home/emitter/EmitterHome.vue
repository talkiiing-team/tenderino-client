<template>
  <div class="flex flex-col justify-between items-center mx-16">
    <h2 class="mb-4">Ваши тендеры</h2>
    <div class="flex flex-col justify-start items-center border border-black
        rounded-md p-4 w-full">
      <ul class="flex flex-col justify-items-end items-start w-full gap-y-5">
        <li v-for="item in items" :key="item"
            class="flex flex-row justify-between items-start
            border-l-8 rounded-sm shadow-lg w-full px-4 py-2"
            :class="background[item.status]">
          <div class="flex flex-row justify-between items-start w-full gap-x-2">
            <div class="">‣</div>
            <div class="flex flex-row w-full justify-between">
              <p> {{ item.name }}</p>
              <p>{{ item.status }}</p>
            </div>
            <!-- <DotsHorizontalIcon class="ml-2 w-5 h-6"/> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { DotsHorizontalIcon } from '@heroicons/vue/outline';

export default {
  name: 'EmitterHome',
  components: {
    // DotsHorizontalIcon,
  },
  setup() {
    const background = {
      pending: 'border-yellow-200',
      rejected: 'border-red-200',
      accepted: 'border-green-200',
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
