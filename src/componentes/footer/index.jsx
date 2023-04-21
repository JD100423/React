import "./footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.facebook.com/junior100901/'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://www.linkedin.com/in/bartolo-del-rosario-marmolejos/'>
            <img src="/img/linkedin.png" alt='linkedin' />
        </a>
        <a href='https://www.instagram.com/del_rosario10/?hl=es'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Bartolo Del Rosario M.</strong>
</footer>
}

export default Footer