import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom"; //BrowserRouter отображает ссылки без #, HashRouter отображает ссылки с знаком #, это нужно для корректной работы github.pages
import {Provider} from "react-redux"; //<Provider />делает Redux store доступным для любых вложенных компонентов, которые были заключены в connect()функцию.

//в <Provider> можно закинуть кроме store любой елемент необходимый всему приложению

ReactDOM.render( 
    <HashRouter>
        <Provider store={store}>
        <App/>
        </Provider>
    </HashRouter>, document.getElementById('root'));
    

serviceWorker.unregister();
