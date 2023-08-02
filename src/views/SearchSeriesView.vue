<template>
  <div class="mb-3 mx-3">
    <label
      for="input-serie"
      class="form-label"
      >Looking for a serie:</label
    >
    <input
    v-model="searchSerie"
      type="text"
      id="inputSerie"
      class="form-control"
      placeholder="Enter a serie name"
      @input="handleChange"
    />
  </div>
  <div v-if="seriesResult.length > 0" class="container">
    <SearchSeries
    v-for="serie in seriesResult"
    :key="serie.id"
    :serie="serie"
    >
    </SearchSeries>
  </div>
  <div v-else class="container pl-5 pt-5 fs-4">
    No result found
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type SerieInfos } from '../model/series'
import RestResource from '../services/restRessources'
import SearchSeries from '@/components/search-serie/SearchSeries.vue'


const restRessource = new RestResource()
const searchSerie = ref('')
const seriesResult = ref<SerieInfos[]>([])

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
