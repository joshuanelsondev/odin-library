import { LuX } from "react-icons/lu";

interface FormProps {
  setFormVisibility: (visibility: boolean) => void
}

export default function AddBookForm ({ setFormVisibility }: FormProps) {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    setFormVisibility(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Add Book</h2>
        <LuX onClick={() => setFormVisibility(false)} />
      </div>

      <button type='submit'>Submit</button>
    </form>
  )
}
