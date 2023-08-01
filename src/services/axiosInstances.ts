import axios from "axios";

export const tvmazeApi = axios.create({
    baseURL: import.meta.env.VITE_TVMAZE_BASE_URL
})