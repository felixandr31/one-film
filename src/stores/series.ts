import { defineStore } from "pinia";
import { ref } from "vue";
import { type SerieInfos } from "@/model/series";

export const useSeriesStore = defineStore('series', () => {
    const mySerieList = ref<SerieInfos[]>([])
    
    function addSerieToMyList (newSerie: SerieInfos) {
        mySerieList.value.push(newSerie)
    }

    function removeSerieToMyList (id: number) {
       const indexSerieToDelete =  mySerieList.value.findIndex( serie => serie.id === id )
       if (indexSerieToDelete) {
        mySerieList.value.splice(indexSerieToDelete, 1)
       }
    }

    return  { mySerieList, addSerieToMyList, removeSerieToMyList }

})