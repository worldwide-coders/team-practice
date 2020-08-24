import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Books = props => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios({
      url: apiUrl + '/books',
      method: 'GET'
    })
      .then(res => setBooks(res.data.books))
      .catch(console.error)
  }, [])

  const bookList = books.map(book => (
    <li key={book.id}>{book.title}</li>
  ))
  return (
    <div>
      {bookList}
    </div>

  )
}

export default Books
