<template>
  <SerieForTonight v-if="getRandomSerieForTonight" :serie="getRandomSerieForTonight"></SerieForTonight>
  <div v-else>Select series in your list to obtain a serie for tonight</div>
</template>

<script setup lang="ts">
import { useSeriesStore } from '@/stores/seriesStore'
import SerieForTonight from '@/components/serie-for-tonight/SerieForTonight.vue';

const { getRandomSerieForTonight } = useSeriesStore()

</script>
