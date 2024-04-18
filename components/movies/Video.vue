<template>
    <div>
        <div v-if="errorMessages">
            <p>{{ errorMessages }}</p>
        </div>
        <div v-if="trailer">
            <h3 class=" font-bold">{{ trailer.name }}</h3>
            <iframe :src="`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0`" width="560" height="315" frameborder="0" class="rounded-xl" allowfullscreen> </iframe>
        </div>
    </div>

</template>

<script setup>

const props = defineProps({
    video: {
        type: Object,
        required: true
    }
})
const errorMessages = ref(null);
const trailer = ref(null);

onMounted(() => {
    if(!props.video[0]) {
        errorMessages.value = 'No video found';
        return;
    }
    const trailerFind = props.video.find(video => video.type.toLowerCase().includes('trailer'));
    if(!trailerFind) {
        trailer.value = props.video[0];
        return;
    }
    trailer.value = trailerFind;
})

</script>