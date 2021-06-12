<template>
  <div
    class="
      flex flex-row justify-between w-full items-center
      border-l-8 rounded-md shadow-lg w-full px-4 h-11
    "
    :class="background[tenderInfo.status]"
  >
    <div class="flex flex-row w-full justify-between">
      <p> {{ tenderInfo.name }}</p>
      <p class="text-gray-400">{{ tenderInfo.status }}</p>
    </div>
    <!-- <DotsHorizontalIcon class="ml-2 w-5 h-6"/> -->
  </div>
</template>

<script>
export default {
  name: 'TenderListItem',
  props: {
    tenderInfo: {
      type: Object,
    },
  },
  setup() {
    const background = {
      pending: 'border-yellow-200',
      rejected: 'border-red-200',
      accepted: 'border-green-200',
    };
    return {
      background,
    };
  },
};
</script>
