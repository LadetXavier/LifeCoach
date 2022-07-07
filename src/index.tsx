import React from 'react';
import { render } from 'react-dom';

import App from './components/App/index';


const rootReactElement = <App />;
const target = document.getElementById('root');
render(rootReactElement, target);
