import SignUpForm from "./signUpForm";

function ZooSignUp() {
  return (
    <div className="container col-md-5 p-2 my-5">
      <div className="row justify-content-center border">
        <div className="row align-items-center justify-content-center bg-primary bg-gradient p-5">
          <h3 className="text-center">Reservation</h3>
        </div>
        <div className="row align-items-center justify-content-center ">
          <SignUpForm />
        </div>
        <div className="row align-items-center justify-content-center bg-primary bg-gradient">
          <footer className="col-md-5 text-center p-1 "></footer>
        </div>
      </div>
    </div>
  );
}

export default ZooSignUp;
