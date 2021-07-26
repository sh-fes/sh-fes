import Amplify from "aws-amplify";
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const render = () =>
    ReactDOM.render(
        <React.StrictMode>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </React.StrictMode>,
        document.getElementById('root'),
    );

render();
