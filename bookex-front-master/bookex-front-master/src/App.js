import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './routes/book-list';

function App() {
  const currentUser = {
    username: 'medarz'
  }
  return (
    <div className="App">
      <BookList currentUser={currentUser}></BookList>
    </div>
  );
}

export default App;
