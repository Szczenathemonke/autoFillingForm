import zooLogo from "./assets/zoo-logo-png-transparent.png";

function ZooFooter() {
  return (
    <footer className="row row bg-primary px-5">
      <div className="container py-3">
        <div className="row"></div>
        <div className="row">
          <div className="text-center text-lg-start col-lg-5">
            <img src={zooLogo} className="rounded" width="150" alt="ZOO img" />
          </div>
          <div className="col col-lg-2 list-group-flush">
            <h4>Learn more</h4>
            <a href="#" className="list-group-item text-black">
              History of Zoo
            </a>
            <a href="#" className="list-group-item text-black">
              Animals
            </a>
            <a href="#" className="list-group-item text-black">
              Zoo Team
            </a>
          </div>
          <div className="col col-lg-2 list-group-flush">
            <h4>Services</h4>
            <a href="#" className="list-group-item text-black">
              Tours
            </a>
            <a href="#" className="list-group-item text-black">
              Media
            </a>
          </div>
          <div className="col col-lg-3 list-group-flush">
            <h4>Contact Us</h4>
            <p>
              Zoologiczna 20 <br />
              01-222 Warsaw, Poland
              <br /> Phone: +48 111 222 333
              <br />
              email:{" "}
              <a href="mailto:ZooOffice@Zoo.pl" className="text-black">
                ZooOffice@Zoo.pl
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ZooFooter;
