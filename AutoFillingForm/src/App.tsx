import SignUpForm from "./signUpForm";

function App() {
  return (
    <div className="container my-2 mx-4">
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
