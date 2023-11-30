import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app';
import { FilterProvider } from './webPages/hotelListingPage/components/fiterContext';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>
);
