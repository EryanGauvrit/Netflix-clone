export const useTmdb = () => {
    const config = useRuntimeConfig()
    const uri = config.public.apiUrl;
    const token = config.public.tokenAPI;

    const queryParam = `?language=fr-FR&page=1`;

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const getMovies = async (params) => {
        const data = await $fetch(uri + '/movie' + params + queryParam, options)
        return data.results;
    }

    const getMovieDetails = async (id, needVideo) => {
        const videoParam = '&append_to_response=videos'
        const finalQueryParams = needVideo ? queryParam + videoParam : queryParam;
        const data = await $fetch(uri + '/movie/' + id + finalQueryParams, options)
        return data;
    }

    return { getMovies, getMovieDetails }
}