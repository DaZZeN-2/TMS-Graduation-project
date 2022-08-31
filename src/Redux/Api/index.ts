import { create } from 'apisauce'
import { async } from 'rxjs'


const API = create ({
    baseURL: "https://kinobd.ru/api/films",
})

const getFilm = async() => {
    return await API.get('')
}

const getFilms = async(page:number) => {
    return await API.get('', {page})
}

export { getFilms, getFilm };