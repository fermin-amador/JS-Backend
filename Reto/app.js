import {
  agendarCita,
  atenderCita,
  cancelarCita,
  horaOcupada,
  obtenerCitas,
} from './citas.js';
import {
  mostrarAgenda,
  mostrarMenu,
  mostrarMensaje,
  pedirDatosNuevaCita,
  pedirIndice,
} from './interfaz.js';

const salirDelPrograma = () => {
  mostrarMensaje('¡Gracias por usar la agenda! Hasta luego.');
};

const manejarAgendamiento = () => {
  const datos = pedirDatosNuevaCita();

  if (horaOcupada(datos.hora)) {
    mostrarMensaje(`❌ Error: La hora ${datos.hora} ya está ocupada.`);
    return;
  }

  agendarCita(datos.cliente, datos.servicio, datos.hora);
  mostrarMensaje('✅ ¡Cita agendada con éxito!');
};

const manejarAtencion = () => {
  mostrarAgenda(obtenerCitas());
  const indiceAtender = pedirIndice('atender');

  if (atenderCita(indiceAtender)) {
    mostrarMensaje('✅ Cita marcada como atendida.');
  } else {
    mostrarMensaje('❌ Error: Número de cita no válido.');
  }
};

const manejarCancelacion = () => {
  mostrarAgenda(obtenerCitas());
  const indiceCancelar = pedirIndice('cancelar');

  if (cancelarCita(indiceCancelar)) {
    mostrarMensaje('✅ Cita cancelada y eliminada de la agenda.');
  } else {
    mostrarMensaje('❌ Error: Número de cita no válido.');
  }
};

const iniciarPrograma = () => {
  while (true) {
    const opcion = mostrarMenu();

    switch (opcion) {
      case '1':
        manejarAgendamiento();
        break;
      case '2':
        mostrarAgenda(obtenerCitas());
        break;
      case '3':
        manejarAtencion();
        break;
      case '4':
        manejarCancelacion();
        break;
      case '5':
      case 'salir':
        salirDelPrograma();
        return;
      default:
        mostrarMensaje('❌ Opción no válida. Por favor, elige un número del 1 al 5.');
    }
  }
};

iniciarPrograma();