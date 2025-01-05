import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './app/store'
import { DarkMode } from './context/DarkMode'
import './index.css'

import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { ErrorPage } from './pages/ErrorPage'
import { ProductPage } from './pages/ProductPage'
import { ProfilePage } from './pages/ProfilePage'
import { DetailProductPage } from './pages/DetailProductPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/product",
    element: <ProductPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "/detail/:id",
    element: <DetailProductPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <DarkMode>
        <RouterProvider router={router} />
      </DarkMode>
    </Provider>
  </StrictMode>,
)
