import { useState, useEffect } from 'react'

import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

import { HomePage } from './pages/Home.jsx'
import { SearchPage } from './pages/Search.jsx'
import { NotFoundPage } from './pages/404.jsx'

function App() {

  //let path = window.location.pathname;
  const [
    currenPath, //path actual
    setCurrentPath //funcion que va a actualizar el path
  ] = useState(window.location.pathname) //estado inicial del path

  let page = <NotFoundPage/>

  if(currenPath === '/'){
    page = <HomePage/>
  }else if (currenPath === '/search'){
    page = <SearchPage/>
  }

  useEffect(() => {

    const handleLocationChange = () =>{
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }

  }, [])
  

  return (
    <>
    <Header/>

    {page}

    <Footer/>

    </>
  )
}

export default App
