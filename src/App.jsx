import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense } from "react";
const BlueEyesDisplay = React.lazy(() =>
  import("./components/BlueEyesDisplay")
);
// import BlueEyesDisplay from "./components/BlueEyesDisplay";
const DarkMagicianDisplay = React.lazy(() =>
  import("./components/DarkMagicianDisplay")
);
// import DarkMagicianDisplay from "./components/DarkMagicianDisplay";
const NotFound = React.lazy(() => import("./components/NotFound"));
// import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
const Album = React.lazy(() => import("./components/Album"));
// import Album from "./components/Album";
const MainPage = React.lazy(() => import("./components/MainPage"));
// import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <div className="page">
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Navigate replace to="/MainPage" />} />
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/Dark-Magician" element={<DarkMagicianDisplay />} />
            <Route path="/Blue-Eyes" element={<BlueEyesDisplay />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Album" element={<Album />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
