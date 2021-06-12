<template>
  <div class="flex flex-col justify-between h-full w-full pt-32">
    <template v-if="true">
      <EmitterHome />
      <ValidatorHome />
    </template>
    <template v-else>
      <UnsignedHome />
    </template>
  </div>
</template>

<script>
// import { role, authenticated } from '@/api/authentication';
import { roles } from '@/api/authentication';

import EmitterHome from '@/components/home/emitter/EmitterHome.vue';
import ValidatorHome from '@/components/home/validator/ValidatorHome.vue';
import UnsignedHome from '@/components/home/unsigned/UnsignedHome.vue';

export default {
  name: 'Home',
  components: {
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
