/**
 * Store.js: Componente que contendrá los
 * estados globales del proyecto usando la
 * dependencia de Zustand.
 */

import { create } from "zustand";

// ESTADO GLOBAL
const useStore = create((set) => ({
  reservations: [], // Super estado que recibirá datos - array vacío.
  // Ahora crearemos estados a partir del estado global.
  addReservation: (hotel, dates) =>
    set((state) => ({
      reservations: [...state.reservations, { hotel, dates }],
      // Devuelve el nuevo estado para crear una copia del estado
      // de las reservas compuestas por el hotel y días.
    })),
}));

export default useStore;
