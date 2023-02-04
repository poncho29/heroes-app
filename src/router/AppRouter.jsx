import { Routes, Route, Navigate } from "react-router-dom";

import { Login } from '../auth'
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login/*" element={
          <PublicRoute>
            <Routes>
              <Route path="/*" element={<Login />} />
            </Routes>
          </PublicRoute>
        }/>

        {/* Si no es login redirije a Heroes */}
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }/>
                  
      </Routes>
    </>
  )
}
