import { FC } from "react";
import { useThemeContext } from "../../context/themeModeContext";
import Filter from '../../img/filter-icon.png'

interface SearchProps {

}

const Search: FC<SearchProps> = () => {

    const value = useThemeContext();
    const themeClass = value.theme==='light' ? "dark-input" : "light-input"

    return (
                <div className="Search">
                    <input className={`search-input ${themeClass}`} placeholder="Search" type="text"></input>
                    <img className="filter-icon" src={Filter} alt='filter'/>
                </div>
    )
}

export default Search;