import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { PAGES } from "./constants";
import {
  AboutUsPage,
  AvailableBooksPage,
  LoginPage,
  MainPage,
  ProfilePage,
  RegistrationPage,
} from "./pages";

const App = () => (
  <Layout>
    <Routes>
      <Route path={PAGES.MAIN} element={<MainPage />} />
      <Route path={PAGES.BOOKS} element={<AvailableBooksPage />} />
      <Route path={PAGES.ABOUT} element={<AboutUsPage />} />
      <Route path={PAGES.PROFILE} element={<ProfilePage />} />
      <Route path={PAGES.LOGIN} element={<LoginPage />} />
      <Route path={PAGES.REGISTRATION} element={<RegistrationPage />} />
    </Routes>
  </Layout>
);

export default App;
