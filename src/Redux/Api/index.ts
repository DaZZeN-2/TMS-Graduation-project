import { create } from 'apisauce'

const API = create({
    baseURL: "http://www.omdbapi.com/",
    headers: {}
})

const APIS = create ({
    baseURL: "https://kinobd.ru/api/films",
})

const getFilm = (i: string, key: string) => {
    return API.get('', {i, apikey: key})
}

const Films = () => {
    return APIS.get('')
}

export { getFilm, Films };