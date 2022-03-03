import "bootstrap/dist/css/bootstrap.min.css";
//TODO: Remove all Bootstrap CSS related imports before deploy.
//TODO: Reduce code duplication for Select HTML Tag in sign-up form.
//TODO: Reduce code duplication in logic (better validation) for sign-up form.

import LoginPage from "./components/AuthPages/LoginPage/LoginPage";
import SignupPage from "./components/AuthPages/SignupPage/SignupPage";

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-5">
          <SignupPage />
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <LoginPage />
        </div>
      </div>
    </div>
  );
}

export default App;
