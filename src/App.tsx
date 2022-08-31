import AppRouter from './Routes/AppRouter';

import { ThemeModeProvider } from './context/ThemeModeProvider';
import { Theme } from "./context/themeModeContext";
import { useEffect, useState } from 'react';
import './App.css';
import { fetchMovies, useMovieDispatch } from './Redux/slices/moviesSlice';


const App = () => {
  const [themeClass, setThemeClass] = useState<string>('dark-theme')
  const [theme, setTheme] = useState(Theme.Light);
  const onChangeTheme = (value: Theme) => {
    setThemeClass(theme==='dark' ? "dark-theme" : "light-theme")
    setTheme(value);
  };

  const dispatch = useMovieDispatch();

  useEffect(() => {
      dispatch(fetchMovies(1))
  })

  return (
          <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
            <div className={themeClass}>
            <AppRouter/>
          </div>
          </ThemeModeProvider>
  );
}
export default App;


