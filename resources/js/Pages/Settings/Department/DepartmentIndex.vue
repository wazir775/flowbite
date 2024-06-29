<script setup>
import { ref, onMounted } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import Message from '@/Shared/Message'
// import Pagination from '@/Shared/Pagination.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { inject } from 'vue';
let name = '';
const props = defineProps({
    users: {
        type: Object
    },
})
const SearchUsers = () => {
    router.get(route(route().current()), { search: name }, {
        replace: true,
        preserveState: true
    });
}
const deleteUser = (id) => {
    // Message.delete(id, route('tenant.users.delete', id)).then((response) => { }).catch((error) => { })
}
</script>

<template>

    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Users</h2>
        </template>
        <main>
            <div class="px-4 pt-5">
                <div
                    class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div
                        class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">

                        <div class="w-full mb-1">
                            <div class="mb-4">
                                <nav class="flex mb-5" aria-label="Breadcrumb">
                                    <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                                        <li class="inline-flex items-center">
                                            <Link href="#" 
                                                class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                                            <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                                                </path>
                                            </svg>
                                            Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <div class="flex items-center">
                                                <svg class="w-6 h-6 text-gray-400" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <a href="#"
                                                    class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Users</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="flex items-center">
                                                <svg class="w-6 h-6 text-gray-400" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500"
                                                    aria-current="page">users</span>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All Users
                                </h1>
                            </div>
                            <div class="flex justify-between items-center sm:space-x-3">
                                <div
                                    class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                                    <div class="relative mt-1 lg:w-64 xl:w-96">
                                        <input type="search" name="email" @input="SearchUsers" v-model="name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Search for users">
                                    </div>

                                </div>

                                <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
                                    <Link :href="route('settings.department.create')"
                                        class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6 a1 1 0 011-1z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        Add User
                                    </Link>
                                </div>
                            </div>
                            <div class="justify-center w-full mt-5">
                                <div class="overflow-x-auto">
                                    <div class="inline-block w-full align-middle">
                                        <div class="overflow-hidden shadow">
                                            <table
                                                class="w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                                                <thead class="bg-gray-100 dark:bg-gray-700">
                                                    <tr>
                                                        <th scope="col"
                                                            class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                            First Name
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                            Last Name
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                            Email
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                            Added At
                                                        </th>
                                                        <th scope="col"
                                                            class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                            Actions
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody
                                                    class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                                                    <tr
                                                        class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                        <td
                                                            class="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">

                                                            <div
                                                                class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                                <div
                                                                    class="text-base font-semibold text-gray-900 dark:text-white">
                                                                    Name </div>
                                                            </div>
                                                        </td>
                                                        <td
                                                            class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            lname</td>
                                                        <td
                                                            class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            email</td>
                                                        <td
                                                            class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            date
                                                        </td>
                                                        <td class="p-4 space-x-2 whitespace-nowrap">
                                                            <!-- <button type="button" 
                                                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">
                                                                <svg class="w-4 h-4" fill="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd"
                                                                        d="M12 4.5C7 4.5 2.73 8.11 1 12c1.73 3.89 6 7.5 11 7.5s9.27-3.61 11-7.5c-1.73-3.89-6-7.5-11-7.5zm0 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-2.5a1 1 0 110-2 1 1 0 010 2z"
                                                                        clip-rule="evenodd" />
                                                                </svg>
                                                            </button> -->

                                                            <Link href="#" 
                                                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                                                </path>
                                                                <path fill-rule="evenodd"
                                                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                                    clip-rule="evenodd"></path>
                                                            </svg>
                                                            </Link>
                                                            <button type="button"
                                                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                                                                <svg class="w-4 h-4" fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd"
                                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                        clip-rule="evenodd"></path>
                                                                </svg>

                                                            </button>

                                                        </td>
                                                    </tr>
                                                    <!-- <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                        <td colspan="5"
                                                            class="p-4 text-center whitespace-nowrap text-gray-900 dark:text-white">
                                                            <span class="text-sm">No Record Found</span>
                                                        </td>
                                                    </tr> -->

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </main>
    </AuthenticatedLayout>
</template>