// ===== HELPERS / UTILS =====

/**
 * Genera un ID único basado en timestamp + random
 * @returns {string}
 */
export const generarId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Formatea una fecha a string legible en español
 * @param {Date|string} fecha
 * @returns {string}
 */
export const formatearFecha = (fecha = new Date()) => {
  const d = new Date(fecha);
  return d.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Formatea un número como precio en euros
 * @param {number} precio
 * @returns {string}
 */
export const formatearPrecio = (precio) => {
  return `€${Number(precio).toFixed(2)}`;
};

/**
 * Valida que un email tenga formato correcto
 * @param {string} email
 * @returns {boolean}
 */
export const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Guarda datos en localStorage
 * @param {string} clave
 * @param {any} valor
 */
export const guardarEnStorage = (clave, valor) => {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
  } catch (error) {
    console.error('Error guardando en localStorage:', error);
  }
};

/**
 * Obtiene datos de localStorage
 * @param {string} clave
 * @returns {any}
 */
export const obtenerDeStorage = (clave) => {
  try {
    const item = localStorage.getItem(clave);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error leyendo de localStorage:', error);
    return null;
  }
};