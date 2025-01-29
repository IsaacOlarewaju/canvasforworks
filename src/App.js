import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import { HomeIndex } from "./pages/homepage/HomeIndex";
import { InformationIndex } from "./pages/information/InformationIndex";
import { CornerstoneIndex } from "./pages/projects/cornerstone/CornerstoneIndex";
import { CottaIndex } from "./pages/projects/cotta/CottaIndex";
import { GooseIndex } from "./pages/projects/goose/GooseIndex";
import { GsplIndex } from "./pages/projects/gspl/GsplIndex";
import { SoarRisingIndex } from "./pages/projects/soarRising/SoarRisingIndex";
import { LifeCreationsIndex } from "./pages/projects/lifeCreations/LifeCreationsIndex";
import { FlavourFlamesIndex } from "./pages/projects/flavourFlames/FlavourFlamesIndex";
import { Privacy } from "./pages/privacy/Privacy";
import { ProjectsIndex } from "./pages/projects/ProjectsIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectsIndex />}></Route>
        {/* <Route path="/" element={<HomeIndex />}></Route> */}
        <Route path="/InformationIndex" element={<InformationIndex />}></Route>
        <Route path="/CornerstoneIndex" element={<CornerstoneIndex />}></Route>
        <Route path="/CottaIndex" element={<CottaIndex />}></Route>
        <Route path="/GooseIndex" element={<GooseIndex />}></Route>
        <Route path="/SoarRisingIndex" element={<SoarRisingIndex />}></Route>
        <Route path="/Privacy" element={<Privacy />}></Route>
        <Route path="/ProjectsIndex" element={<ProjectsIndex />}></Route>
        <Route path="/GsplIndex" element={<GsplIndex />}></Route>
        <Route
          path="/FlavourFlamesIndex"
          element={<FlavourFlamesIndex />}
        ></Route>
        <Route
          path="/LifeCreationsIndex"
          element={<LifeCreationsIndex />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
