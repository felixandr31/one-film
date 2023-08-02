<template>
  <MyList
    v-for="serie in getFullSerieList"
    :key="serie.id"
    :serie="serie"
  ></MyList>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import MyList from '../components/my-list/MyList.vue'
import { useSeriesStore } from '@/stores/seriesStore'

const { getFullSerieList } = storeToRefs(useSeriesStore())
</script>

<style scoped></style>
