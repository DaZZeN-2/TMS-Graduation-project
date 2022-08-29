import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import './Firebase'
import { Provider } from 'react-redux';
import {store, persistor} from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Failed to find the root element');
}
const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
        <BrowserRouter>
        <PersistGate persistor={persistor}>
            <App/>
        </PersistGate>
        </BrowserRouter>
        </Provider>
        ,
);
