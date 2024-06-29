<script setup>
import { ref, onMounted } from 'vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
import TextInput from '@/Components/TextInput.vue';
import SelectInput from '@/Components/SelectInput.vue';
import ButtonInput from '@/Components/ButtonInput.vue';
import InputLabel from '@/Components/InputLabel.vue';
import checkbox from '@/Components/Checkbox.vue';
import FormInputError from '@/Components/InputError.vue';
import Message from '@/Shared/Message'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Breadcrumbs from '@/Shared/Breadcrumbs.vue';

const props = defineProps({
    
})

const form = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    dept_attachments: [],
    file_title: [],
});

const submit = () => {
    form.post(route('settings.users.store'), {
        onSuccess: () => {
            form.roles.pop();
            form.reset();
            router.visit(route('tenant.users.create'), { method: 'get' });
            Message.success('User Created Successfully');
        },
    });
}

const breadcrumb = [['settings.department.index', 'Department'], [null , 'Create']];


const items = ref([]);
            
const addMoreFiles = () => { 
    items.value.push({
        key:'1'
    });


    console.log(items.value);
}

const deleteRow = (index) => {
    items.value.splice(index,1); 
    
    form.file_title.splice(index,1);
    form.dept_attachments.splice(index,1);
}




</script>

<template>

    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Users</h2>
        </template>
        <main>
            <div class="px-4 pt-5 flex justify-center">
                <div
                    class="w-4/5 p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div
                        class="p-0 bg-white block sm:flex items-center justify-between border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
                        <div class="w-full">
                            <div class="mb-3">

                            
                             <Breadcrumbs :links="breadcrumb"/>


                                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                                    Create New Department
                                </h1>
                            </div>
                            
                            
                        </div>
                       <div class="w-1/2 flex items-center">
                        <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
                                <Link :href="route('settings.department.index')"
                                    class="inline-flex items-center justify-center w-full px-3 py-2 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                    Back To List
                                </Link>
                            </div>
                       </div>
                    </div>
                    <form @submit.prevent="submit">
                        <div class="grid md:grid-cols-2 md:gap-6">

                            <div class="relative z-0 w-full mb-5 group">
                                <InputLabel for="dept_name" value="Name" />
                                <TextInput id="dept_name" type="text" v-model="form.dept_name"
                                    class="mt-1 block w-full" autocomplete="dept_name" />
                                <FormInputError class="mt-2" :message="form.errors.dept_name" />
                            </div>

                            <div class="relative z-0 w-full mb-5 group">
                                <InputLabel for="dept_slug" value="Slug" />
                                <TextInput id="dept_slug" type="text" v-model="form.dept_slug"
                                    class="mt-1 block w-full" autocomplete="dept_slug" />
                                <FormInputError class="mt-2" :message="form.errors.dept_slug" />
                            </div>
                        </div>
                            
                            
                        <div class="grid md:grid-cols-2 md:gap-6">

                            <div class="relative z-0 w-full mb-5 group">
                                <InputLabel for="dept_type" value="Type" />
                                <SelectInput id="dept_type" v-model="form.dept_type" :values="{'Academic':'Academic','Administration':'Administration'}"
                                    class="mt-1 block w-full" autocomplete="dept_type" />
                                <FormInputError class="mt-2" :message="form.errors.dept_type" />
                            </div>

                            <div class="relative z-0 w-full mb-5 group">
                                <InputLabel for="dept_start_date" value="Start Date" />
                                <TextInput id="dept_start_date" type="date" v-model="form.dept_start_date"
                                    class="mt-1 block w-full" autocomplete="dept_start_date" />
                                <FormInputError class="mt-2" :message="form.errors.dept_start_date" />
                            </div>
                        </div>

                        
                        <div class="grid md:grid-cols-2 md:gap-6">

                            <div class="relative z-0 w-full mb-5 group">
                                <InputLabel for="dept_end_date" value="End Date" />
                                <TextInput id="dept_end_date" type="date" v-model="form.dept_end_date"
                                    class="mt-1 block w-full" autocomplete="dept_end_date" />
                                <FormInputError class="mt-2" :message="form.errors.dept_end_date" />
                            </div>

                            <div class="relative z-0 w-full mb-5 group">
                                <InputLabel for="dept_active" value="Active" />
                                <checkbox id="dept_active" type="checkbox" v-model="form.dept_active"
                                    class="mt-1 block" autocomplete="dept_active" />
                                <FormInputError class="mt-2" :message="form.errors.dept_active" />
                            </div>

                            
                        </div>


                        <div>
                            <a v-on:click="addMoreFiles" 
                                class="cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">
                                Add More File
                            </a>       
                        </div>
                        <br>

                        <div v-for="(item, index) in items" :key="item" class="grid md:grid-cols-3 md:gap-6">

                            <div class="relative z-0 mb-5 group">
                                <InputLabel for="dept_attachments" value="Select File" />
                                <TextInput id="dept_attachments" type="file" v-model="form.dept_attachments[index]"
                                    class="mt-1 block" autocomplete="dept_attachments" />
                                <FormInputError class="mt-2" :message="form.errors.dept_attachments" />
                            </div>

                            <div class="relative z-0 mb-5 group">
                                <InputLabel for="file_title" value="File Title" />
                                <TextInput id="file_title" type="text" v-model="form.file_title[index]"
                                    class="mt-1 block" autocomplete="file_title" />
                                <FormInputError class="mt-2" :message="form.errors.file_title" />
                            </div>

                            <div class="relative z-0 mb-5 group">

                                <a v-on:click="deleteRow(index)"
                                            class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                                            Cancel
                                </a>
                            </div>
                            
                        </div>
 

                        <ButtonInput value="Save"/>
                        
                        <!-- <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> -->
                    </form>

                </div>
            </div>

            
        </main>
    </AuthenticatedLayout>
</template>
