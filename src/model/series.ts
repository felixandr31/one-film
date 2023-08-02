export interface SerieInfos {
    id: number,
    title: string,
    image: string,
    year: number,
    averageRuntime: number,
    rating: number,
    summary?: string,
    isInMyList?: boolean,
    isInMyListForTonight?: boolean
}