
<template>
    <div class="container mx-auto p-4 max-w-5xl">

        <div class="flex gap-4 w-full">
            <!-- <Separator class="w-3/5" /> -->
            <div class="grid grid-cols-4 max-w-xl m-auto">
                <button v-for="item in menu" :key="item.name" @click="handleSearch(item.path)" class="text-foreground px-4 py-1 bg-primary/60 hover:bg-primary/30">{{ item.name }}</button>
            </div>
            <!-- <Separator class="w-3/5" /> -->
        </div>

        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 m-auto justify-items-center">
            <Card v-for="movie in movies" :key="movie.id" :movie="movie" />
            <div v-if="!movies.length === 0" class="flex justify-center w-full">
                <p class="text-lg">Loading...</p>
            </div>
        </section>
        
    </div>
</template>

<script setup>
import Card from '~/components/movies/Card.vue';

const { getMovies } = useTmdb();

const movies = ref([]);
const menu = [
    {
        name: 'Now Playing',
        path: '/now_playing'
    },
    {
        name: 'Popular',
        path: '/popular'
    },
    {
        name: 'Top Rated',
        path: '/top_rated'
    },
    {
        name: 'Upcoming',
        path: '/upcoming'
    },
]

onMounted(async () => {
    movies.value = await getMovies('/now_playing');
})

const handleSearch = async (params) => {
    movies.value = await getMovies(`/${params}`);
}

</script>
