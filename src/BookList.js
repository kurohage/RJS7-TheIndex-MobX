import React, { Component } from "react";
import { observer } from "mobx-react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

// Store
import bookStore from "./stores/bookStore";

class BookList extends Component {
  componentDidUpdate() {
    bookStore.bookColor = this.props.match.params.bookColor;
  }

  render() {
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
}

export default observer(BookList);
