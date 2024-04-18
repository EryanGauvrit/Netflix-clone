<template>
    <nav class="bg-secondary text-foreground p-4 flex justify-between items-center px-8 py-4">
        <h1 class="font-bold text-4xl text-primary uppercase">Netflix like</h1>
        <ul class="flex justify-center space-x-4">
            <li v-for="nav in navigations" :key="nav.name">
                <NuxtLink :to="nav.path" class="text-primary hover:text-foreground px-4 py-1 rounded-sm font-bold ">{{ nav.name }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>

    const navigations = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Movies',
            path: '/movies'
        },
        {
            name: 'About',
            path: '/about'
        },
    ]
</script>

<style scoped>
    .router-link-exact-active {
        @apply text-foreground;    
    }
</style>
