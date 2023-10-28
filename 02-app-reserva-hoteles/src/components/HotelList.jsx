/**
 * HotelList.jsx: Usaremos React Query para traer
 * los datos de los hoteles y, así tener un fetching
 * óptimo. Además usaremos la librería MUI para el uso
 * de componentes UI.
 */

import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";

// Función anónima para obtener datos de una API.
const fetchHotels = async () => {
  // Creamos una promesa que retorne los datos de la ruta /hotels.
  const res = await fetch("http://localhost:3001/hotels");
  // Sí la promesa no se resuelve, entonces devolves un error.
  if (!res) {
    throw new Error("Network response was rejected.");
  }
  // En caso sea "true" devuelve la data.
  return res.json();
};

// Función para traer los datos de los hoteles usando useQuery.
// useQuery recibe varios parámetros como la key y el fetch.
function HotelList() {
  // Desestructaramos las propiedades que necesitaremos
  // data -> información
  // isLoading -> sí terminó la carga de datos
  // error -> en caso haya errores
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hotels"],
    queryFn: fetchHotels,
  });
  // Sí sigue cargando la petición
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  // Sí sale algún error
  if (error) {
    return <div>¡Error obteniendo la información! {error.message}</div>;
  }

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            ¡Reservalo ya!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Está aplicación está hecha para aprender a usar los hooks de React y
            dependencias de desarrollo. Adicionalmente, es para prácticar los
            fetch de datos a un servidor y enrutar páginas.
          </Typography>
          <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              {
                // Usaremos el método map para recuperar cada hotel hallado.
                hotels.map((hotel) => (
                  <Grid item key={hotel.id} md={4}>
                    <Link href={`/hotel/${hotel.id}`}>
                      <Card
                        sx={{                          
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <CardMedia
                          component="div"
                          sx={{
                            // 16:9
                            pt: "56.25%",
                          }}
                          image={hotel.image}
                          title={hotel.name}
                        />
                        <CardContent  sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="div">
                            {hotel.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {hotel.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Ver detalles</Button>
                        </CardActions>
                      </Card>
                    </Link>
                  </Grid>
                ))
              }
            </Grid>
          </Container>
        </Container>
      </Box>
    </>
  );
}

export default HotelList;
