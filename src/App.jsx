import { BrowserRouter, Link, Route, Routes, Navigate,   Outlet,
  useLocation } from 'react-router-dom'
 import {Header} from './components/Header'
 import React from 'react'
/* import Footer from './components/Footer'
import { Button } from './components/ui/button' */

import Home from './PublicZone/Home'
import MeetUs from './PublicZone/MeetUs'
import Servicios from './PublicZone/EnterpriseServices';
import ComoTrabajamos from "./PublicZone/ComoTrabajamos";
import {
  AvisoLegal,
  PoliticaPrivacidad,
  CondicionesServicio,
} from "./PublicZone/LegalPages";


 
function Placeholder({ title }) {
  return <> <Header/> <main className="flex min-h-[75vh] items-center justify-center px-6 pt-24"><div className="max-w-xl text-center"><PawPrint className="mx-auto mb-5 h-12 w-12 text-brand-green"/><p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-green">Pawsitive Sanctuary</p><h1 className="font-display text-4xl font-extrabold text-ink">{title}</h1><p className="mt-4 leading-7 text-muted">Esta sección la desarrollaremos en la siguiente fase del proyecto.</p><Button asChild className="mt-8"><Link to="/">Volver a la home</Link></Button></div></main>{/* <Footer/> */}</>
}

function isAuthenticated() {
  return Boolean(localStorage.getItem("pawsitive_token"));
}

function ProtectedRoute() {
  const location = useLocation();
/* TODO: eliminar false */
  if (!isAuthenticated() && false) {
    return (
      <Navigate
        to="/login-clientes"
        state={{ from: location }}
        replace
      />
    );
  }

  return <Outlet />;
}

export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<Home/>}/>
   <Route path="/quienes-somos" element={<MeetUs />} />
<Route path="/servicios" element={<Servicios />} />
<Route
  path="/como-trabajamos"
  element={<ComoTrabajamos />}
/>
{/* legales */}
<Route path="/aviso-legal" element={<AvisoLegal />} />

<Route
  path="/politica-de-privacidad"
  element={<PoliticaPrivacidad />}
/>

<Route
  path="/condiciones-del-servicio"
  element={<CondicionesServicio />}
/>


{/* Clientes */}
{/*   <Route path="/login-clientes" element={<ClientLoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<CustomerDashboardPage />} />
</Route> */}


    <Route path="*" element={<Placeholder title="Página no encontrada"/>}/>


  </Routes></BrowserRouter>
}
