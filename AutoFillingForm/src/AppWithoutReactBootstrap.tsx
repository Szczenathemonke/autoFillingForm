import SignUpForm from "./signUpForm";
import zooLogo from "./assets/zoo-logo-png-transparent.png";
import zooBg from "./assets/zooBg.png";
import navbarHome from "./assets/icons/house.svg";
import navbarAtractions from "./assets/icons/binoculars-fill.svg";
import navbarAboutZoo from "./assets/icons/animal-svgrepo-com.svg";
import { Nav, Navbar, Container } from "react-bootstrap";

function App2() {
  return (
    <div className="mh-100">
      <Navbar bg="primary" expand="md">
        <Container>
          <Navbar.Brand>
            <img
              src={zooLogo}
              className="rounded"
              width="100px"
              alt="ZOO img"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-nav" />
          <Navbar.Collapse id="responsive-nav" className="justify-content-end">
            <Nav.Link href="#">
              <img src={navbarHome} width="32" /> Home
            </Nav.Link>
            <Nav.Link href="#">
              <img src={navbarAtractions} width="32" /> Atractions
            </Nav.Link>
            <Nav.Link href="#">
              <img src={navbarAboutZoo} width="32" /> About ZOO
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container" style={{ backgroundImage: `url(${zooBg})` }}>
        <div className="row justify-content-end">
          <div className="col-11 col-md-7 m-4 p-3 rounded-5 bg-light bg-opacity-50 ">
            <div className="p-3">
              <h2>Czym jest ZOO</h2>
              <p className="text-justify">
                Ogród zoologiczny potocznie zwany zoo to teren najczęściej o
                charakterze parkowym, na którym znajdują się budynki, wybiegi i
                klatki gdzie żyją zwierzęta z różnych zakątków naszego globu.
                Władze ogrodu mają na celu stworzenia im warunków życia
                podobnych do tych naturalnych. Ogrody zoologiczne mają za
                zadanie pełnić rolę edukacyjną i rekreacyjną przy jednoczesnej
                ochronie prezentowanych gatunków i systematycznych badaniach nad
                ich hodowaniem. Od wielu lat ogrody te również mają ogromny
                udział w przywracaniu gatunków wymarłych lub tych zagrożonych
                wyginięciem. W Polsce funkcjonują 24 ogrody zoologiczne,
                oficjalny wykaz których znajduje się na stronie internetowej
                Generalnej Dyrekcji Ochrony Środowiska.
              </p>
              <button className="btn btn-outline-secondary color-white">
                <a
                  href="https://www.polska.travel/pl/poznaj-atrakcje-i-zabytki/zabytki-i-inne-atrakcje/ogrody-zoologiczne"
                  className="text-black text-end"
                >
                  więcej...
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="container">zwiedzanie </div>
      </section>
      <div className="container col-md-5 p-2">
        <div className="row justify-content-center border">
          {/* <div className="row"></div> */}
          <div className="row align-items-center justify-content-center bg-light bg-gradient p-5">
            Wielki arkusz michała
          </div>
          <div className="row align-items-center justify-content-center ">
            <SignUpForm />
          </div>
          <div className="row align-items-center justify-content-center bg-light bg-gradient">
            <footer className="col-md-5 text-center p-1 ">
              Wielki arkusz michała
            </footer>
          </div>
        </div>
      </div>
      <footer className="container bg-primary">
        <div className="container py-3">
          <div className="row"></div>
          <div className="row">
            <div className="text-center text-lg-start col-lg-6">
              <img
                src={zooLogo}
                className="rounded"
                width="150"
                alt="ZOO img"
              />
            </div>
            <div className="col col-lg-2 list-group-flush">
              Learn more
              <a href="#" className="list-group-item text-black">
                test2
              </a>
              <a href="#" className="list-group-item text-black">
                test2
              </a>
              <a href="#" className="list-group-item text-black">
                test2
              </a>
              <a href="#" className="list-group-item text-black">
                test2
              </a>
            </div>
            <div className="col col-lg-2 list-group-flush">
              services
              <a href="#" className="list-group-item text-black">
                test2
              </a>
              <a href="#" className="list-group-item text-black">
                test2
              </a>
              <a href="#" className="list-group-item text-black">
                test2
              </a>
              <a href="#" className="list-group-item text-black">
                test2
              </a>
            </div>
            <div className="col col-lg-2 list-group-flush">
              Contact
              <a href="#" className="list-group-item text-black">
                test2
              </a>
              <a href="#" className="list-group-item text-black">
                test2
              </a>
              <a href="#" className="list-group-item text-black">
                test2
              </a>
              <a href="#" className="list-group-item text-black">
                test2
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App2;
