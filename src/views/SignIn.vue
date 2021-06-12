<template>
  <div class="flex flex-col justify-center items-center h-full">
    <h1 class="mb-4">Вход</h1>
    <div class="border border-black rounded-xl p-4 w-2/5 mb-4 shadow-lg">
      <div class="flex flex-col justify-start items-start mb-4">
        <p class="">Email</p>
        <input type="email" class="w-full"
          placeholder="Введите электронную почту" v-model="email"
          />
      </div>
      <div>
        <p class="">Пароль</p>
        <input type="password" class="w-full"
          placeholder="Введите пароль" v-model="password" />
      </div>
    </div>
    <button class="w-2/5 h-12 border border-black
      rounded-lg flex justify-center items-center shadow-lg"
      @click="login()">Войти</button>
    <VPopUp :type="popup.type" :message="popup.message" :show="popup.show" />
  </div>
</template>

<script>
// import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
// import { signIn } from '@/api/authentication';

import VPopUp from '@/components/VPopUp.vue';

export default {
  name: 'SignIn',
  components: {
    VPopUp,
  },
  setup() {
    // const router = useRouter();
    const email = ref('');
    const password = ref('');
    const popup = reactive({
      message: '',
      type: '',
      show: false,
    });

    const login = async () => {
      // const success = await signIn(creditionals);
      // if (success) router.push('/');
      // else {
      popup.message = 'Ошибка входа';
      popup.type = 'fail';
      popup.show = true;
      setTimeout(() => { popup.show = false; }, 3000);
      // }
    };

    return {
      login,
      email,
      password,
      popup,
    };
  },
};
</script>
