const agenda = [];

const crearCita = ({ cliente, servicio, hora }) => ({
  cliente,
  servicio,
  hora,
  atendida: false,
});

export const horaOcupada = (hora) => agenda.some(({ hora: citaHora }) => citaHora === hora);

export const agendarCita = (cliente, servicio, hora) => {
  const nuevaCita = crearCita({ cliente, servicio, hora });
  agenda.push(nuevaCita);
  return nuevaCita;
};

export const obtenerCitas = () => agenda;

export const atenderCita = (indice) => {
  const cita = agenda[indice];
  if (!cita) return false;

  cita.atendida = true;
  return true;
};

export const cancelarCita = (indice) => {
  if (indice < 0 || indice >= agenda.length) return false;

  agenda.splice(indice, 1);
  return true;
};