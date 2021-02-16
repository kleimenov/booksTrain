import React, { useEffect, useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

async function searchRequest(credentials) {
  return fetch("http://localhost:3002/booksSearch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((response) => response.json());
}

const Searchengine = ({ setResponse }) => {
  useEffect(() => {
    searchRequest();
  }, []);

  const [Author, setAuthor] = useState();
  const [Genre, setGenre] = useState();
  const [Country, setCountry] = useState();
  const [BookName, setBookName] = useState();
  //const [searchResponse, setResponse] = useState([]);

  const toLowerCase = (variable) => {
    for (let item in variable) {
      if (variable[item]) {
        variable[item] = variable[item].toLowerCase();
      }
    }
  };

  const data = {
    searchAuthor: Author,
    searchGenre: Genre,
    searchCountry: Country,
    searchBookName: BookName,
  };

  toLowerCase(data);

  const checkEmptyInputs = (data, passPermit) => {
    let cnt = 0;
    for (let item in data) {
      if (!data[item] || data[item] == "") {
        cnt++;
      }
    }
    return cnt > 3 ? (passPermit = false) : (passPermit = true);
  };

  const searchHandler = async (evt) => {
    const requestPermit = false;
    evt.preventDefault();

    if (checkEmptyInputs(data, requestPermit)) {
      const serverResponse = await searchRequest(data);
      setResponse(serverResponse);
    } else {
      alert("Please fill out at least one input line (whatever you want)");
    }
  };

  return (
    <Card className="text-left">
      <Card.Body>
        <Form
          className="text-secondary search-form-settings"
          onSubmit={searchHandler}
        >
          <Form.Group id="Author">
            <Form.Label>Search by Author</Form.Label>
            <Form.Control
              type="Author"
              onChange={(evt) => setAuthor(evt.target.value)}
            />
          </Form.Group>
          <Form.Group id="Genre">
            <Form.Label>Search by Genre</Form.Label>
            <Form.Control
              type="Genre"
              onChange={(evt) => setGenre(evt.target.value)}
            />
          </Form.Group>
          <Form.Group id="Country">
            <Form.Label>Search by Country</Form.Label>
            <Form.Control
              type="Country"
              onChange={(evt) => setCountry(evt.target.value)}
            />
          </Form.Group>
          <Form.Group id="bookName">
            <Form.Label>Search by book's name</Form.Label>
            <Form.Control
              type="bookName"
              onChange={(evt) => setBookName(evt.target.value)}
            />
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
