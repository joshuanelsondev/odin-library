import { useState } from 'react'
import './Browse.scss'
import { BookDetails, myLibrary } from './library'

console.log('mylibrary: ', myLibrary);


export default function Browse () {
  const [ currentBook, setCurrentBook ] = useState<string | null>(null)

  return (
    <div className='browse'>
      <h2 className='browse__header'>Browse The Library</h2>
      <div className='browse__filter' >
      </div>
      <div className='books'>
      {/* Genre dropdown - loop through the current available genres */}
       <select className='browse__select' id="genre" name="genre">
         <option>Genre</option>
         <optgroup label='Fiction'>
           <option value="romance">Romance</option>
           <option value="mystery">Mystery</option>
           <option value="science-fiction">Science Fiction</option>
           <option value="fantasy">Fantasy</option>
           <option value="horror">Horror</option>
           <option value="historical-fiction">Historical Fiction</option>
         </optgroup>
         <optgroup label='Non-Fiction'>
           <option value="memoir">Memoir</option>
           <option value="biography">Biography</option>
           <option value="history">History</option>
           <option value="self-help">Self-Help</option>
           <option value="travel">Travel</option>
           <option value="cookbook">Cookbook</option>
         </optgroup>
         <option value="poetry">Poetry</option>
         <option value="short-story">Short Story</option>
       </select>
      {/* Year dropdown - loop through the years of the current available books */}
       <select className='browse__select' id="year" name="year">
         <option>Year</option>
       </select>
      {/* Status dropdown */}
       <select className='browse__select' id="status" name="status">
         <option>Status</option>
         <option value='read'>Read</option>
         <option value='unread'>Unread</option>
       </select>
        {myLibrary && myLibrary.map((book: BookDetails) => {
          return (
            <div key={book.isbn} className='book' onClick={() => setCurrentBook(book.isbn)}>
              <img src={book.cover_image_url} alt={`${book.title} cover`} className={`book__cover ${currentBook === book.isbn ? 'book__selected' : ''} `} />
              <div className='book__label'>
                <p className='book__title'>{book.title}</p>
                <p className='book__author'>{book.author}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
