import ZooHeader from "./ZooHeader";
import ZooContent from "./ZooContent";
import ZooFooter from "./ZooFooter";
import ZooSignUp from "./ZooSignUp";
import ZooPricing from "./ZooPricing";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/custom.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ZooSignUpSummary from "./ZooSignUpForm";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ZooHeader />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ZooContent />
              <ZooPricing />
              <ZooSignUp />
            </>
          }
        />
        <Route path="summary" element={<ZooSignUpSummary />}></Route>
      </Routes>
      <ZooFooter />
    </BrowserRouter>
  );
}

export default App;
