<template>
<!--     
        This is the detail page for a movie. 
        It will display the movie's title, poster, and vote average.
        data is fetched from the TMDB API.
        use it :
        { "adult": false, "backdrop_path": "/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg", "belongs_to_collection": { "id": 77816, "name": "Kung Fu Panda - Saga", "poster_path": "/7EmRVHYJ3xjaoTLm1EVYlbOnwHu.jpg", "backdrop_path": "/uDosHOFFWtF5YteBRygHALFqLw2.jpg" }, "budget": 85000000, "genres": [ { "id": 16, "name": "Animation" }, { "id": 28, "name": "Action" }, { "id": 10751, "name": "Familial" }, { "id": 35, "name": "Comédie" }, { "id": 14, "name": "Fantastique" } ], "homepage": "https://www.universalpictures.fr/micro/kung-fu-panda-4", "id": 1011985, "imdb_id": "tt21692408", "origin_country": [ "US" ], "original_language": "en", "original_title": "Kung Fu Panda 4", "overview": "Après trois aventures dans lesquelles le guerrier dragon Po a combattu les maîtres du mal les plus redoutables grâce à un courage et des compétences en arts martiaux inégalés, le destin va de nouveau frapper à sa porte pour l'inviter à enfin se reposer. Plus précisément, pour être nommé chef spirituel de la vallée de la Paix.", "popularity": 2043.817, "poster_path": "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg", "production_companies": [ { "id": 521, "logo_path": "/kP7t6RwGz2AvvTkvnI1uteEwHet.png", "name": "DreamWorks Animation", "origin_country": "US" } ], "production_countries": [ { "iso_3166_1": "US", "name": "United States of America" } ], "release_date": "2024-03-02", "revenue": 452991725, "runtime": 94, "spoken_languages": [ { "english_name": "English", "iso_639_1": "en", "name": "English" } ], "status": "Released", "tagline": "", "title": "Kung Fu Panda 4", "video": false, "vote_average": 7.156, "vote_count": 1084 }
    -->
    <div class="container mx-auto p-4 max-w-4xl">
        <div class="flex flex-col items-center my-4 gap-16" v-if="movie">
            <div class="grid grid-cols-2 gap-8 ">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="movie poster" class="object-cover w-auto h-full">
                <div class="flex flex-col gap-3">
                    <h2 class="text-4xl font-bold text-primary">{{ movie.title }}</h2>
                    <DisplayRate :rate="movie.vote_average" />
                    <p class="text-lg mt-5">Released date : {{ movie.release_date }}</p>
                    <p class="text-lg mt-5">{{ movie.overview }}</p>
                </div>
            </div>
            <Video :video="movie.videos.results" />
        </div>
        <div class="flex flex-col items-center gap-4" v-else>
            <p class="text-lg">Loading...</p>
        </div>
        <div class="flex flex-col items-center gap-4" v-if="errorMessages">
            <p class="text-lg">{{ errorMessages }}</p>
        </div>
    </div>
</template>

<script setup>
    import DisplayRate from '~/components/movies/DisplayRate.vue';
    import Video from '~/components/movies/Video.vue';
    const { params } = useRoute();
    const { getMovieDetails } = useTmdb();
    const movie = ref(null);
    const errorMessages = ref(null);

    onMounted(async () => {
        try {
            movie.value = await getMovieDetails(params.id, true);
        } catch (error) {
            errorMessages.value = error.message;
        }
    })
</script>
