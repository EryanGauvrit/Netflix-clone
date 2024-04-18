<template>
    <!-- Display the rate of the movie based on starts -->
    <div class="flex gap-1">
        <Star v-for="index in 5" :class="'w-5 h-5 ' + (index <= startNbr ? 'text-yellow-400' : 'text-gray-300')" />
    </div>

</template>

<script setup>
import { Star } from 'lucide-vue-next';
const props = defineProps({
    rate: {
        type: Number,
        required: true
    }
})

const startNbr = ref(0);

onMounted(() => {
    calulateRate();
})

// Calculate the rate min 1 and max 5
const calulateRate = () => {
    const rate = Math.round(props.rate / 2);
    startNbr.value = rate;
}
</script>