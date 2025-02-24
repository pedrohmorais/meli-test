import { URLS } from '@/constants/urls'
import axios from 'axios'

export const axiosConfig = axios.create({
  baseURL: URLS.MELI_API,
})
