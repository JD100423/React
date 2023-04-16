import "./Formulario.css"
import Texto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = () => {

    const resetBoton = (e) => {
        e.preventDefault()
        console.log ("Manejar el envio", e)
    }
    return <section className="formulario">
        <form onSubmit={resetBoton}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre" required/>
            <Texto titulo="Puesto"placeholder="Ingresar puesto" required/>
            <Texto titulo="Foto"placeholder="Ingresar enlace de foto" required/>
            <ListaOpciones />
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario