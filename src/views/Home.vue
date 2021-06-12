<template>
  <div class="flex flex-col justify-between h-full w-full pt-8">
    <template v-if="true">
      <EmitterHome />
      <ValidatorHome />
      <TenderForm />
    </template>
    <template v-else>
      <UnsignedHome />
    </template>
    <footer class="h-auto min-w-max flex flex-row items-center justify-start
    border-t border-black">
      <p class="m-4 text-md">
        made with love by /talkiiing in {{ new Date().getFullYear() }}
      </p>
    </footer>
  </div>
</template>

<script>
// import { role, authenticated } from '@/api/authentication';
import { roles } from '@/api/authentication';

import EmitterHome from '@/components/home/emitter/EmitterHome.vue';
import ValidatorHome from '@/components/home/validator/ValidatorHome.vue';
import UnsignedHome from '@/components/home/unsigned/UnsignedHome.vue';
import TenderForm from '@/components/TenderForm.vue';

export default {
  name: 'Home',
  components: {
    TenderForm,
    EmitterHome,
    ValidatorHome,
    UnsignedHome,
  },
  setup() {
    const role = roles.emitter;
    return {
      role,
      roles,
      // authenticated,
    };
  },
};
</script>
