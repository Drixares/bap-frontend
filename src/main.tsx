import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import NotFoundPage from './routes/not-found.tsx'
import ProjectPage from './routes/project.tsx'
import Root from './routes/root.tsx'
import SearchPage from './routes/search.tsx'

const router = createBrowserRouter([
  {
    path: '/', // Home page
    element: <Root />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/search', // Search page
    element: <SearchPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/project/:slug', // Project page
    element: <ProjectPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '*', // Not found page
    element: <NotFoundPage />
  }
  
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>
)