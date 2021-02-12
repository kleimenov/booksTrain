import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

const Searchengine = () => {

  const [Author, setAuthor] = useState();
  const [Genre, setGenre ] = useState();
  const [Country, setCountry ] = useState();

  const data = {
    searchAuthor: Author,
    searchGenre: Genre,
    searchCountry: Country
  }
  const searchHandler = (evt) => {

    evt.preventDefault()

    console.log(data.length)
  }

  return (
    <Card className="text-left">
      <Card.Body>
        <Form className="text-secondary search-form-settings" onSubmit={ searchHandler }>
          <Form.Group id="Author">
            <Form.Label>Search by Author</Form.Label>
            <Form.Control type="Author" onChange={(evt) => setAuthor(evt.target.value)}/>
          </Form.Group>
          <Form.Group id="Genre">
            <Form.Label>Search by Genre</Form.Label>
            <Form.Control type="Genre" onChange={(evt) => setGenre(evt.target.value)}/>
          </Form.Group>
          <Form.Group id="Country">
            <Form.Label>Search by Country</Form.Label>
            <Form.Control type="Country" onChange={(evt) => setCountry(evt.target.value)}/>
          </Form.Group>
          <Button 
            className="w-50 btn-secondary search-button-settings"
            type="submit"
          >
            Search
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Searchengine;
