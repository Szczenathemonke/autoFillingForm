import ZooHeader from "./ZooHeader";
import ZooContent from "./ZooContent";
import ZooFooter from "./ZooFooter";
import ZooSignUp from "./ZooSignUp";
import ZooPricing from "./ZooPricing";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/custom.scss";

function App(): JSX.Element {
  return (
    <>
      <ZooHeader></ZooHeader>
      <ZooContent></ZooContent>
      <ZooPricing></ZooPricing>
      <ZooSignUp></ZooSignUp>
      <ZooFooter></ZooFooter>
    </>
  );
}

export default App;
