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
    <div className='addbook'>
      <form className='addbook__form' onSubmit={handleSubmit}>
        <h2>Add Book</h2>
        <LuX className='addbook__close' onClick={() => setFormVisibility(false)} size={20} />
        <button className='addbook__submit' type='submit'>Submit</button>
      </form>
    </div>
  )
}
