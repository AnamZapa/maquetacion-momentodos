# # Ejercicio de maquetación - Momento Dos

Proyecto de maquetación desarrollado en **React + Vite**, basado en el diseño original de [maquetacion-dos.netlify.app](https://maquetacion-dos.netlify.app/#). Simula una tienda de ropa urbana minimalista con navegación entre vistas, catálogo de productos y formulario de contacto funcional.

---

## Estructura del proyecto

```
src/
├── components/         
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── layouts/            
│   └── MainLayout.jsx
├── styles/             
│   ├── global.css
│   ├── Navbar.css
│   ├── Hero.css
│   ├── ProductCard.css
│   ├── Footer.css
│   └── pages.css
├── pages/              
│   ├── Home.jsx
│   ├── Productos.jsx
│   └── Contacto.jsx
├── routes/             
│   └── AppRouter.jsx
├── helpers/            
│   └── utils.js
└── services/           
    ├── productosService.js
    └── contactoService.js
```

---

## Funcionalidades

- **Página de inicio** — Hero con llamada a la acción y vista previa de productos destacados.
- **Página de productos** — Catálogo completo con 6 productos. El botón *Añadir* guarda el ítem en `localStorage` y lo registra en consola.
- **Página de contacto** — Formulario con validación de campos. Al enviarse, los datos se almacenan en `localStorage` y se muestran en consola con `console.table()`.
- **Navegación** — Enrutamiento con `react-router-dom` entre las tres vistas.

---

## Tecnologías utilizadas

| Tecnología | Versión |
|---|---|
| React | 19 |
| Vite | 8 |
| react-router-dom | 7 |

---

## Cómo poner en funcionamiento

### Requisitos previos

Tener instalado en el sistema:
- [Node.js](https://nodejs.org/) versión 18 o superior
- npm (viene incluido con Node.js)

Verificar instalación:
```bash
node -v
npm -v
```

### Pasos

**1. Clonar desde GitHub el proyecto**

https://github.com/AnamZapa/maquetacion-momentodos.git

**2. Abrir una terminal en la carpeta del proyecto**

```bash
code .
```

**3. Instalar dependencias**

```bash
npm install
```

**4. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

**5. Abrir en el navegador**

La terminal mostrará una URL similar a:

```
➜  Local:   http://localhost:5173/
```

Abrir esa URL en el navegador.

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con hot reload |
| `npm run build` | Genera la versión de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción localmente |

---

## Datos y almacenamiento

La aplicación no requiere backend. Todos los datos se manejan de la siguiente manera:

- **Productos** — definidos como array estático en `src/services/productosService.js`.
- **Carrito** — guardado en `localStorage` bajo la clave `urban_threads_productos`.
- **Mensajes de contacto** — guardados en `localStorage` bajo la clave `urban_threads_mensajes` y visibles en la consola del navegador (`F12 → Console`).

---

##  Autor del proyecto

Ana María Zapata Pinillos
