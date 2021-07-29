<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">

            <SideBar />

            <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" id="main-content">

                <NavBar />

                <div class="p-6 bg-gray-100 mb-20">
                    <Nuxt />
                </div>


            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';
import NavBar from '../components/NavBar.vue';
export default {    
    components: {
        SideBar,
        NavBar
    }
}
</script>

<style>

</style>