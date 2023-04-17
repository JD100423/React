import { useState } from "react"
import "./Formulario.css"
import Texto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = () => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] =useState("")

    const resetBoton = (e) => {
        e.preventDefault()
        console.log ("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar)
    }
    return <section className="formulario">
        <form onSubmit={resetBoton}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Texto titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre}
            />
            <Texto titulo="Puesto"
            placeholder="Ingresar puesto" 
            required
            valor={puesto} 
            actualizarValor={actualizarPuesto}
            />
            <Texto titulo="Foto"
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto} 
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            />
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario