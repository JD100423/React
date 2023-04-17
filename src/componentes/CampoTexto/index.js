import { useState } from "react"
import "./CampoTexto.css"

const Texto = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    const manejarCambios = (e) => {
        props.actualizarValor(e.target.value)
    }
    return (<div className="Texto">
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambios}
        />
    </div>)
}

export default Texto