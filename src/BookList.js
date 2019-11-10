import React from "react";
import { observer } from "mobx-react";
//import axios from "axios";

// Components
//import Loading from "./Loading";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

// Store
import bookStore from "./stores/bookStore";

/*
const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});
*/

function BookList(props) {
  /*
  const bookCards = bookStore.filteredBooks.map(book => (
    <BookRow key={book.id} book={book} />
  ));
  */
  /*
  state = {
    books: [],
    loading: true
  };
*/

  /*
  async componentDidMount() {
    try {
      const res = await instance.get(
        "https://the-index-api.herokuapp.com/api/books/"
      );
      const books = res.data;
      this.setState({
        books,
        loading: false
      });
    } catch (err) {
      console.error(err);
    }
  }
  */
  /*
  filterBooksByColor = bookColor =>
    this.state.books.filter(book => book.color === bookColor);
*/
  /*
  render() {
    const bookColor = this.props.match.params.bookColor;
    let books = this.state.books;

    if (bookColor) {
      books = this.filterBooksByColor(bookColor);
    }
*/

  bookStore.bookColor = props.match.params.bookColor;

  return (
    <div>
      <h3>Books</h3>
      <SearchBar store={bookStore} />
      <BookTable
        books={
          bookStore.bookColor
            ? bookStore.filterBooksByColor
            : bookStore.filteredBooks
        }
      />
    </div>
  );
}

export default observer(BookList);
