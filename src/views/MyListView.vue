<template>
  <MyList
    v-for="serie in mySerieList"
    :key="serie.id"
    :serie="serie"
  ></MyList>
</template>

<script setup lang="ts">
import MyList from '../components/my-list/MyList.vue'
import { useSeriesStore } from '@/stores/series'

const { mySerieList } = useSeriesStore()
</script>

<style scoped></style>
