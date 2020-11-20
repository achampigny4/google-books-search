import React, { useState, useEffect } from "react";
import API from "../utils/API"
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form/form";
import Results from '../components/Results/Results';

const Search = () => {
  // Setting our component's initial state
  const [books, setBooks] = useState("Dummy");
  const [userSearch, setUserSearch] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.searchGoogle(userSearch)
      .then(res =>
        setBooks(res.data.items)
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    setUserSearch(value);
  };

  // When the form is submitted, use the userSearch to load book data
  function handleFormSubmit(event) {
    event.preventDefault();
    if (userSearch) {
      loadBooks();
      console.log(books);
    };
  };

  //save book when save button selected
  function handleBookSave(book) {
    if (book.title) {
      API.saveBook(
        {
          image: book.imageLinks.thumbnail,
          title: book.title,
          subtitle: book.subtitle,
          authors: book.authors,
          description: book.description,
          link: book.infoLink
        }
      )
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <p>Search for and save books.</p>
            </Jumbotron>
            <form>
              <h5>Book Search</h5>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(userSearch.title)}
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>

          </Col>
        </Row>
      </Container>
      <br /><br />
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h5>Results</h5>
            <Results />
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Search;
