import { useState } from 'react'
import { Book } from './types/Book'
import { myLibrary as initialLibrary } from './components/browse/library.ts'
import Browse from './components/browse/Browse'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import './App.scss'


function App() {

  const [currentBook, setCurrentBook] = useState<Book | null>(null)
  const [myLibrary, setMyLibrary] = useState<Book[]>(initialLibrary)

  const toggleFavorite = (isbn: string) => {
      setMyLibrary((prevLibrary) =>
        prevLibrary.map((book) =>
          book.isbn === isbn ? { ...book, is_favorite: !book.is_favorite } : book
        )
      );

      if (currentBook && currentBook.isbn === isbn) {
        setCurrentBook((prevBook) =>
          prevBook ? { ...prevBook, is_favorite: !prevBook.is_favorite } : prevBook
        );
      }
    };

    return (
      <main className='main-container'>
        <Header />
        <Browse myLibrary={myLibrary} currentBook={currentBook} setCurrentBook={setCurrentBook} />
        <Sidebar currentBook={currentBook} toggleFavorite={toggleFavorite} />
      </main>
    )
  }

export default App
