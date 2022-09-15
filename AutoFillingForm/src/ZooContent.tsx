import { Button, Card, Col, Container, Row } from "react-bootstrap";
import zooBg from "./assets/zooBg.png";

function ZooContent() {
  return (
    <Row style={{ backgroundImage: `url(${zooBg})` }}>
      <Row className="justify-content-end">
        <Col className="row justify-content-end">
          <Col className="col-11 col-md-7">
            <Card bg="primary" className="bg-opacity-50 rounded-5 m-4 p-3">
              <Card.Body>
                <Card.Title>Czym jest ZOO</Card.Title>
                <Card.Text>
                  Ogród zoologiczny potocznie zwany zoo to teren najczęściej o
                  charakterze parkowym, na którym znajdują się budynki, wybiegi
                  i klatki gdzie żyją zwierzęta z różnych zakątków naszego
                  globu. Władze ogrodu mają na celu stworzenia im warunków życia
                  podobnych do tych naturalnych. Ogrody zoologiczne mają za
                  zadanie pełnić rolę edukacyjną i rekreacyjną przy jednoczesnej
                  ochronie prezentowanych gatunków i systematycznych badaniach
                  nad ich hodowaniem. Od wielu lat ogrody te również mają
                  ogromny udział w przywracaniu gatunków wymarłych lub tych
                  zagrożonych wyginięciem. W Polsce funkcjonują 24 ogrody
                  zoologiczne, oficjalny wykaz których znajduje się na stronie
                  internetowej Generalnej Dyrekcji Ochrony Środowiska.
                </Card.Text>
                <Button variant="outline-secondary">
                  <Card.Link
                    href="https://www.polska.travel/pl/poznaj-atrakcje-i-zabytki/zabytki-i-inne-atrakcje/ogrody-zoologiczne"
                    className="text-black text-end"
                  >
                    więcej...
                  </Card.Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Col>
      </Row>
    </Row>
  );
}

export default ZooContent;
