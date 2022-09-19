import { Col, Row, Container } from "react-bootstrap";

function ZooSignUpSummary() {
  return (
    <Container>
      <Row>
        <h1>Summary</h1>
      </Row>
      <Row>
        <h4>
          Thank you for your reservation, {values.name}!<br /> You can see your
          ticket summary below.
        </h4>
      </Row>
      <Row>
        <Col>
          <h3>Details</h3>
          <div>reservation on name : {values.name}</div>
          <div>contact email: {values.email}</div>
          <div>{values.kids} x tickets for kids</div>
          <div>{values.adults} x tickets for adults</div>
          {/* <div>Total Cost : {{values.kids}*10+{values.adults}*15}</div> */}
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default ZooSignUpSummary;

// {"name":"jack"
// "email": "jack@jack.pl"
// "date":"2022-09-22"
// "kids": "3"
// "adults": "1"}
