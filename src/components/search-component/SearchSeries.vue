<template>
  <div class="container my-3 mx-2">
    <SerieBlockInfos :serie="props.serie"></SerieBlockInfos>
    <button
      type="button"
      class="btn btn-primary float-right"
      @click="addToMyList"
    >
      Ajouter à ma liste
    </button>
  </div>
</template>

<script setup lang="ts">
import SerieBlockInfos from '../common/SerieBlockInfos.vue'
import { type SerieInfos } from '@/model/series'
import { useSeriesStore } from '@/stores/series'

const props = defineProps<{
  serie: SerieInfos
}>()

const { addSerieToMyList } = useSeriesStore()

const addToMyList = () => {
  addSerieToMyList(props.serie)
}
</script>
<style scoped></style>
