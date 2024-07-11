import { useState } from 'react'
import Browse from './components/browse/Browse'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import './App.scss'

function App() {

  const [ currentBook, setCurrentBook ] = useState<string | null>(null)

  return (
    <main className='main-container'>
      <Header />
      <Browse currentBook={currentBook} setCurrentBook={setCurrentBook} />
      <Sidebar />
    </main>
  )
}

export default App
