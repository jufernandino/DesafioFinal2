import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//CONFIGURAÇÃO ROUTER
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import LoginPage from "./routes/Login";
import RegistrationPage from "./routes/Registration";
import ArtistPage from "./routes/ArtistPage";
import PlaylistPage from "./routes/PlaylistPage";
import MyAccount from "./routes/MyAccount";
import FavoritePage from "./routes/FavoritePage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<LoginPage />
  },
  {
    path: "register",
    element: <RegistrationPage />
  },
  {
    path: "home",
    element: <ArtistPage />
  },
  {
    path: "/home/playlist/:id",
    element: <PlaylistPage />
  },
  {
    path: "myaccount",
    element: <MyAccount />
  },
  {
    path: "favorites",
    element: <FavoritePage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
