import adultIcon from "./assets/icons/adult.svg";
import kidIcon from "./assets/icons/kid.svg";
function ZooPricing() {
  return (
    <section>
      <div className="container bg-white p-5 ">
        <div className="row ">
          <h2 className="text-center">
            Our Zoo is place full of atractions
            <br /> for all kids and adults alike!
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-md-2 justify-content-evenly gy-3 gx-0">
          <div className="card col-8 col-md-3">
            <div className="card-header bg-primary text-center">
              <h3>Price for Kids</h3>
            </div>
            <div className="card-body text-center">
              <img src={kidIcon} width="100"></img>
              <h2>10,00 zł</h2>
            </div>
          </div>
          <div className="card col-8 col-md-3">
            <div className="card-header bg-primary text-center">
              <h3>Price for Adults</h3>
            </div>
            <div className="card-body text-center">
              <img src={adultIcon} width="100"></img>

              <h2>15,00 zł</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZooPricing;
