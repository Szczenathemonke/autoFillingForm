import SignUpForm from "./signUpForm";
import zooLogo from "./assets/zooLogo.png";
import zooBg from "./assets/zooBg.png";
function App() {
  return (
    <>
      <header className="bg-primary">
        <nav className="row justify-content-end mx-3">
          <a href="#" className="text-white col-md-auto">
            home
          </a>
          <a href="#" className="text-white col-md-auto">
            Atractions
          </a>
          <a href="#" className="text-white col-md-auto">
            about ZOO
          </a>
        </nav>
      </header>

      <div className="">
        <div className="row">
          <div className="col">Witamy w ZOO</div>
          <div className="col-11 col-md-7 m-4 p-3">
            <p className="text-start">
              Ogród zoologiczny potocznie zwany zoo to teren najczęściej o
              charakterze parkowym, na którym znajdują się budynki, wybiegi i
              klatki gdzie żyją zwierzęta z różnych zakątków naszego globu.
              Władze ogrodu mają na celu stworzenia im warunków życia podobnych
              do tych naturalnych. Ogrody zoologiczne mają za zadanie pełnić
              rolę edukacyjną i rekreacyjną przy jednoczesnej ochronie
              prezentowanych gatunków i systematycznych badaniach nad ich
              hodowaniem. Od wielu lat ogrody te również mają ogromny udział w
              przywracaniu gatunków wymarłych lub tych zagrożonych wyginięciem.
              W Polsce funkcjonują 24 ogrody zoologiczne, oficjalny wykaz
              których znajduje się na stronie internetowej Generalnej Dyrekcji
              Ochrony Środowiska.
            </p>
            <a
              href="https://www.polska.travel/pl/poznaj-atrakcje-i-zabytki/zabytki-i-inne-atrakcje/ogrody-zoologiczne"
              className="text-black text-end"
            >
              więcej...
            </a>
          </div>
        </div>
      </div>
      <section>
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
      <footer className="bg-primary">
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
    </>
  );
}

export default App;
