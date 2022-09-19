import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

type ClientDataType = {
  id: number;
  name: string;
  email: string;
  date: string;
  kids: string;
  adults: string;
};
function ZooSignUpSummary() {
  const [summaryData, setSummaryData] = useState<ClientDataType | null>(null);
  const [billing, setBilling] = useState(0);
  useEffect(() => {
    fetch("http://localhost:8000/clients?_sort=id&_order=desc")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSummaryData(data[0]);
        setBilling(data[0].kids * 10 + data[0].adults * 15);
      });
  }, []);

  //console.log({summaryData.kids}*10+{summaryData.adults}*15)
  return (
    <>
      {summaryData && (
        <Container>
          <Row>
            <h1>Summary</h1>
          </Row>
          <Row>
            <h4>
              Thank you for your reservation,{" "}
              <span className="text-primary text-capitalize">
                {summaryData.name}
              </span>
              !
              <br /> You can see your ticket summary below.
            </h4>
            <span></span>
            <h4></h4>
          </Row>
          <Row>
            <Col>
              <h3>Details</h3>
              <div>
                reservation on name :{" "}
                <span className="text-capitalize">{summaryData.name}</span>
              </div>
              <div>contact email: {summaryData.email}</div>
              <div>{summaryData.kids} x tickets for kids</div>
              <div>{summaryData.adults} x tickets for adults</div>
              <div>Total Cost : {billing} zł</div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default ZooSignUpSummary;

// {"name":"jack"
// "email": "jack@jack.pl"
// "date":"2022-09-22"
// "kids": "3"
// "adults": "1"}
