import { useState } from 'react'
import { Book } from '../../types/Book'
import { LuX } from "react-icons/lu"
import './AddBookForm.scss'

interface FormProps {
  setFormVisibility: (visibility: boolean) => void
}

export default function AddBookForm ({ setFormVisibility }: FormProps) {
  const [book, setBook] = useState<Book>({
    title: '',
    author: '',
    isbn: '',
    publisher: '',
    published_date: '',
    summary: '',
    cover_image_url: '',
    favorite: false,
    read: false,
  })

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target
    setBook({...book, [id]: value})
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target
    setBook({...book, [id]: checked})
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    console.log(book)
    setFormVisibility(false)
  }

  return (
    <div className='formModal-container'>
      <form className='formModal' onSubmit={handleSubmit}>
        <div className='formModal__heading'>
          <h2 className='formModal__header'>Add Book</h2>
          <LuX className='formModal__close' onClick={() => setFormVisibility(false)} size={20} />
        </div>
        <div className='formModal__body'>
          <div className='formModal__input-container'>
            <label htmlFor="title">Title: </label>
            <input type="text" id='title' name='title' value={book.title} onChange={handleTextChange}  required />
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="author">Author: </label>
            <input type="text" id='author' name='author' value={book.author} onChange={handleTextChange} required />
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="isbn">ISBN: </label>
            <input type="text" id='isbn' name='isbn' value={book.isbn} onChange={handleTextChange} required />
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="publisher">Publisher: </label>
            <input type="text" id='publisher' name='publisher' value={book.publisher} onChange={handleTextChange} required />
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="published_date">Published Date: </label>
            <input type="date" id='published_date' name='published_date' value={book.published_date} onChange={handleTextChange} required />
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="cover_image_url">Book Cover Url: </label>
            <input type="url" id='cover_image_url' name='cover_image_url' value={book.cover_image_url} onChange={handleTextChange} required />
          </div>
          <div>
            <label htmlFor="favorite">Favorite: </label>
            <input type="checkbox" id='favorite' name='favorite' checked={book.favorite} onChange={handleCheckboxChange} />
          </div>
          <div>
            <label htmlFor="read">Read: </label>
            <input type="checkbox" id='read' name='read' checked={book.read} onChange={handleCheckboxChange}/>
          </div>
          <div className='formModal__summary'>
            <label htmlFor="summary">Summary: </label>
            <textarea id="summary" name="summary" value={book.summary} onChange={handleTextChange} cols={30} rows={10}></textarea>
          </div>
        </div>
        <div className='formModal__footer'>
          <button className='formModal__cancel' type='button' onClick={() => setFormVisibility(false)}>Cancel</button>
          <button className='formModal__submit' type='submit'>Add Book</button>
        </div>
      </form>
    </div>
  )
}
