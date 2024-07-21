import { useState } from 'react'
import { Book } from './types/Book'
import { myLibrary as initialLibrary } from './assets/library.ts'
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
          book.isbn === isbn ? { ...book, favorite: !book.favorite } : book
        )
      );

      if (currentBook && currentBook.isbn === isbn) {
        setCurrentBook((prevBook) =>
          prevBook ? { ...prevBook, favorite: !prevBook.favorite } : prevBook
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
