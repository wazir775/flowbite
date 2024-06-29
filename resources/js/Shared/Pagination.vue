<script setup>
import { Link } from '@inertiajs/vue3'
const props = defineProps({
    links: {
        type: Array
    },
})
</script>
<template>
    <ul class="mt-5 pagination m-0 float-right">
        <nav aria-label="Page navigation example">
            <ul class="flex items-center -space-x-px h-8 text-sm">

                <template v-for="(link, key) in props.links">
                    <li v-if="link.url === null" :key="key">
                        <Link :class=" link.restricted ? 'cursor-pointer' : 'cursor-not-allowed	' " href="#" v-html="link.label" 
                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        </Link>
                    </li>
                    <li v-else :key="link-${key}" :class="{ 'bg-primary-700 text-white dark:bg-primary-800 dark:border-primary-700 dark:text-primary-400 dark:hover:bg-primary-800 dark:hover:text-white': link.active, 'disabled': link.restricted }"
                        class="page-item">
                        <Link class="flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-00 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" :href="link.url"
                            :class="link.restricted ? 'cursor-not-allowed' : 'cursor-pointer	'" v-html="link.label">
                        </Link>
                    </li>
                </template>

            </ul>
        </nav>

    </ul>
</template>