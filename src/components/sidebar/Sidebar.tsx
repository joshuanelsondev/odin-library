import { FaHeart } from "react-icons/fa";
import './Sidebar.scss'
import { Book } from '../../types/Book'

export default function Sidebar ({ currentBook }: Book) {
  return(
    <div className='sidebar'>
      <h3 className='sidebar__header'>About This Book</h3>
      <img className='sidebar__book' src="" alt=""/>
      <FaHeart className='sidebar__heart'/>
      <p className='sidebar__info'>Title:<span className='sidebar__text'>This is temporary text</span></p>
      <p className='sidebar__info'>Author(s):<span className='sidebar__text'>This is temporary text</span></p>
      <p className='sidebar__info'>ISBN:<span className='sidebar__text'>This is temporary text</span></p>
      <p className='sidebar__info'>Publisher:<span className='sidebar__text'>This is temporary text</span></p>
      <p className='sidebar__info'>Published Date:<span className='sidebar__text'>This is temporary text</span></p>
      <p className='sidebar__info'>Summary<span className='sidebar__text'>This is temporary text</span></p>
      <button className='sidebar__button'>Check Out</button>
    </div>
  )
}
