import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ Import this
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Contextprovider from "./Components/context/Contextprovider";
import reportWebVitals from './reportWebVitals'; 

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Contextprovider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Contextprovider>
);

reportWebVitals();
