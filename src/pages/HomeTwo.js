import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavbarTwo from "../components/NavbarTwo";

const HomeTwo = () => {
  return (
    <>
      <NavbarTwo />
      <Container>
        <Row>
          <Col>
            <div>
              <h1>HomeTwo Page</h1>
              <p>
                In previous versions of React Router you had to order your
                routes a certain way to get the right one to render when
                multiple routes matched an ambiguous URL. V6 is a lot smarter
                and will pick the most specific match so you don't have to worry
                about that anymore. For example, the URL /teams/new matches both
                of these route:
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeTwo;
