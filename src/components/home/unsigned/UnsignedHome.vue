<template>
  <div class="flex flex-col justify-start items-center w-4/6 self-center">
    <h1 class="mb-8">Платформа приколов</h1>
    <div class="flex flex-col justify-between items-center">
      <h2 class="text-center mb-8 mx-3">
        Добро пожаловать на инновационную платформу для тендерных закупок.
        Теперь вы можете сэкономить свое время и деньги благодаря технологиям
        машинного обучения. Будьте успешными вместе с нами!
      </h2>
      <button class="w-2/6 h-12 border border-black shadow-lg
        rounded-lg flex justify-center items-center"
        @click="router.push('/signin')">
        Войти
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'UnsignedHome',
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
};
</script>
