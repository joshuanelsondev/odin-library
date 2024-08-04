import { LuBell, LuBookOpen } from 'react-icons/lu'
import profileIcon from '../../assets/profile-icon.jpeg'
import './Header.scss'

export default function Header() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="header">
      <h2 className="header__logo">Online Library</h2>
      <form className="header__search-form" onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          type="search"
          id="search"
          className="header__search-input"
          placeholder="Search books, authors, ISBNs, publishers..."
        />
        <button className="header__search-btn">Search</button>
      </form>
      <p className="header__browse">Browse</p>
      <p className="header__mybooks">My Books</p>
      <LuBookOpen className="header__icon" size={1} />
      <LuBell className="header__icon" size={1} />
      <img
        className="header__profile-icon"
        src={profileIcon}
        alt="profile icon"
      />
    </div>
  )
}
