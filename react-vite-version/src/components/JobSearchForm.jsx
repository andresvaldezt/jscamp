import { useId, useState } from 'react'
import { SearchBar } from './SearchBar.jsx'
import { SearchFilters } from './SearchFilters.jsx'

const useSearchForm = ({ idText, idTechnology, idLocation, idExperienceLevel, onSearch, onTextFilter  }) => {

    const[
        searchText,
        setSearchText
    ] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Submit del formulario de busqueda')

      //Se cambio e.target por e.currentTarget
      //asi recuperamos todo el formulario para filtrar
      const formData = new FormData(e.currentTarget);

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
        setSearchText(text)
        onTextFilter(text);
    }

    return {
        searchText,
        handleSubmit,
        handleTextChange
    }

}

export function JobSearchForm({onSearch, onTextFilter}){

    const idText = useId()
    const idTechnology = useId()
    const idLocation = useId()
    const idExperienceLevel = useId()

    //los hooks no pueden ser llamados dentro de un callback, estos deben ser llamados dentro de la funcion
    //del componente o dentro de otra funcion custom hook
    const {
        handleSubmit,
        handleTextChange
    } = useSearchForm({ idText, idTechnology, idLocation, idExperienceLevel, onSearch, onTextFilter})

    return(
        <form onChange={handleSubmit} className="jobs-search" role="search">
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