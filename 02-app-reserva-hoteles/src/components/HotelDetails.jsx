/**
 * HotelDetails.jsx: Usaremos React Query para traer
 * los datos de los hoteles y useRoute para la ruta.
 * Además usaremos la librería MUI para el uso de
 * componentes UI.
 */

import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Link,
  Typography,
} from "@mui/material";
import BookingForm from "./BookingForm";

const fetchHotel = async (id) => {
  const res = await fetch(`http://localhost:3001/hotels/${id}`);
  if (!res.ok) {
    throw new Error("¡Hubo un error con la API!");
  }
  return res.json();
};

/**
 * Función para crear el componente y asignar la ruta.
 */
function HotelDetails() {
  // Acciones match y params.
  const [match, params] = useRoute("/hotel/:id");
  const {
    data: hotel,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hotels", params.id], // Pasamos el ID del hotel.
    queryFn: () => fetchHotel(params.id),
  });
  if (isLoading || match === null) {
    return <div>Cargando...</div>;
  }
  // Sí sale algún error
  if (error) {
    return <div>¡Error obteniendo la información! {error.message}</div>;
  }

  return (
    <>
      <Container sx={{ md: "lg", mt: 5 }} maxWidth="lg">
        <Box justifyContent="center" display="flex" sx={{ p: 5 }}>
          <Card sx={{ maxWidth: 345, backgroundColor: "#e8e8e8" }}>
            <CardMedia
              sx={{ height: 140 }}
              image={hotel.image}
              title={hotel.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hotel.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hotel.description}
              </Typography>
            </CardContent>
            <CardActions>
              <BookingForm hotel={hotel} />
            </CardActions>
            <Link href={`/`}>
              <CardActions>
                <Button size="small">Volver al inicio</Button>
              </CardActions>
            </Link>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default HotelDetails;
