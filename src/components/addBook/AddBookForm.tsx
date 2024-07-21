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

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setBook({...book, [name]: value})
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
            <input type="text" />
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="author">Author: </label>
            <input type="text" />
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="isbn">ISBN: </label>
            <input type="text" />
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="publisher">Publisher: </label>
            <input type="text" />
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="published-date">Published Date: </label>
            <input type="date" />
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="book-cover-url">Book Cover Url: </label>
            <input type="url" />
          </div>
          <div>
            <label htmlFor="favorite">Favorite: </label>
            <input type="checkbox" id='favorite' name='favorite' />
          </div>
          <div>
            <label htmlFor="read">Read: </label>
            <input type="checkbox" id='read' name='read' />
          </div>
          <div className='formModal__summary'>
            <label htmlFor="summary">Summary: </label>
            <textarea id="summary" name="summary" cols={30} rows={10}></textarea>
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
