import ZooHeader from "./ZooHeader";
import ZooContent from "./ZooContent";
import ZooFooter from "./ZooFooter";
import ZooSignUp from "./ZooSignUp";
import ZooPricing from "./ZooPricing";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/custom.scss";
import { Routes, Route } from "react-router-dom";
import ZooSignUpSummary from "./ZooSignUpSummary";

function App(): JSX.Element {
  return (
    <Routes>
      <ZooHeader />

      <Route path="/">
        <ZooContent />
        <ZooPricing />
        <ZooSignUp />
      </Route>
      <Route path="/summary">
        <ZooSignUpSummary />
      </Route>
      <ZooFooter />
    </Routes>
  );
}

export default App;
