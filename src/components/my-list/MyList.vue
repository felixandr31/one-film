<template>
  <div class="container my-3 mx-2">
    <SerieBlockInfos :serie="props.serie" :display-summary="false"></SerieBlockInfos>
    <input type="checkbox" :checked="props.serie.isInMyListForTonight" @change="updateTonightList" />
    <button
      type="button"
      class="btn btn-warning float-right"
      @click="removeToMyList"
    >
      Retirer de ma liste
    </button>
  </div>
</template>

<script setup lang="ts">
import SerieBlockInfos from '../common/SerieBlockInfos.vue'
import { type SerieInfos } from '@/model/series'
import { useSeriesStore } from '@/stores/seriesStore'


const props = defineProps<{
  serie: SerieInfos
}>()

const { removeSerieToMyList, toggleTonightSerie } = useSeriesStore()

const removeToMyList = () => {
  removeSerieToMyList(props.serie.id)
}

const updateTonightList = () => {
  toggleTonightSerie(props.serie.id)
}
const addToMySelectionForTonight = () => {
  console.log(props.serie)
}
</script>
<style scoped></style>
