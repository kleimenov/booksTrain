import React from "react";
import { Form, Card, Button } from "react-bootstrap";

const Searchengine = () => {
  return (
    <Card className="text-left">
      <Card.Body>
        <Form className="text-secondary search-form-settings">
          <Form.Group id="Author">
            <Form.Label>Search by Author</Form.Label>
            <Form.Control type="Author" required />
          </Form.Group>
          <Form.Group id="Genre">
            <Form.Label>Search by Genre</Form.Label>
            <Form.Control type="Genre" required />
          </Form.Group>
          <Form.Group id="Country">
            <Form.Label>Search by Country</Form.Label>
            <Form.Control type="Country" required />
          </Form.Group>
          <Button
            className="w-50 btn-secondary search-button-settings"
            type="search"
          >
            Search
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Searchengine;
