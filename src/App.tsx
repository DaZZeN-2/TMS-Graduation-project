import AppRouter from './Routes/AppRouter';
import { Provider } from 'react-redux';
import {store} from './Redux/store'
import { ThemeModeProvider } from './context/ThemeModeProvider';
import { Theme } from "./context/themeModeContext";
import { useState } from 'react';
import './App.css';


const App = () => {
  const [theme, setTheme] = useState(Theme.Light);
  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };

  return (
        <Provider store={store}>
          <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
            <div className={theme ? "App" : "App _dark"}>
            <AppRouter/>
          </div>
          </ThemeModeProvider>
        </Provider>
  );
}
export default App;


