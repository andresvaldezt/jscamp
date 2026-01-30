export function Header(){
    return(
        <header>
            <h1>
                <svg 
                fill="none" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2"
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                DevJobs
            </h1>
            <nav>
                <a href="https://www.instagram.com/antrick_/" target="_blank" rel="noopener noreferer">Inicio</a>
                <a href="empleos.html" >Empleos</a>
            </nav>
            <div>
                <devjobs-avatar
                service="google"
                username="google.com"
                size="40" >
                </devjobs-avatar>
                <devjobs-avatar
                service="google"
                username="github.com"
                size="40" >
                </devjobs-avatar>
                <devjobs-avatar
                service="x"
                username="Antrick_Twitch"
                size="40" >
                </devjobs-avatar>
                <devjobs-avatar
                service="github"
                username="andresvaldezt"
                size="50" >
                </devjobs-avatar>
            </div>
        </header>
    )
}