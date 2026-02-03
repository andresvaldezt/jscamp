import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

import { HomePage } from './pages/Home.jsx'
import { SearchPage } from './pages/Search.jsx'
import { NotFoundPage } from './pages/404.jsx'

import jobsData from './data.json'

const RESULTS_PER_PAGE = 3;

function App() {
  const currenPath = window.location.pathname;

  let page = <NotFoundPage/>;

  if(currenPath === '/'){
    page = <HomePage/>
  }else if (currenPath === '/search'){
    page = <SearchPage/>;
  }
  

  return (
    <>
    <Header/>

    {page}

    <Footer/>

    </>
  )
}

export default App
