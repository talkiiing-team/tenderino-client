<template>
  <div class="">
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'Tender',
  setup() {
    const router = useRouter();
    const tender = { router };

    return {
      tender,
    };
  },
};
</script>
