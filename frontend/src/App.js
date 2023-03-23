import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegisPage from "./pages/RegisterPage/RegisPage";
import HomePages from "./pages/HomePage/HomePages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GlobalStyle} from "./components/Globalstyle/Globalstyle";
import ManagePage from "./pages/ManagePage/ManagePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./HOC/layout/Layout";
import {adminRouter} from "./routers/adminRouter";

function App() {
  let renderRoutes = () => {
    return adminRouter.map(({path, Component}) => {
      return (
        <Route
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      );
    });
  };
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      {/* <HomePages /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePages />} />
          {/* <Route path="/usermanagement" element={<ManagePage />} /> */}
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
