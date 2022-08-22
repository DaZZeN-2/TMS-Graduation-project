import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import './Firebase'
import { Provider } from 'react-redux';
import {store} from './Redux/store'

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Failed to find the root element');
}
const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </Provider>
        ,
);
