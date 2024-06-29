<script setup>
defineProps({
    message: {
        type: String,
    },
});
</script>

<template>
    <div v-show="message" class="text-sm text-red-800 rounded-lg dark:bg-gray-800 dark:text-red-400"
        >
        <span class="font-medium">{{ message }}</span>
    </div>
</template>