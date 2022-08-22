import { nanoid } from "@reduxjs/toolkit";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/themeModeContext";
import Filter from '../../img/filter-icon.png'
import { IMovie } from "../../types";

interface SearchProps {
    movies: IMovie[],
}

const Search: FC<SearchProps> = ({movies}) => {

    const navigate = useNavigate()

    const value = useThemeContext();
    const themeClassInput = value.theme==='light' ? "dark-input" : "light-input"
    const themeClassSearch = value.theme==='dark' ? "light-theme-search-results" : "dark-theme-search-results"

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<IMovie[]>([]);

    const onChangeHandler = (query:string) => {
        const matches = movies.filter((movie:IMovie) => query.length> 0 && movie.name_russian.toLowerCase().includes(query.toLowerCase()))
        setSuggestions(matches);
        setQuery(query);
    }

    return (
                <div className="Search">
                    <input value={query} onChange={e => onChangeHandler(e.target.value)} className={`search-input ${themeClassInput}`} placeholder="Search" type="text"></input>
                    <img className="filter-icon" src={Filter} alt='filter'/>
                    {suggestions && suggestions.map((suggestion:IMovie) => 
                        <div className={`results ${themeClassSearch}`} onClick={() => navigate(`/film/${suggestion.id}`)} key={nanoid()}>{suggestion.name_russian}</div>
                    )}
                </div>
    )
}

export default Search;