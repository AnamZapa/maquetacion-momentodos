// ===== SERVICE: contacto =====

const MENSAJES_KEY = 'urban_threads_mensajes';

/**
 * Guarda un mensaje de contacto en localStorage y lo muestra en consola
 * @param {Object} datos - Datos del formulario de contacto
 * @returns {Promise<Object>}
 */
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

/**
 * Obtiene todos los mensajes guardados
 * @returns {Array}
 */
export const obtenerMensajes = () => {
  return JSON.parse(localStorage.getItem(MENSAJES_KEY) || '[]');
};