import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
//TODO: Remove all Bootstrap CSS related imports before deploy.
//TODO: Reduce code duplication for Select HTML Tag in sign-up form.
//TODO: Reduce code duplication in logic (better validation) for sign-up form.

import { Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/UI/Footer/Footer";
import LoginPage from "./components/AuthPages/LoginPage/LoginPage";
import SignupPage from "./components/AuthPages/SignupPage/SignupPage";
import ExpertsPage from "./components/ExpertsPage/ExpertsPage";
import AskQueryPage from "./components/AskQueryPage/AskQueryPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className={styles.appDiv}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/experts" element={<ExpertsPage />} />
        <Route path="/ask-query" element={<AskQueryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
