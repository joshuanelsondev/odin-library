import { useState } from 'react'
import { Book } from '../../types/Book'
import { LuX } from "react-icons/lu"

interface FormProps {
  setEditBookFormVisibility: (visibility: boolean) => void
  editBook: (selectedBook: Book) => void
  currentBook: (Book | null)
}

export default function EditBook({ setEditBookFormVisibility, editBook, currentBook }: FormProps) {
  const [selectedBook, setSelectedBook] = useState<Book>(currentBook || {
    title: '',
    author: '',
    isbn: '',
    publisher: '',
    published_date: '',
    cover_image_url: '',
    favorite: false,
    read: false,
    summary: ''
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validate = (field?: keyof Book) => {
    const validationMessages: { [key: string]: string} = {
      title: 'Title is required',
      author: 'Author is required',
      isbn: 'ISBN is required',
      publisher: 'Publisher is required',
      published_date: 'Published date is required',
      cover_image_url: 'A valid cover image URL is required',
    }

    const newErrors: { [key: string]: string } = {}

    if (!field) {
      Object.keys(validationMessages).forEach((key) => {
        if (!selectedBook[key as keyof Book]) {
          newErrors[key] = validationMessages[key]
        }
      })
    } else {
      if (!selectedBook[field]) {
        newErrors[field] = validationMessages[field]
      }
    }

    if (selectedBook.isbn && !/^\d{10}(\d{3})?$/.test(selectedBook.isbn)) newErrors.isbn = 'ISBN must be 10 or 13 digits.'

        setErrors(newErrors)

      return Object.keys(newErrors).length === 0
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target
    setSelectedBook({...selectedBook, [id]: value})
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target
    setSelectedBook({...selectedBook, [id]: checked})
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    validate(event.target.id as keyof Book)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (validate()) {
      editBook(selectedBook)
      setEditBookFormVisibility(false)
    }
  }

  return (
    <div className='formModal-container'>
      <form className='formModal' onSubmit={handleSubmit}>
        <div className='formModal__heading'>
          <h2 className='formModal__header'>Edit Book</h2>
          <LuX className='formModal__close' onClick={() => setEditBookFormVisibility(false)} size={20} />
        </div>
        <div className='formModal__body'>
          <div className='formModal__input-container'>
            <label htmlFor="title">Title: </label>
            <input type="text" id='title' name='title' value={selectedBook.title} onChange={handleTextChange}  onBlur={handleBlur} />
            {<span className={`formModal__error`}>{errors.title}</span>}
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="author">Author: </label>
            <input type="text" id='author' name='author' value={selectedBook.author} onChange={handleTextChange} onBlur={handleBlur} />
            {<span className={`formModal__error`}>{errors.author}</span>}
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="isbn">ISBN: </label>
            <input type="text" id='isbn' name='isbn' value={selectedBook.isbn} onChange={handleTextChange} onBlur={handleBlur}/>
            {<span className={`formModal__error`}>{errors.isbn}</span>}
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="publisher">Publisher: </label>
            <input type="text" id='publisher' name='publisher' value={selectedBook.publisher} onChange={handleTextChange} onBlur={handleBlur} />
            {<span className={`formModal__error`}>{errors.publisher}</span>}
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="published_date">Published Date: </label>
            <input type="date" id='published_date' name='published_date' value={selectedBook.published_date} onChange={handleTextChange} onBlur={handleBlur} />
            {<span className={`formModal__error`}>{errors.published_date}</span>}
          </div>
          <div className='formModal__input-container'>
            <label htmlFor="cover_image_url">Book Cover Url: </label>
            <input type="text" id='cover_image_url' name='cover_image_url' value={selectedBook.cover_image_url} onChange={handleTextChange} onBlur={handleBlur} />
            {<span className={`formModal__error`}>{errors.cover_image_url}</span>}
          </div>
          <div className='formModal__checkbox-container'>
            <label htmlFor="favorite">Favorite: </label>
            <input type="checkbox" id='favorite' name='favorite' checked={selectedBook.favorite} onChange={handleCheckboxChange} />
          </div>
          <div className='formModal__checkbox-container'>
            <label htmlFor="read">Read: </label>
            <input type="checkbox" id='read' name='read' checked={selectedBook.read} onChange={handleCheckboxChange}/>
          </div>
          <div className='formModal__summary'>
            <label htmlFor="summary">Summary: </label>
            <textarea id="summary" name="summary" value={selectedBook.summary} onChange={handleTextChange} cols={30} rows={10}></textarea>
          </div>
        </div>
        <div className='formModal__footer'>
          <button className='formModal__cancel' type='button' onClick={() => setEditBookFormVisibility(false)}>Cancel</button>
          <button className='formModal__submit' type='submit'>Confirm Edit</button>
        </div>
      </form>
    </div>
  )
}

  //return (
  //  <div>
  //    <p>Edit Book</p>
  //    <p onClick={() => setEditBookFormVisibility(false)}>Close</p>
  //    <p onClick={() => editBook}>Confirm Edit</p>
  //  </div>
  //)
