export function SearchFilters({idTechnology, idLocation, idExperienceLevel}){

    return(
        <div className="search-filters">
            <select name={idTechnology} id="tech">
                <option value="1">Tecnología</option>
            </select>
            <select name={idLocation} id="filter-location">
                <option value="none">Ubicación</option>
                <option value="remoto">Remoto</option>
                <option value="cdmx">CDMX</option>
                <option value="guadalajara">GDL</option>
                <option value="MTY">MTY</option>
            </select>
            {/*<select name="contract" id="contract">
                <option value="3">Tipo de Contrato</option>
            </select>*/}
            <select name={idExperienceLevel} id="level">
                <option value="4">Nivel de Experiencia</option>
            </select>
        </div>
    )
}