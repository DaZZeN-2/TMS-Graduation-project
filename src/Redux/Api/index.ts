import { create } from 'apisauce'

const API = create ({
    baseURL: "https://kinobd.ru/api/films",
})

const getFilms = () => {
    return API.get('')
}

export { getFilms };