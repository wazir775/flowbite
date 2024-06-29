<script setup>

import { Link } from '@inertiajs/vue3';

const props = defineProps({
    isSidebarOpen: Boolean
});
</script>

<template>
    <li>
        <Link :href="route('settings.department.index')"
            class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
            <svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <rect fill="none" height="24" width="24"></rect>
                <path
                    d="M22,11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3H22z M7,9H4V5h3V9z M17,15h3v4h-3V15z M17,5h3v4h-3V5z">
                </path>
            </svg>
            <span class="ml-3" sidebar-toggle-item=""
                v-html="isSidebarOpen ? 'Departments' : ''"></span>
        </Link>
    </li>
    <li>
        <Link href="#"
            class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor" viewBox="0 0 600 600">
                <path
                    d="M294.2 277.8c17.1 5 34.62 13.38 49.5 24.62l161.5-53.75c8.375-2.875 12.88-11.88 10-20.25L454.8 47.25c-2.748-8.502-11.88-13-20.12-10.12l-61.13 20.37l33.12 99.38l-60.75 20.13l-33.12-99.38L251.2 98.13c-8.373 2.75-12.87 11.88-9.998 20.12L294.2 277.8zM574.4 309.9c-5.594-16.75-23.67-25.91-40.48-20.23l-202.5 67.51c-17.22-22.01-43.57-36.41-73.54-36.97L165.7 43.75C156.9 17.58 132.5 0 104.9 0H32C14.33 0 0 14.33 0 32s14.33 32 32 32h72.94l92.22 276.7C174.7 358.2 160 385.3 160 416c0 53.02 42.98 96 96 96c52.4 0 94.84-42.03 95.82-94.2l202.3-67.44C570.9 344.8 579.1 326.6 574.4 309.9zM256 448c-17.67 0-32-14.33-32-32c0-17.67 14.33-31.1 32-31.1S288 398.3 288 416C288 433.7 273.7 448 256 448z">
                </path>
            </svg>
            <span class="ml-3" sidebar-toggle-item=""
                v-html="isSidebarOpen ? 'Ebay Shipments' : ''"></span>
        </Link>
    </li>
</template>