import './Sidebar.scss'

export default function Sidebar () {
  return(
    <div className='sidebar'>
      <h3 className='sidebar__header'>About This Book</h3>
      <img className='sidebar__book' src="" alt="" />
      <p className='sidebar__info'>Title:</p>
      <p className='sidebar__info'>Author(s):</p>
      <p className='sidebar__info'>ISBN:</p>
      <p className='sidebar__info'>Publisher:</p>
      <p className='sidebar__info'>Published Date:</p>
      <p className='sidebar__info'>Summary</p>
      <button className='sidebar__button'>Check Out</button>
    </div>
  )
}
