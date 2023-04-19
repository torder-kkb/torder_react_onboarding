import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Header = lazy(() => import("./layouts/Header"));
const HomePage = lazy(() => import("./pages/HomePage/index"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
