import { useState } from "react"

const useFormulario = (inicial) => {
    const [formulario,setFormulario] = useState(inicial)
    const handlechange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
         })
    } 
    
    const reset = () => {
        setFormulario(inicial)
    }
    
    return[formulario,handlechange,reset]       
}

export default useFormulario
