import SignUpForm from "./signUpForm";

function ZooSignUp() {
  return (
    <div className="container col-md-5 p-2">
      <div className="row justify-content-center border">
        <div className="row align-items-center justify-content-center bg-primary bg-gradient p-5">
          Wielki arkusz michała
        </div>
        <div className="row align-items-center justify-content-center ">
          <SignUpForm />
        </div>
        <div className="row align-items-center justify-content-center bg-primary bg-gradient">
          <footer className="col-md-5 text-center p-1 ">
            Wielki arkusz michała
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ZooSignUp;
