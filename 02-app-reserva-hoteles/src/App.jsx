/**
 * Necesitamos importar QueryClient y QueryClientProvider
 * con esto configuramos el React Query. De paso configuramos
 * el enrutamiento usando la dependencia wouter.
 */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { Toaster } from "react-hot-toast";
import HotelList from "./components/HotelList";
import HotelDetails from "./components/HotelDetails";
import { Container } from "@mui/material";

// Creamos el cliente
const client = new QueryClient();

function App() {
  return (
    <>
      <Toaster position="top-left" />
      {/* Requiero pasar la propiedad cliente al proveedor */}
      <Container maxWidth="md">
        <QueryClientProvider client={client}>
          <Switch>
            <Route path="/" component={HotelList} />
            <Route path="/hotel/:id" component={HotelDetails} />
          </Switch>
        </QueryClientProvider>
      </Container>
    </>
  );
}

export default App;
