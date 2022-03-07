import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
//TODO: Remove all Bootstrap CSS related imports before deploy.
//TODO: Reduce code duplication for Select HTML Tag in sign-up form.
//TODO: Reduce code duplication in logic (better validation) for sign-up form.

// import { Link } from "react-router-dom";
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";
// import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className={styles.appDiv}>
      <Header />
      {/* <HomePage/> */}
      <Footer />
    </div>
  );
}

export default App;
