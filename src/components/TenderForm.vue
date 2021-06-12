<template>
  <form class="w-full flex flex-col rounded-md p-4 shadow-lg gap-y-4">
    <VImageInput v-model="product.image" />
    <VInput v-model="product.name"
      placeholder="Название продукта" />
    <VInput v-model="product.metric"
      placeholder="Единица измерения" />
    <VSelect v-model="product.category"
      :options="categories"
      placeholder="Категория продукции" />
    <VTextArea v-model="product.description"
      placeholder="Описание" />
    <div class="w-full flex flex-col gap-y-4">
      <div
        v-for="detail in product.details"
        :key="product.details.indexOf(detail)"
        class="w-full flex flex-col gap-y-2"
      >
        <VInput
          v-model="detail.name"
          placeholder="Характеристика"
        />
        <div class="flex flex-row w-full gap-x-2">
          <VInput
            class="w-full"
            v-model="detail.value"
            placeholder="Значение"
          />
          <VInput
            v-model="detail.metric"
            placeholder="Единица измерения"
          />
        </div>
      </div>
      <div class="
        flex flex-row items-center justify-center text-gray-400 hover:text-black cursor-pointer
        transition-all duration-200 mt-2
      " @click="addDetail">
        <PlusIcon class="h-5 w-5 mr-3" />
        Добавить характеристику
      </div>
    </div>
    <VButton tag="button">Создать</VButton>
  </form>
</template>

<script>
import { reactive } from 'vue';
import { PlusIcon } from '@heroicons/vue/outline';
import VInput from '@/components/VInput.vue';
import VSelect from '@/components/VSelect.vue';
import VButton from '@/components/VButton.vue';
import VImageInput from '@/components/VImageInput.vue';
import VTextArea from '@/components/VTextArea.vue';

export default {
  name: 'TenderForm',
  components: {
    VTextArea,
    VImageInput,
    VButton,
    VSelect,
    VInput,
    PlusIcon,
  },
  setup() {
    const product = reactive({
      name: '',
      image: '',
      category: '',
      metric: '',
      description: '',
      details: [],
    });
    const categories = [
      { display: 'Товары', value: 'Товары' },
      { display: 'Работа', value: 'Работа' },
      { display: 'Услуги', value: 'Услуги' },
    ];
    const addDetail = () => product.details.push({
      name: '',
      metric: '',
      value: '',
    });
    return {
      categories,
      product,
      addDetail,
    };
  },
};
</script>
