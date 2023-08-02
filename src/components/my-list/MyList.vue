<template>
  <div class="container my-3 px-0 d-inline-flex align-items-center justify-content-between">
    <SerieBlockInfos :serie="props.serie" :display-summary="false"></SerieBlockInfos>
    <div>
      <input class="form-check-input" type="checkbox" :checked="props.serie.isInMyListForTonight"  
      @change="updateTonightList" id="CheckSerieForTonight">
      <label class="form-check-label px-2" for="CheckSerieForTonight">
        Tonight list
      </label>
    </div>
    <button
      type="button"
      class="btn btn-warning float-right"
      @click="removeToMyList"
    >
      Retirer de ma liste
    </button>
  </div>
  <hr>
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
</script>
<style scoped>
hr:last-of-type {
display: none;
}
</style>