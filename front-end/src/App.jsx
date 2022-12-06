import { Routes, Route } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";
import Calculators from "./components/Calculators";
// import Headers from "./components/Headers";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Headers /> */}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
        <Route path="/calculator" element={<Calculators />} />
      </Routes>
    </>
  );
}

export default App;
