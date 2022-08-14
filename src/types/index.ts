export interface IMovie {
    data: string,
    big_poster: string,
    name_russian: string,
    id: string,
    genres: IGenre[],
    rating_imdb: string,
    time_minutes: string,
    description: string,
    year: string,
    premiere_world: string,
    budget: string,
    year_start: string,
    persons: string,
    country_ru: string,
}

export type FilmContainerParams = {
    id: string,
}

export interface IGenre {
    id: number,
    name_ru: string,
}