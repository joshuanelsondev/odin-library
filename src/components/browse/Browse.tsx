import './Browse.scss'

export default function Browse () {
  return (
    <div className='browse'>
      <h2 className='browse__header'>Browse The Library</h2>
      <div className='browse__filter' >
       <select id="genre" name="genre">
         <option>Genre</option>
         <optgroup label='Fiction'>
           <option value="romance">Romance</option>
           <option value="mystery">Mystery</option>
           <option value="science-fiction">Science Fiction</option>
           <option value="fantasy">Fantasy</option>
           <option value="horror">Horror</option>
           <option value="historical-fiction">Historical Fiction</option>
         </optgroup>
         <optgroup label='Non-Fiction'>
           <option value="memoir">Memoir</option>
           <option value="biography">Biography</option>
           <option value="history">History</option>
           <option value="self-help">Self-Help</option>
           <option value="travel">Travel</option>
           <option value="cookbook">Cookbook</option>
         </optgroup>
         <option value="poetry">Poetry</option>
         <option value="short-story">Short Story</option>
       </select>
      </div>
    </div>
  )
}
