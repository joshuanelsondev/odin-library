import { Book } from '../../types/Book'

interface FormProps {
  setEditBookFormVisibility: (visibility: boolean) => void
  editBook: (book: Book) => void
}

export default function EditBook({ setEditBookFormVisibility, editBook }: FormProps) {
  return (
    <div>Edit Book</div>
  )
}
