import Browse from './components/browse/Browse'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import './App.scss'

function App() {

  return (
    <main className='main-container'>
      <Header />
      <Browse />
      <Sidebar />
    </main>
  )
}

export default App
