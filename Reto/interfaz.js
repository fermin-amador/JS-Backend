import promptSync from 'prompt-sync';

const prompt = promptSync();

export const mostrarMenu = () => {
  console.log('\n--- AGENDA DE CITAS ---');
  const opciones = [
    '1. Agendar cita',
    '2. Ver agenda',
    '3. Atender cita',
    '4. Cancelar cita',
    '5. Salir',
  ];

  opciones.forEach((opcion) => console.log(opcion));
  return prompt('Elige una opción: ').toLowerCase().trim();
};

export const mostrarAgenda = (citas) => {
  if (citas.length === 0) {
    console.log('\n📭 La agenda está vacía.');
    return;
  }

  console.log('\n--- LISTADO DE CITAS ---');

  const resumen = citas.reduce(
    (acc, cita) => {
      acc[cita.atendida ? 'atendidas' : 'pendientes'] += 1;
      return acc;
    },
    { pendientes: 0, atendidas: 0 },
  );

  citas.forEach((cita, index) => {
    const numero = index + 1;
    const estado = cita.atendida ? '[✅ Atendida]' : '[⏳ Pendiente]';
    console.log(`${numero}. ${estado} ${cita.cliente} - ${cita.servicio} a las ${cita.hora}`);
  });

  console.log(`\nResumen: ${resumen.pendientes} pendientes, ${resumen.atendidas} atendidas.`);
};

export const pedirDatosNuevaCita = () => {
    // Función para leer un valor con validación
    const leerValor = (mensaje, validar = () => true) => {
    let valor = prompt(mensaje).trim();

    while (!validar(valor)) {
      console.log('❌ El valor ingresado no es válido.');
      valor = prompt(mensaje).trim();
    }

    return valor;
  };

  const cliente = leerValor('Nombre del cliente: ', (valor) => valor.length > 0);
  const servicio = leerValor('Servicio a realizar: ', (valor) => valor.length > 0);
  const hora = leerValor('Hora de la cita (ej. 10:00): ', (valor) => valor.length > 0);

  return { cliente, servicio, hora };
};

export const pedirIndice = (accion) => {
  const input = prompt(`Ingresa el número de la cita que deseas ${accion}: `).trim();
  const indice = Number.parseInt(input, 10) - 1;
  return Number.isNaN(indice) ? -1 : indice;
};

export const mostrarMensaje = (mensaje) => {
  console.log(mensaje);
};