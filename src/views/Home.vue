<template>
  <div class="flex flex-col w-full h-full justify-center items-center">
    <h2 class="mb-7">Добро пожаловать в tenderino!</h2>
    <router-link to="/emitter" class="mb-2">Я поставщик</router-link>
    <router-link to="/validator">Я модератор</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
