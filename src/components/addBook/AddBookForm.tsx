import { useState } from "react";
import { Book } from "../../types/Book";
import { LuX } from "react-icons/lu";
import "./AddBookForm.scss";

interface FormProps {
  setAddBookFormVisibility: (visibility: boolean) => void;
  addBook: (book: Book) => void;
}

export default function AddBookForm({
  setAddBookFormVisibility,
  addBook,
}: FormProps) {
  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    isbn: "",
    publisher: "",
    published_date: "",
    summary: "",
    cover_image_url: "",
    favorite: false,
    read: false,
  });

  const [bookTitle, setBookTitle] = useState<string>("");

  const [confirmationVisibility, setConfirmationVisibility] =
    useState<boolean>(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (field?: keyof Book) => {
    const validationMessages: { [key: string]: string } = {
      title: "Title is required",
      author: "Author is required",
      isbn: "ISBN is required",
      publisher: "Publisher is required",
      published_date: "Published date is required",
      cover_image_url: "A valid cover image URL is required",
    };

    const newErrors: { [key: string]: string } = {};

    if (!field) {
      Object.keys(validationMessages).forEach((key) => {
        if (!book[key as keyof Book]) {
          newErrors[key] = validationMessages[key];
        }
      });
    } else {
      if (!book[field]) {
        newErrors[field] = validationMessages[field];
      }
    }

    if (book.isbn && !/^\d{10}(\d{3})?$/.test(book.isbn))
      newErrors.isbn = "ISBN must be 10 or 13 digits.";
    if (book.cover_image_url && !/^https?:\/\//.test(book.cover_image_url))
      newErrors.cover_image_url = "Cover image URL must be a valid URL.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = event.target;
    setBook({ ...book, [id]: value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setBook({ ...book, [id]: checked });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    validate(event.target.id as keyof Book);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validate()) {
      setBookTitle(book.title);
      addBook(book);
      setConfirmationVisibility(true);
      setTimeout(() => {
        setAddBookFormVisibility(false);
        setConfirmationVisibility(true);
      }, 3000)
    }
  };

  return (
    <div className="formModal-container">
      {!confirmationVisibility && (
        <form className="formModal" onSubmit={handleSubmit}>
          <div className="formModal__heading">
            <h2 className="formModal__header">Add Book</h2>
            <LuX
              className="formModal__close"
              onClick={() => setAddBookFormVisibility(false)}
              size={20}
            />
          </div>
          <div className="formModal__body">
            <div className="formModal__input-container">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                id="title"
                name="title"
                value={book.title}
                onChange={handleTextChange}
                onBlur={handleBlur}
              />
              {<span className={`formModal__error`}>{errors.title}</span>}
            </div>
            <div className="formModal__input-container">
              <label htmlFor="author">Author: </label>
              <input
                type="text"
                id="author"
                name="author"
                value={book.author}
                onChange={handleTextChange}
                onBlur={handleBlur}
              />
              {<span className={`formModal__error`}>{errors.author}</span>}
            </div>
            <div className="formModal__input-container">
              <label htmlFor="isbn">ISBN: </label>
              <input
                type="text"
                id="isbn"
                name="isbn"
                value={book.isbn}
                onChange={handleTextChange}
                onBlur={handleBlur}
              />
              {<span className={`formModal__error`}>{errors.isbn}</span>}
            </div>
            <div className="formModal__input-container">
              <label htmlFor="publisher">Publisher: </label>
              <input
                type="text"
                id="publisher"
                name="publisher"
                value={book.publisher}
                onChange={handleTextChange}
                onBlur={handleBlur}
              />
              {<span className={`formModal__error`}>{errors.publisher}</span>}
            </div>
            <div className="formModal__input-container">
              <label htmlFor="published_date">Published Date: </label>
              <input
                type="date"
                id="published_date"
                name="published_date"
                value={book.published_date}
                onChange={handleTextChange}
                onBlur={handleBlur}
              />
              {
                <span className={`formModal__error`}>
                  {errors.published_date}
                </span>
              }
            </div>
            <div className="formModal__input-container">
              <label htmlFor="cover_image_url">Book Cover Url: </label>
              <input
                type="url"
                id="cover_image_url"
                name="cover_image_url"
                value={book.cover_image_url}
                onChange={handleTextChange}
                onBlur={handleBlur}
              />
              {
                <span className={`formModal__error`}>
                  {errors.cover_image_url}
                </span>
              }
            </div>
            <div className="formModal__checkbox-container">
              <label htmlFor="favorite">Favorite: </label>
              <input
                type="checkbox"
                id="favorite"
                name="favorite"
                checked={book.favorite}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="formModal__checkbox-container">
              <label htmlFor="read">Read: </label>
              <input
                type="checkbox"
                id="read"
                name="read"
                checked={book.read}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="formModal__summary">
              <label htmlFor="summary">Summary: </label>
              <textarea
                id="summary"
                name="summary"
                value={book.summary}
                onChange={handleTextChange}
                cols={30}
                rows={10}
              ></textarea>
            </div>
          </div>
          <div className="formModal__footer">
            <button
              className="formModal__cancel"
              type="button"
              onClick={() => setAddBookFormVisibility(false)}
            >
              Cancel
            </button>
            <button className="formModal__submit" type="submit">
              Add Book
            </button>
          </div>
        </form>
      )}
      {/* Add Book Confirmation */}
      {confirmationVisibility && (
        <div>
          <p>{bookTitle} has been added</p>
        </div>
      )}
    </div>
  );
}
