import { defineStore } from "pinia";
import { type SerieInfos } from "@/model/series";

export const useSeriesStore = defineStore('series', {

    state: () => ({
        mySerieList: [] as SerieInfos[]
      }),

    persist: true,
      
    getters: {
        getFullSerieList (): SerieInfos[] {
            return this.mySerieList
        },

        getIdSerieInMyList (): (number)[] {
          const indexSerieInMyList = this.mySerieList.map(serie => {
            if(serie.isInMyList) {
              return serie.id
            }
          })
          return indexSerieInMyList
        },

        getMyTonightList (): SerieInfos[] {
          const serieInMyTonightList = this.mySerieList.filter(serie => {
            if(serie.isInMyListForTonight) {
              return true
            }
          })
          return serieInMyTonightList
        },

        getRandomSerieForTonight (): SerieInfos {
          const randomNumber = Math.floor(Math.random() * (this.getMyTonightList.length - 0))
          return this.getMyTonightList[randomNumber]
        }
      },

    actions: {
      addSerieToMyList (newSerie: SerieInfos) {
        this.mySerieList.push({ ... newSerie, isInMyList: true, isInMyListForTonight: false})
      },
      removeSerieToMyList (id: number) {
        const indexSerieToDelete =  this.mySerieList.findIndex( serie => serie.id === id )
        if (indexSerieToDelete >= 0) {
           this.mySerieList.splice(indexSerieToDelete, 1)
        }
      },
      alphabeticSortMyList () {
        this.mySerieList.map(serie => serie.title).sort()
      },

      toggleTonightSerie (id: number) {
        const indexSerieToDelete =  this.mySerieList.findIndex( serie => serie.id === id )
        if (indexSerieToDelete >= 0) {
           this.mySerieList[indexSerieToDelete].isInMyListForTonight = !this.mySerieList[indexSerieToDelete].isInMyListForTonight
        }
      }
    },


    // This code is using the 'setup' API syntax, but I couldn't use persist
    // const mySerieList = ref<SerieInfos[]>([])
    
    // function addSerieToMyList (newSerie: SerieInfos) {
    //     mySerieList.value.push(newSerie)
    // }

    // function removeSerieToMyList (id: number) {
    //    const indexSerieToDelete =  mySerieList.value.findIndex( serie => serie.id === id )
    //    if (indexSerieToDelete >= 0) {
    //     mySerieList.value.splice(indexSerieToDelete, 1)
    //    }
    // }

    // return  { mySerieList, addSerieToMyList, removeSerieToMyList }
    //   },
})