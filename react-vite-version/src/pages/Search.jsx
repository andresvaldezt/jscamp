import { useEffect} from 'react'
import { JobSearchForm } from '../components/JobSearchForm.jsx'
import { SearchResults } from '../components/SearchResults.jsx'
import { Pagination } from '../components/Pagination.jsx'
import { useFilters } from '../hooks/useFilters.jsx'

export function SearchPage() {

  const {
    jobs,
    total,
    loading,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
    handleTextFilter
  } = useFilters()
  
  useEffect(() => {
    document.title = `Resultados: ${total}, Página ${currentPage} - DevJobs`
  }, [total, currentPage])

  return (
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
          jobs={jobs}
        />

        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange}
        />
    </main>
  )
}
