import { useState } from "react";
import SignUpForm from "./signUpForm";

function App() {
  return (
    <div className="row ">
      {/* <div className="row"></div> */}
      <div className="row align-items-center justify-content-center text-bg-dark ">
        Wielki arkusz michała
      </div>
      <div className="row align-items-center justify-content-center">
        <SignUpForm />
      </div>
    </div>
  );
}

export default App;
