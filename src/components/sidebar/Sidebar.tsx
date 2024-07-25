import { Book } from '../../types/Book'
import { convertDateFormat } from '../utils/dateUtils'
import { FaHeart } from "react-icons/fa";
import './Sidebar.scss'

interface SidebarProps {
  currentBook: Book | null
  toggleFavorite: (isbn: string) => void
}

export default function Sidebar ({ currentBook, toggleFavorite }: SidebarProps) {
  return(
    <div className='sidebar'>
    {currentBook ? (
      <>
      <h3 className='sidebar__header'>About This Book</h3>
      <img className='sidebar__book' src={currentBook.cover_image_url} alt={`${currentBook.title} book cover`}/>
      <FaHeart className={`sidebar__heart ${currentBook.favorite && 'sidebar__favorite'}`} onClick={() => toggleFavorite(currentBook.isbn)}/>
      <p className='sidebar__info'>Title:<span className='sidebar__text'>{currentBook.title}</span></p>
      <p className='sidebar__info'>Author(s):<span className='sidebar__text'>{currentBook.author}</span></p>
      <p className='sidebar__info'>ISBN:<span className='sidebar__text'>{currentBook.isbn}</span></p>
      <p className='sidebar__info'>Publisher:<span className='sidebar__text'>{currentBook.publisher}</span></p>
      <p className='sidebar__info'>Published Date:<span className='sidebar__text'>{convertDateFormat(currentBook.published_date)}</span></p>
      <p className='sidebar__info'>Summary<span className='sidebar__text'>{currentBook.summary}</span></p>
      <button className='sidebar__button'>Check Out</button>
      </>
    ) : (
      <p className='sidebar__default'>No book selected</p>
    )}
    </div>
  )
}
