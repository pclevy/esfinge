//import { Routes, Route, Link } from "react-router-dom";
//import { Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Players from "./pages/players";
import Home from "./pages/home";
//import ProjetoEsfinge from "./ProjetoEsfinge";
//import ArquivoArbitro from "./ArquivoArbitro";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/players" element={<Players />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
