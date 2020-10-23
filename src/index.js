import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceworker from './serviceWorker';
import HttpsRedirect from 'react-https-redirect';

import "uikit/dist/css/uikit.css";
import "uikit/dist/js/uikit.js";

ReactDOM.render(
    <HttpsRedirect>
        <App />
    </HttpsRedirect>,
    document.getElementById('root')
);

serviceworker.unregister();