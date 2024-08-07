import { useState } from 'react'
import { Book } from './types/Book'
import { myLibrary as initialLibrary } from './assets/library.ts'
import AddBookForm from './components/addBook/AddBookForm.tsx'
import Browse from './components/browse/Browse'
import Header from './components/header/Header'
import EditBookForm from './components/editBook/EditBookForm'
import Sidebar from './components/sidebar/Sidebar'
import './App.scss'

function App() {
  const [currentBook, setCurrentBook] = useState<Book | null>(null)
  const [myLibrary, setMyLibrary] = useState<Book[]>(initialLibrary)
  const [addBookFormVisibility, setAddBookFormVisibility] =
    useState<boolean>(false)
  const [editBookFormVisibility, setEditBookFormVisibility] =
    useState<boolean>(false)

  const addBook = (book: Book) => {
    setMyLibrary([...myLibrary, book])
    setCurrentBook(book)
  }

  const editBook = (updatedBook: Book) => {
    setMyLibrary(
      myLibrary.map((book) =>
        book.isbn === updatedBook.isbn ? updatedBook : book
      )
    )

    setCurrentBook(updatedBook)
  }

  const removeBook = (isbn: string) => {
    setMyLibrary(myLibrary.filter((book) => book.isbn !== isbn))
    setCurrentBook(null)
  }

  const toggleFavorite = (isbn: string) => {
    setMyLibrary(
      myLibrary.map((book) =>
        book.isbn === isbn ? { ...book, favorite: !book.favorite } : book
      )
    )

    if (currentBook && currentBook.isbn === isbn) {
      setCurrentBook((prevBook) =>
        prevBook ? { ...prevBook, favorite: !prevBook.favorite } : prevBook
      )
    }
  }

  return (
    <main className="main-container">
      <Header />
      <Browse
        myLibrary={myLibrary}
        currentBook={currentBook}
        setCurrentBook={setCurrentBook}
        setAddBookFormVisibility={setAddBookFormVisibility}
      />
      <Sidebar
        currentBook={currentBook}
        toggleFavorite={toggleFavorite}
        setEditBookFormVisibility={setEditBookFormVisibility}
        removeBook={removeBook}
      />
      {addBookFormVisibility && (
        <AddBookForm
          setAddBookFormVisibility={setAddBookFormVisibility}
          addBook={addBook}
          myLibrary={myLibrary}
        />
      )}
      {editBookFormVisibility && (
        <EditBookForm
          setEditBookFormVisibility={setEditBookFormVisibility}
          editBook={editBook}
          currentBook={currentBook}
        />
      )}
    </main>
  )
}

export default App
