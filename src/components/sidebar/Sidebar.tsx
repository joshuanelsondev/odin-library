import { useState } from 'react'
import { Book } from '../../types/Book'
import { convertDateFormat } from '../../utils/dateUtils'
import { toggleNoScroll } from '../../utils/scrollUtils'
import { FaHeart } from 'react-icons/fa'
import { LuMoreHorizontal } from 'react-icons/lu'
import './Sidebar.scss'

interface SidebarProps {
  currentBook: Book | null
  toggleFavorite: (isbn: string) => void
  setEditBookFormVisibility: (visibility: boolean) => void
  removeBook: (isbn: string) => void
}

export default function Sidebar({
  currentBook,
  toggleFavorite,
  setEditBookFormVisibility,
  removeBook,
}: SidebarProps) {
  const [editDropdownVisibility, setEditDropdownVisibility] =
    useState<boolean>(false)

  const [removeBookModal, setRemoveBookModal] = useState<boolean>(false)

  const [confirmationModal, setConfirmationModal] = useState<boolean>(false)

  const handleRemoveBook = (isbn: string) => {
    setConfirmationModal(true)
    setRemoveBookModal(false)
    setTimeout(() => {
      removeBook(isbn)
      setConfirmationModal(false)
      toggleNoScroll(false)
    }, 2000)
  }

  return (
    <div className="sidebar">
      {currentBook ? (
        <>
          <div className="sidebar__heading">
            <h3 className="sidebar__header">About This Book</h3>
            <LuMoreHorizontal
              className="sidebar__elipsis"
              size={20}
              onClick={() => {
                setEditDropdownVisibility(!editDropdownVisibility)
              }}
            />
            {/*Edit Dropdown*/}
            {editDropdownVisibility && (
              <div className="sidebar__edit-dropdown">
                <p
                  className="sidebar__dropdown-link"
                  onClick={() => {
                    setEditDropdownVisibility(false)
                    setEditBookFormVisibility(true)
                    toggleNoScroll(true)
                  }}
                >
                  Edit
                </p>
                <p
                  className="sidebar__dropdown-link"
                  onClick={() => {
                    setEditDropdownVisibility(false)
                    setRemoveBookModal(true)
                    toggleNoScroll(true)
                  }}
                >
                  Remove
                </p>
              </div>
            )}
            {/* Remove book modal */}
            {removeBookModal && (
              <div className="removeBook-modal">
                <p className="removeBook-modal__text">
                  Are you sure you want to remove {currentBook.title}?
                </p>
                <div className="removeBook-modal__buttons">
                  <p
                    className="removeBook-modal__yes"
                    onClick={() => handleRemoveBook(currentBook.isbn)}
                  >
                    Yes
                  </p>
                  <p
                    className="removeBook-modal__no"
                    onClick={() => {
                      toggleNoScroll(false)
                      setRemoveBookModal(false)
                    }}
                  >
                    No
                  </p>
                </div>
              </div>
            )}
            {/* Book Removed Confirmation Modal */}
            {confirmationModal && (
              <div className="confirmation-modal">
                <p className="confirmation-modal__text">
                  {currentBook.title} has been removed
                </p>
              </div>
            )}
          </div>
          <img
            className="sidebar__book"
            src={currentBook.cover_image_url}
            alt={`${currentBook.title} book cover`}
          />
          <FaHeart
            className={`sidebar__heart ${currentBook.favorite && 'sidebar__favorite'}`}
            onClick={() => toggleFavorite(currentBook.isbn)}
          />
          <p className="sidebar__info">
            Title:<span className="sidebar__text">{currentBook.title}</span>
          </p>
          <p className="sidebar__info">
            Author(s):
            <span className="sidebar__text">{currentBook.author}</span>
          </p>
          <p className="sidebar__info">
            ISBN:<span className="sidebar__text">{currentBook.isbn}</span>
          </p>
          <p className="sidebar__info">
            Publisher:
            <span className="sidebar__text">{currentBook.publisher}</span>
          </p>
          <p className="sidebar__info">
            Published Date:
            <span className="sidebar__text">
              {convertDateFormat(currentBook.published_date)}
            </span>
          </p>
          <p className="sidebar__info">
            Summary:<span className="sidebar__text">{currentBook.summary}</span>
          </p>
          <button className="sidebar__button">Check Out</button>
        </>
      ) : (
        <p className="sidebar__default">No book selected</p>
      )}
    </div>
  )
}
