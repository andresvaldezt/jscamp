import { useEffect, useState } from 'react'

const RESULTS_PER_PAGE = 4;

export function useFilters(){

    const[
        filters,
        setFilters
    ] = useState({
            technology: '',
            location: '',
            experiencielevel: ''
    })

    const[
        textToFilter, //Texto actual a filtrar
        setTextToFilter //cambia el texto cambian los resultados
    ] = useState('')

    const[
        currentPage, //estado actual o en este caso pagina actual
        setCurrentPage //cambiando de estado o en este caso cambiando de pagina
    ] = useState(1)

    const [
        jobs, 
        setJobs
    ] = useState([])

    const [
        total,
        setTotal
    ] = useState(0)

    const [
        loading,
        setLoading
    ] = useState(true)

    useEffect(() => {
        async function fetchJobs() {
            try {
                setLoading(true)

                const params = new URLSearchParams()
                if (textToFilter) params.append('text', textToFilter)
                if (filters.technology) params.append('technology', filters.technology)
                if (filters.location) params.append('type', filters.location)
                if (filters.experiencielevel) params.append('experiencielevel', filters.experiencielevel)

                const offset = (currentPage - 1) * RESULTS_PER_PAGE
                params.append('limit', RESULTS_PER_PAGE)
                params.append('offset', offset)

                const queryParams = params.toString()

                const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)
                const json =  await response.json()

                setJobs(json.data)
                setTotal(json.total)
            } catch (error) {
                console.error('Error fetching jobs:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchJobs()
    }, [filters, textToFilter, currentPage])

    // const jobsFilteredByFilters = jobs.filter(job =>{
    //     return (
    //     (filters.technology === '' || job.data.technology === filters.technology)
    //     )
    // })

    // const jobsWithTextFilter = textToFilter === ''
    //     ? jobsFilteredByFilters
    //     : jobsFilteredByFilters.filter(job => {
    //         return job.titulo.toLocaleLowerCase().includes(textToFilter.toLocaleLowerCase())
    //     })

    const totalPages = Math.ceil(total / RESULTS_PER_PAGE);

    // //pasamos el filtro aqui, si no hay texto en el filtro renderiza todos
    // const pagedResults = jobsWithTextFilter.slice(
    //     //donde comienza a cortar
    //     (currentPage - 1) * RESULTS_PER_PAGE, //pagina 1 -> 0, 2 -> 4, 3 -> 8
    //     //hasta donde va a cortar
    //     currentPage * RESULTS_PER_PAGE        //pagina 1 -> 4, 2 -> 8, 3 -> 12
    // )

    const handlePageChange = (page) => {
        console.log('cambiando a la pagina:', page);
        setCurrentPage(page);
    }

    const handleTextFilter = (newTextToFilter) =>{
        setTextToFilter(newTextToFilter)
        setCurrentPage(1)
    }

    const handleSearch = (filters) =>{
        setFilters(filters)
        setCurrentPage(1)
    }

    return {
        jobs,
        total,
        loading,
        totalPages,
        currentPage,
        handlePageChange,
        handleSearch,
        handleTextFilter
    }
}