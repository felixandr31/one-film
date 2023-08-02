<template>
  <img
    :src="serie.image"
    :alt="'image de la serie \'' + props.serie.title + '\''"
  />
    <ul class="px-0 w-25">
      <li>
        {{ props.serie.title }}
      </li>
      <li>{{ props.serie.rating }} / 5</li>
      <li>{{ props.serie.averageRuntime }} min</li>
      <li>
        {{ props.serie.year }}
      </li>
    </ul>
  <div v-if="props.displaySummary" v-html="props.serie.summary" class="mt-2"></div>
</template>

<script setup lang="ts">
import { type SerieInfos } from '@/model/series'

const props = defineProps<{
  serie: SerieInfos,
  displaySummary: boolean
}>()
</script>

<style scoped>
ul {
  list-style-type: none;
}
.list-serie-info {
  max-width: 250px
}
</style>
