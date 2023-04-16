import "./CampoTexto.css"

const Texto = (props) => {
    console.log("datos: ", props.titulo)
    const placeholderModificado = `${props.placeholder}...`
    return (<div className="Texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} required={props.required}/>
    </div>)
}

export default Texto