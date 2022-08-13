import AppRouter from './Routes/AppRouter';
import { Provider } from 'react-redux';
import {store} from './Redux/store'
import { ThemeModeProvider } from './context/ThemeModeProvider';
import { Theme } from "./context/themeModeContext";
import { useState } from 'react';
import './App.css';


const App = () => {
  const [themeClass, setThemeClass] = useState<string>('dark-theme')
  const [theme, setTheme] = useState(Theme.Light);
  const onChangeTheme = (value: Theme) => {
    setThemeClass(theme==='dark' ? "dark-theme" : "light-theme")
    setTheme(value);
  };

  return (
        <Provider store={store}>
          <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
            {/* <div className={themeClass}> */}
            <AppRouter/>
          {/* </div> */}
          </ThemeModeProvider>
        </Provider>
  );
}
export default App;


