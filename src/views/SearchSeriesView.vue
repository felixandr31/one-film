<template>
  <div class="mb-3 mx-3">
    <label
      for="inputSerie"
      class="form-label"
      >Looking for a serie:</label
    >
    <input
      type="text"
      v-model="searchSerie"
      @input="handleChange"
      class="form-control"
      id="inputSerie"
    />
    <div class="input-append">
      <img
        src="../assets/search.svg"
        alt="search icon"
      />
    </div>
  </div>
  <button @click="alphabeticSortMyList">Sort by title</button>
  <SearchSeries
    v-for="serie in seriesResult"
    :key="serie.id"
    :serie="serie"
  >
  </SearchSeries>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type SerieInfos } from '../model/series'
import { useSeriesStore } from '@/stores/seriesStore'
import RestResource from '../services/restRessources'
import SearchSeries from '@/components/search-component/SearchSeries.vue'


const restRessource = new RestResource()
const searchSerie = ref('')
const seriesResult = ref<SerieInfos[]>([])
const { alphabeticSortMyList } = useSeriesStore()

const handleChange = () => {
  restRessource.getByQuery(searchSerie.value).then((res) => {
    seriesResult.value = []
    res.data.forEach((serie: any) => {
      const newSerie = {
        id: serie.show.id,
        title: serie.show.name,
        image: serie.show.image?.medium,
        year: serie.show.premiered?.slice(0, 4),
        averageRuntime: serie.show.averageRuntime,
        // I didn't use serie.score.toFixed(2) * 10 because it adds lot of '0' on some rating
        rating: Math.round(serie.score * 100) / 10,
        summary: serie.show.summary
      }
      seriesResult.value.push(newSerie)
    })
  }).catch( err => {
    console.log('err', err)
  })
}
</script>
