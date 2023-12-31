import React from 'react'
import BookList from '../Lab_files/BookContext/BookList'
import { BookProvider } from '../Lab_files/BookContext/BookContext'
const App2 = () => {
  return (
    <BookProvider>
      <div className="App">
        <BookList />
      </div>
    </BookProvider>
  )
}

export default App2