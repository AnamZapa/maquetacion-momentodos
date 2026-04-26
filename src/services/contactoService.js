// ===== SERVICE: contacto =====

const MENSAJES_KEY = 'urban_threads_mensajes';

export const enviarMensaje = (datos) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mensajes = JSON.parse(localStorage.getItem(MENSAJES_KEY) || '[]');
      const nuevoMensaje = {
        id: `msg-${Date.now()}`,
        ...datos,
        fechaEnvio: new Date().toISOString(),
      };
      mensajes.push(nuevoMensaje);
      localStorage.setItem(MENSAJES_KEY, JSON.stringify(mensajes));

      console.log('=== URBAN THREADS - NUEVO MENSAJE DE CONTACTO ===');
      console.table(nuevoMensaje);
      console.log('Todos los mensajes:', mensajes);

      resolve({ ok: true, mensaje: nuevoMensaje });
    }, 600);
  });
};

export const obtenerMensajes = () => {
  return JSON.parse(localStorage.getItem(MENSAJES_KEY) || '[]');
};