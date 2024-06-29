<script setup>
import { onMounted, ref } from 'vue';

const model = defineModel({
    required: true,
});

const props = defineProps({
   values: Object 
})


</script>

<template>
    
    <select 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="model">
            <option value="">Select Option</option>
            <option v-for="(value, key) in props.values" :key="key" :value="key">{{value}}</option>
    </select>
</template>