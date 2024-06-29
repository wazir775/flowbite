<script setup>
defineProps({
    value: {
        type: String,
    },
});
</script>

<template>
    

    <label class="block font-medium text-sm block mb-2 text-gray-900 dark:text-white">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>