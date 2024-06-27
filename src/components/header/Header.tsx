import Icon from '@mdi/react';
import { mdiBookOpenBlankVariantOutline, mdiBellOutline } from '@mdi/js';

import './Header.scss'

export default function Header () {
  return (
    <div className="header">
      <h2 className="header-logo">Online Library</h2>
      <form className="search">
        <label htmlFor="search"></label>
        <input type="search" id="search" className="search__input" placeholder="Search books, authors, ISBNs, publishers..." />
        <button className="search__button">Search</button>
      </form>
      <p>Browse</p>
      <p>MyBooks</p>
      <Icon path={mdiBookOpenBlankVariantOutline} size={1} />
      <Icon path={mdiBellOutline} size={1} />
    </div>
  )
}
