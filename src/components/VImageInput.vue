<template>
  <div
    class="
      w-full h-56 border-dashed border-2
      group transition-all duration-300
      flex items-center justify-center
    "
    :class="{
      'border-blue-300': isDragging,
      'border-gray-300': !isDragging && !wrongFile,
      'border-red-300': !isDragging && wrongFile,
    }"
    @dragover.prevent="dragOver"
    @dragleave.prevent="dragLeave"
    @drop.prevent="drop($event)">

    <img v-if="modelValue" class="w-full h-full object-cover" :src="modelValue" />
    <div v-if="isDragging || wrongFile || !modelValue" class="
      select-none text-gray-400 group-hover:text-blue-400 transition-all duration-300
    ">
      <p
        class="text-red-300"
        v-if="wrongFile && !isDragging">Неверный тип файла</p>
      <p v-if="!modelValue && !isDragging && !wrongFile">Переместите фото сюда</p>
      <p
        class="text-blue-400"
        v-if="!modelValue && isDragging"
      >Теперь отпускайте</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DropAnImage',
  data() {
    return {
      isDragging: false,
      wrongFile: false,
      imageSource: null,
    };
  },
  props: {
    modelValue: String,
  },
  methods: {
    dragOver() {
      this.isDragging = true;
    },
    dragLeave() {
      this.isDragging = false;
    },
    drop(e) {
      const { files } = e.dataTransfer;
      this.wrongFile = false;
      // allows only 1 file
      if (files.length === 1) {
        const file = files[0];
        // allows image only
        if (file.type.indexOf('image/') >= 0) {
          const reader = new FileReader();
          reader.onload = (f) => {
            this.$emit('update:modelValue', f.target.result);
            this.isDragging = false;
          };
          reader.readAsDataURL(file);
        } else {
          this.wrongFile = true;
          this.imageSource = null;
          this.isDragging = false;
        }
      }
    },
    onRequestUploadFiles() {

    },
  },
};
</script>
