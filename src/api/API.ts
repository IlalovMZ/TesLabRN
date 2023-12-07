import axios, { AxiosInstance } from 'axios'

export const appAxiosInstance: AxiosInstance = axios.create({})

export const ApiUrls = {
  users: 'https://65707bae09586eff66417b94.mockapi.io/users',
}
