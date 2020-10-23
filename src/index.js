import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceworker from './serviceWorker';
import HttpsRedirct from 'react-https-redirect';

ReactDOM.render(
    <HttpsRedirct>
        <App />
    </HttpsRedirct>,
    document.getElementById('root')
);

serviceworker.unregister();