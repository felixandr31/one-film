import { type AxiosInstance } from "axios"
import { tvmazeApi } from "./axiosInstances"

export default class RestResource {
  axiosInstance: AxiosInstance;

  constructor(axiosInstance:  AxiosInstance = tvmazeApi) {
    this.axiosInstance = axiosInstance
  }

  getByQuery(query: string) {
      return this.axiosInstance.get(query)
  }
}