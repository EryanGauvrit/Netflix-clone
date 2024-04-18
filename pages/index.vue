<template>
    <main>
        <h2 class="text-3xl font-bold underline">
            Nextflix Clone - Home
        </h2>
        <Carousel v-if="movies" :totalSlides="movies.length">
            <Card v-for="movie in movies" :key="movie.id" :movie="movie" />
        </Carousel>
        <div v-else class="flex justify-center w-full">
            <p class="text-lg">Loading...</p>
        </div>
    </main>
</template>

<script setup>
import Card from '~/components/movies/Card.vue';

const { getMovies } = useTmdb();

const movies = ref(null);

onMounted(async () => {
    const res = await getMovies('/now_playing');
    movies.value = res;
})
</script>
