import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayOut from "./Layouts/PageLayout/PageLayOut";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <PageLayOut>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayOut>
  );
}

export default App;
