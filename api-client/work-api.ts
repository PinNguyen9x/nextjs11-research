import { ListParams, ListResponse, Work } from '../models'
import axiosClient from './axios-client'

const workApi = {
  getAll: (params: Partial<ListParams>): Promise<ListResponse<Work>> => {
    return axiosClient.get('/works', { params })
  },
  get: (id: string): Promise<Work> => {
    return axiosClient.get(`/works/${id}`)
  },
}

export default workApi

// browser : localhost:3000/api/works
// Next server : /api/works => proxy to https://js-post-api.herokuapp.com/api/works
// Api server : https://js-post-api.herokuapp.com/api/works
