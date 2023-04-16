import "./MiOrg.css"

const MiOrg = () => {

    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", manejarClick)
    }
    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="Add" onClick={manejarClick} />
    </section>
}

export default MiOrg;