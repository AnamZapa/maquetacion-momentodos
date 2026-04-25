import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Productos from '../pages/Productos';
import Contacto from '../pages/Contacto';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'productos',
        element: <Productos />,
      },
      {
        path: 'contacto',
        element: <Contacto />,
      },
    ],
  },
]);

export default router;