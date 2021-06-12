<template>
  <div class="flex flex-row justify-between items-center mx-16">
    <div class="flex flex-col justify-start items-start">
      <h2 class="mb-4">Ваши тендеры</h2>
      <ul class="flex flex-col justify-start items-center border border-black
        rounded-md p-4 w-64">
        <li v-for="item in items" :key="item"
          class="my-2 flex flex-row w-full justify-between items-center p-1">
          <p>{{ item.name }}</p>
          <p>{{ item.status }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmitterHome',
  setup() {
    return {
      items: [
        { name: 'aboba', status: 'pending' },
        { name: 'noutbuk hp 16 gigov', status: 'rejected' },
      ],
    };
  },
};
</script>
