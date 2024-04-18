<template>
    <NuxtLink :to="'/movies/' + movie.id" class="p-4 rounded-md shadow-md max-w-sm flex flex-col gap-4 hover:scale-[1.05] duration-500 cursor-pointer">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="movie poster" class=" object-cover w-full h-80">
        <div class="flex flex-col items-center justify-center w-full gap-4 h-32">
            <h2 class="text-xl font-bold text-primary">{{ movie.title }}</h2>
            <p class="text-sm">{{ movie.release_date }}</p>
            <DisplayRate :rate="movie.vote_average" />
        </div>
    </NuxtLink>
</template>

<script setup>
import DisplayRate from '~/components/movies/DisplayRate.vue';

const props = defineProps({
    movie: {
        type: Object,
        required: true
    }
})
 
</script>
