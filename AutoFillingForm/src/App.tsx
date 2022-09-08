import SignUpForm from "./signUpForm";

function App() {
  return (
    <div className="container">
      {/* <div className="row"></div> */}
      <div className="row row-md align-items-center justify-content-center text-bg-dark ">
        <div className="col-md-3 text-center">Wielki arkusz michała</div>
      </div>
      <div className="row align-items-center justify-content-center">
        <SignUpForm />
      </div>
    </div>
  );
}

export default App;
