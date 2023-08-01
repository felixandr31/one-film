<template>
  <div class="container my-3 mx-2">
    <SerieBlockInfos :serie="props.serie"></SerieBlockInfos>
    <input type="checkbox" />
  </div>
</template>

<script setup lang="ts">
import SerieBlockInfos from '../common/SerieBlockInfos.vue'
import { type SerieInfos } from '@/model/series'

const props = defineProps<{
  serie: SerieInfos
}>()

const addToMySelectionForTonight = () => {
  console.log(props.serie)
}
</script>
<style scoped></style>
