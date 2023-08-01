<template>
  <img
    :src="serie.image"
    :alt="'image de la serie' + props.serie.title"
  />
  <div class="align-middle d-inline-block">
    <ul>
      <li>
        {{ props.serie.title }}
      </li>
      <li>{{ props.serie.rating }} / 5</li>
      <li>
        {{ props.serie.year }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type SerieInfos } from '@/model/series'
// const serie = defineserie<SerieInfos>()

const props = defineProps<{
  serie: SerieInfos
}>()
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
