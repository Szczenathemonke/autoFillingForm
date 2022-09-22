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

  return (
    <>
      {summaryData && (
        <Container className="m-5">
          <Row>
            <h1>Summary</h1>
          </Row>
          <Row>
            <div>
              Thank you for your reservation,{" "}
              <span className="text-primary text-capitalize">
                {summaryData.name}
              </span>
              !
              <br /> You can see your ticket summary below.
            </div>
            <span></span>
            <h4></h4>
          </Row>
          <Row className="my-4">
            <Col>
              <h3>Details</h3>
              <div>
                reservation on name :{" "}
                <span className="text-capitalize">{summaryData.name}</span>
              </div>
              <div>contact email: {summaryData.email}</div>
              {summaryData.kids !== "0" && summaryData.kids !== "" ? (
                <div>{summaryData.kids} x tickets for kids</div>
              ) : (
                <div></div>
              )}
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
