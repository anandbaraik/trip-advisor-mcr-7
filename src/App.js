import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import {Countries} from "./pages/Countries";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/continents/:continentId/countries" element={<Countries/>}/>
          <Route path="/continents/:continentId/countries/:countryId/destinations" element={<Destinations/>}/>
          <Route path="/continents/:continentId/countries/:countryId/destination/:destinationId:details" element={<DestinationDetails/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;