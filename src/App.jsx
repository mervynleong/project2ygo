import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense } from "react";
const BlueEyesDisplay = React.lazy(() =>
  import("./components/BlueEyesDisplay")
);
const DarkMagicianDisplay = React.lazy(() =>
  import("./components/DarkMagicianDisplay")
);
const NotFound = React.lazy(() => import("./components/NotFound"));
import NavBar from "./components/NavBar";
const Album = React.lazy(() => import("./components/Album"));
const MainPage = React.lazy(() => import("./components/MainPage"));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <div className="page">
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Navigate replace to="/main-Page" />} />
            <Route path="/main-Page" element={<MainPage />} />
            <Route path="/dark-Magician" element={<DarkMagicianDisplay />} />
            <Route path="/blue-Eyes" element={<BlueEyesDisplay />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/album" element={<Album />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
