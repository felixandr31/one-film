<template>
  <div class="container my-3 px-0 d-inline-flex align-items-center justify-content-between">
    <SerieBlockInfos :serie="props.serie" :display-summary="false"></SerieBlockInfos>
    <button
      type="button"
      class="btn float-right"
      :class="isInMyList ? 'btn-warning' : 'btn-info'"
      @click=" handleClick"
    >
    {{ isInMyList ? 'Retirer de ma liste': 'Ajouter à ma liste' }}
    </button>
  </div>
  <hr>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSeriesStore } from '@/stores/seriesStore'
import SerieBlockInfos from '../common/SerieBlockInfos.vue'
import { type SerieInfos } from '@/model/series'
import { computed } from 'vue';


const props = defineProps<{
  serie: SerieInfos
}>()

const serieStore = useSeriesStore()
const { addSerieToMyList, removeSerieToMyList} = serieStore
const {  getIdSerieInMyList } = storeToRefs(serieStore)

const isInMyList = computed(() => {
  return getIdSerieInMyList.value.indexOf(props.serie.id) >= 0
})

const handleClick = () => {
  if (isInMyList.value) {
    removeSerieToMyList(props.serie.id)
  } else {
    addSerieToMyList(props.serie)
  } 
  
}
</script>
<style scoped>
hr:last-of-type {
display: none;
}
</style>
