import React from 'react';
import {createRoot} from 'react-dom/client';


import App from './components/App/index';


const rootReactElement = <App />;
const target = document.getElementById('root');
const root = createRoot(target!);
root.render(rootReactElement);
