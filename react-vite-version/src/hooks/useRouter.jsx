import { useState, useEffect } from "react"

export function useRouter(){
    //let path = window.location.pathname;
  const [
    currenPath, //path actual
    setCurrentPath //funcion que va a actualizar el path
  ] = useState(window.location.pathname) //estado inicial del path

  useEffect(() => {

    const handleLocationChange = () =>{
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }

  }, [])

  function navigateTo(path){
    window.history.pushState({}, '', path)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return {
    currenPath,
    navigateTo
  }

}