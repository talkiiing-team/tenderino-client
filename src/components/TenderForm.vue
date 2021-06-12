<template>
  <form class="w-full flex flex-col rounded-md p-4 shadow-lg gap-y-4">
    <VInput v-model="product.name"
      class="w-full" placeholder="Название продукта" />
    <VSelect v-model="product.type"
      :options="productTypes"
      placeholder="Тип продукта" />
    <VInput v-model="product.barcode"
      class="w-full" placeholder="Штрихкод" />
    <VInput v-model="product.model"
      class="w-full" placeholder="Модель продукта" />
    <VInput v-model="product.manufacturer"
      class="w-full" placeholder="Производитель" />
    <VInput v-model="product.sku"
      class="w-full" placeholder="SKU" />
    <VButton tag="button">Я кнопка</VButton>
  </form>
</template>

<script>
import { reactive } from 'vue';
import VInput from '@/components/VInput.vue';
import VSelect from '@/components/VSelect.vue';
import VButton from '@/components/VButton.vue';

export default {
  name: 'TenderForm',
  components: {
    VButton,
    VSelect,
    VInput,
  },
  setup() {
    const product = reactive({
      name: '',
      sku: '',
      model: '',
      barcode: '',
      type: '',
      manufacturer: '',
      manufacturerOrigin: '',
    });
    const productTypes = [
      { display: 'Абоба', value: 'aboba' },
      { display: 'Амогус', value: 'amogus' },
    ];
    return {
      productTypes,
      product,
    };
  },
};
</script>
