const PRODUCTOS_KEY = 'urban_threads_productos';

export const productos = [
  {
    id: 1,
    nombre: 'Camiseta Básica Urban',
    material: 'Algodón 100% orgánico',
    precio: 29,
    emoji: '👕',
    badge: 'NUEVO',
  },
  {
    id: 2,
    nombre: 'Jeans Slim Fit',
    material: 'Denim premium stretch',
    precio: 89,
    emoji: '👖',
    badge: null,
  },
  {
    id: 3,
    nombre: 'Sudadera Oversize',
    material: 'Algodón French Terry',
    precio: 65,
    emoji: '🧥',
    badge: 'POPULAR',
  },
  {
    id: 4,
    nombre: 'Chaqueta Bomber',
    material: 'Nylon resistente al agua',
    precio: 120,
    emoji: '🧣',
    badge: null,
  },
  {
    id: 5,
    nombre: 'Gorra Snapback',
    material: 'Bordado premium',
    precio: 35,
    emoji: '🧢',
    badge: null,
  },
  {
    id: 6,
    nombre: 'Zapatillas Urban',
    material: 'Suela de goma antideslizante',
    precio: 95,
    emoji: '👟',
    badge: 'TOP',
  },
];

/**
 * Obtiene todos los productos
 * @returns {Promise<Array>}
 */
export const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 200);
  });
};

/**
 * Agrega un producto al carrito en localStorage
 * @param {Object} producto
 */
export const agregarAlCarrito = (producto) => {
  const carrito = JSON.parse(localStorage.getItem(PRODUCTOS_KEY) || '[]');
  const existe = carrito.find((p) => p.id === producto.id);
  if (!existe) {
    carrito.push({ ...producto, cantidad: 1 });
  } else {
    existe.cantidad += 1;
  }
  localStorage.setItem(PRODUCTOS_KEY, JSON.stringify(carrito));
  console.log(`[Carrito] ${producto.nombre} añadido. Carrito:`, carrito);
  return carrito;
};

/**
 * Obtiene el carrito actual
 * @returns {Array}
 */
export const obtenerCarrito = () => {
  return JSON.parse(localStorage.getItem(PRODUCTOS_KEY) || '[]');
};
