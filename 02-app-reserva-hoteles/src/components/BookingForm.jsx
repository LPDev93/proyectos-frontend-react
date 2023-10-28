/**
 * Creamos un formulario usando React Hook Form.
 * usaremos el react use form y también elementos
 * de MUI para hacerlo atractivo. Adicionalmente,
 * usamos Zustand para llamar a nuestro "store".
 */

import { useForm } from "react-hook-form";
import { Button, Input, Typography } from "@mui/material";
import toast from "react-hot-toast";
import useStore from "../store";

// Recibe una prop con los datos del hotel
function BookingForm({ hotel }) {
  // UseForm nos devuelve un objeto destructurado
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Llamamos a la función useStore de Store y recuperamos el estado
  // de reservación.
  const addReservation = useStore((state) => state.addReservation);

  // Envío del formulario
  const onSubmit = (data) => {
    // Guardamos y enviamos los datos al Global State
    // Reservations que creamos en store.js
    addReservation(hotel, data);
    // Usando la dependencia toast crearemos mensajes dinámicos
    toast.success("¡La reserva se realizó con éxito!");
  };

  // Usado el hook de useForm podremos usar el REST OPERATOR para pasar
  // los datos usando la props de creadas.
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="date" {...register("startDate", { required: true })} />
      {errors.startDate && (
        <Typography style={{ color: "red" }}>Fecha de partida requerida</Typography>
      )}
      <br />
      <Input type="date" {...register("endDate", { required: true })} />
      {errors.endDate && (
        <Typography style={{ color: "red" }}>Fecha de retorno requerida</Typography>
      )}
      <br />
      <br />
      <Button variant="contained" type="submit">
        Reservar
      </Button>
    </form>
  );
}

export default BookingForm;
