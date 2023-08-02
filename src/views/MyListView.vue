<template>
  <div v-if="getFullSerieList.length > 0" class="container">
    <button @click="alphabeticSortMyList" class="btn btn-primary ml-2">Sort by title</button>
    <MyList
    v-for="serie in getFullSerieList"
    :key="serie.id"
    :serie="serie"
  ></MyList>
  </div>
  <div v-else class="container pl-5 pt-5 fs-4">
    Add Serie to your list to see them
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import MyList from '../components/my-list/MyList.vue'
import { useSeriesStore } from '@/stores/seriesStore'

const seriesStore = useSeriesStore()
const { getFullSerieList } = storeToRefs(seriesStore)
const { alphabeticSortMyList } = seriesStore
</script>

