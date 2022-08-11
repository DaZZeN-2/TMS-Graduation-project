export interface IMovie {
    data: string,
    big_poster: string,
    name_russian: string,
    id: string,
    genres: string,
    rating_imdb: string,
    time: string,
    description: string,
    year: string,
    premiere_world: string,
    budget: string,
    year_start: string,
    persons: string,
    country_ru: string,
}

export type FilmContainerParams = {
    imdb: string,
    id: string
}