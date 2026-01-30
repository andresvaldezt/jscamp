import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { JobSearchForm } from './components/JobSearchForm.jsx'
import { SearchResults } from './components/SearchResults.jsx'
import { Pagination } from './components/Pagination.jsx'
import { Footer } from './components/Footer.jsx'
import jobsData from './data.json'

const RESULTS_PER_PAGE = 3;

function App() {

  const[
    textToFilter, //Texto actual a filtrar
    setTextToFilter //cambia el texto cambian los resultados
  ] = useState('')

  const[
    currentPage, //estado actual o en este caso pagina actual
    setCurrentPage //cambiando de estado o en este caso cambiando de pagina
  ] = useState(1)

  const jobsWithTextFilter = textToFilter === ''
    ? jobsData
    : jobsData.filter(job => {
        return job.titulo.toLocaleLowerCase().includes(textToFilter.toLocaleLowerCase())
    })

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE);

  //pasamos el filtro aqui, si no hay texto en el filtro renderiza todos
  const pagedResults = jobsWithTextFilter.slice(
    //donde comienza a cortar
    (currentPage - 1) * RESULTS_PER_PAGE, //pagina 1 -> 0, 2 -> 4, 3 -> 8
    //hasta donde va a cortar
    currentPage * RESULTS_PER_PAGE        //pagina 1 -> 4, 2 -> 8, 3 -> 12
  )

  const handlePageChange = (page) => {
    console.log('cambiando a la pagina:', page);
    setCurrentPage(page);
  }

  const handleSearch = () =>{

  }

  const handleTextFilter = (newTextToFilter) =>{
    setTextToFilter(newTextToFilter)
    setCurrentPage(1)
  }
  

  return (
    <>
    <Header/>

    <main className="find-job">

        <section className="jobs-header">

            <h1>Encuentra tu próximo trabajo</h1>

            <p>Explora miles de oportunidades en el sector técnologico.</p>
            
            <JobSearchForm
              onSearch={handleSearch}
              onTextFilter={handleTextFilter}
            />
        </section>

        <SearchResults 
          jobs={pagedResults}
        />

        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange}
        />

    </main>

    <Footer/>

    </>
  )
}

export default App
