import Icon from '@mdi/react';
import { mdiBookOpenBlankVariantOutline, mdiBellOutline } from '@mdi/js';
import profileIcon from '../../assets/profile-icon.jpeg'
import './Header.scss'

export default function Header () {
  return (
    <div className="header">
      <h2 className="header_logo">Online Library</h2>
      <form className="header__search-form">
        <label htmlFor="search"></label>
        <input type="search" id="search" className="header__search-input" placeholder="Search books, authors, ISBNs, publishers..." />
        <button className="header__search-btn">Search</button>
      </form>
      <p className='header__browse'>Browse</p>
      <p className='header__mybooks'>MyBooks</p>
      <Icon className='header__icon' path={mdiBookOpenBlankVariantOutline} size={1} />
      <Icon className='header__icon' path={mdiBellOutline} size={1} />
      <img className='header__profile-icon' src={profileIcon} alt="profile icon" />
    </div>
  )
}
