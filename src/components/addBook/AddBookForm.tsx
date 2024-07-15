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

      <button type='submit'>Submit</button>
    </form>
  )
}
