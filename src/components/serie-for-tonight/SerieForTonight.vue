<template>
  <div class="container my-3 mx-2">
    <SerieBlockInfos :serie="props.serie" :display-summary="true"></SerieBlockInfos>
  </div>
</template>

<script setup lang="ts">
import SerieBlockInfos from '../common/SerieBlockInfos.vue'
import { type SerieInfos } from '@/model/series'

const props = defineProps<{
  serie: SerieInfos
}>()

</script>
<style scoped></style>
