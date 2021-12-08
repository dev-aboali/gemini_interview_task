import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContentContextProvider } from './context/contentContext'
ReactDOM.render(
<ContentContextProvider>
    <App />
</ContentContextProvider>
,document.getElementById('root'));

