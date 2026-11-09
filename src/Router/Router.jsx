import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../assets/pages/Home"
import Vagas from "../assets/pages/Vagas"
import Simulador from "../assets/pages/Simulador"
import Perfil from "../assets/pages/Perfil"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Vagas" element={<Vagas />} />
      <Route path='/Simulador' element={<Simulador />} />
      <Route path='/Perfil' element={<Perfil />} />
    </Routes>
  )
}

export default Router