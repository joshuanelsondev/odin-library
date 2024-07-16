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
      <form className='formModal' onSubmit={handleSubmit}>
        <div className='formModal__heading'>
          <h2 className='formModal__header'>Add Book</h2>
          <LuX className='formModal__close' onClick={() => setFormVisibility(false)} size={20} />
        </div>
        <div className='formModal__body'></div>
        <div className='formModal__footer'>
          <button className='formModal__cancel' type='submit'>Cancel</button>
          <button className='formModal__submit' type='submit'>Add Book</button>
        </div>
      </form>
  )
}
