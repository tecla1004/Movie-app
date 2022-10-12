import axios from 'axios'
import qs from 'qs'
import { API_KEY, BASE_URL, TYPE } from './api_config'


export const getData = async (params) => {
    const API_URL = `${BASE_URL}${params}?api_key=${API_KEY}`

    const response = await fetch(API_URL, {
        method:'GET',
    })

    const data = await response.json();
    console.log(data)
    return data;
}
//get all data
// export const getData = async (tabMenu, options) => {
//   const url = `${BASE_URL}/${tabMenu}/${options}`

//   try {
//     const params = {
//       app_key: APP_KEY,
//       type: TYPE,
//     }

//     const getAxios = axios.create({
//       paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
//     })

//     console.log(params)

//     const response = await getAxios.get(url, { params })
//     console.log('RESPONSE', response.data.hits)
//     const data = response.data.hits

//     return data
//   } catch (error) {
//     throw error
//   }
// }

//Seraching data
// export const getSearch = async (tabMenu, options, search)=>{
//     const url = `${BASE_URL}/${tabMenu}/${options}`

//   try {
//     const params = {
//       app_key: APP_KEY,
//       type: TYPE,
//       search: search
//     }

//     const getAxios = axios.create({
//       paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
//     })

//     console.log(params)

//     const response = await getAxios.get(url, { params })
//     console.log('RESPONSE', response.data.hits)
//     const data = response.data.hits

//     return data
//   } catch (error) {
//     throw error
//   }
// }