import { create } from 'apisauce'


const API = create ({
    baseURL: "https://kinobd.ru/api/films",
})

const getFilm = () => {
    return API.get('')
}

const getFilms = (page:number) => {
    return API.get('', {page})
}

export { getFilms, getFilm };