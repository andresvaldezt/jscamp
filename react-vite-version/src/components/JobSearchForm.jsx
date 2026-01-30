import { useId } from 'react'
import {SearchBar} from './SearchBar.jsx'
import {SearchFilters} from './SearchFilters.jsx'

export function JobSearchForm({onSearch, onTextFilter}){

    const idText = useId()
    const idTechnology = useId()
    const idLocation = useId()
    const idExperienceLevel = useId()

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Submit del formulario de busqueda')

      const formData = new FormData(e.target);

      const filters = {
        search: formData.get(idText),
        technology: formData.get(idTechnology),
        location: formData.get(idLocation),
        experiencielevel: formData.get(idExperienceLevel)
      }
      console.log(filters)
      onSearch(filters)
    }

    const handleTextChange = (e) => {
        const text = e.target.value
        console.log(text)
        onTextFilter(text);
    }

    return(
        <form onSubmit={handleSubmit} className="jobs-search" role="search">
            <SearchBar
                idText={idText}
                onTextChange={handleTextChange}
            />
            <SearchFilters
                idTechnology={idTechnology}
                idLocation={idLocation}
                idExperienceLevel={idExperienceLevel}
            />
        </form>
    )
}