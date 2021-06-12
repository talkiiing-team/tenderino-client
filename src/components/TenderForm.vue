<template>
  <div class="flex flex-col justify-start items-center px-8 p-4">
    <h1 class="mb-4">Создать тендер</h1>
    <div class="w-full border-black border rounded-md p-4 shadow-lg">
      <div class="flex flex-col justify-between items-start
        mb-4">
        <p>Наименование</p>
        <input v-model="product.name"
          class="w-full" placeholder="Введите название продукта" />
      </div>
      <div class="flex flex-col justify-between items-start
        mb-4">
        <p>Вид продукции</p>
        <VueMultiselect v-model="product.type"
          :options="productTypes">
        </VueMultiselect>
      </div>
      <div class="flex flex-col justify-between items-start
        mb-4">
        <p>Штрихкод</p>
        <input v-model="product.barcode"
          class="w-full" placeholder="Введите штрихкод" />
      </div>
      <div class="flex flex-col justify-between items-start
        mb-4">
        <p>Модель</p>
        <input v-model="product.model"
          class="w-full" placeholder="Введите модель продукта" />
      </div>
      <div class="flex flex-row justify-between items-start">
        <div class="flex flex-col justify-between items-start w-full pr-4">
          <p>Производитель</p>
          <input v-model="product.manufacturer"
            class="w-full" placeholder="Введите производителя" />
        </div>
        <div class="flex flex-col justify-between items-start w-full">
          <p>SKU</p>
          <input v-model="product.sku"
            class="w-full" placeholder="Введите SKU" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import VueMultiselect from 'vue-multiselect';

export default {
  name: 'TenderForm',
  components: {
    VueMultiselect,
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
      { value: 'a', name: 'aboba' },
      { value: 'b', name: 'biba' },
    ];
    return {
      productTypes,
      product,
    };
  },
};
</script>
