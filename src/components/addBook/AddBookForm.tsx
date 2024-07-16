import { LuX } from "react-icons/lu";
import './AddBookForm.scss'

interface FormProps {
  setFormVisibility: (visibility: boolean) => void
}

export default function AddBookForm ({ setFormVisibility }: FormProps) {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    setFormVisibility(false)
  }

  return (
    <div className='formModal-container'>
      <form className='formModal' onSubmit={handleSubmit}>
        <div className='formModal__heading'>
          <h2 className='formModal__header'>Add Book</h2>
          <LuX className='formModal__close' onClick={() => setFormVisibility(false)} size={20} />
        </div>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="isbn">ISBN: </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="publisher">Publisher: </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="published-date">Published Date: </label>
          <input type="month" />
        </div>
        <div>
          <label htmlFor="summary">Summary: </label>
          <textarea id="summary" name="summary" cols={30} rows={10}></textarea>
        </div>
        <div>
          <label htmlFor="book-cover-url">Book Cover Url: </label>
          <input type="url" />
        </div>
        <div className='formModal__body'></div>
        <div className='formModal__footer'>
          <button className='formModal__cancel' type='submit'>Cancel</button>
          <button className='formModal__submit' type='submit'>Add Book</button>
        </div>
      </form>
    </div>
  )
}
