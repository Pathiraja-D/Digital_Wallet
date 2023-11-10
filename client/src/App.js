import HomePage from "./Pages/Home-page/HomePage";
import UserCrud from "./Pages/UserHandle/UserCrud";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Pages/AdminHandle/AdminLogin";
import LoginPage from "./Pages/LoginPage/LoginPage";
import MainMenu from "./Pages/MainMenu/MainMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<UserCrud />} />
        <Route path="/admin/user/manage" element={<AdminLogin />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
