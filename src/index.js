import * as React  from 'react';
import ReactDOM from 'react-dom/client';
import Page from './pages/Page';

import "./index.css";

import { ChakraProvider } from '@chakra-ui/react';
import Theme from "./pages/shared/Theme";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
        <BrowserRouter>
           <Page />
        </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
