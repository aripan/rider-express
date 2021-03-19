import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col
            sm={12}
            md={8}
            className="d-flex justify-content-center align-items-center"
          >
            <Card className="w-100 mt-md-5" style={{ maxWidth: "400px" }}>
              <Card.Header as="h5">Login</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <div className="d-flex justify-content-center align-items-center">
                    <Button type="submit" variant="primary" className="m-2">
                      Login
                    </Button>
                    <Link to="/home" className="m-2">
                      <span className="text-danger">Forgot Password</span>
                    </Link>
                  </div>

                  <Row className="py-1 text-center">
                    <Col>
                      Don't have an account yet ?{" "}
                      <Link to="/signUp">
                        <span className="text-danger">Create an account</span>
                      </Link>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col
            sm={12}
            md={4}
            className="py-3 text-center d-flex justify-content-center align-items-center"
          >
            <Card className="w-100 mt-md-5" style={{ maxWidth: "300px" }}>
              <Card.Header as="h5">login with</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <span
                    style={{
                      fontSize: "25px",
                      fontWeight: "500",
                      paddingLeft: "5px",
                    }}
                  >
                    Facebook
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon icon={faGooglePlus} size="2x" />
                  <span
                    style={{
                      fontSize: "25px",
                      fontWeight: "500",
                      paddingLeft: "5px",
                    }}
                  >
                    Google
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
