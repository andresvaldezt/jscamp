export function SearchFilters({idTechnology, idLocation, idExperienceLevel}){

    return(
        <div className="search-filters">
            <select name={idTechnology} id="tech">
                <option value="">Tecnología</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="mobile">Mobile</option>
            </select>
            <select name={idLocation} id="filter-location">
                <option value="">Ubicación</option>
                <option value="remoto">Remoto</option>
                <option value="cdmx">CDMX</option>
                <option value="guadalajara">GDL</option>
                <option value="barcelona">Barcelona</option>
                <option value="madrid">Madrid</option>
                <option value="bsas">Buenos Aires</option>
            </select>
            {/*<select name="contract" id="contract">
                <option value="3">Tipo de Contrato</option>
            </select>*/}
            <select name={idExperienceLevel} id="level">
                <option value="">Nivel de Experiencia</option>
            </select>
        </div>
    )
}