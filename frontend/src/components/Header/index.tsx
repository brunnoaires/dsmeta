import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="dsmetalogo"/>
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por <a href="https://www.instagram.com/brunno_aires/">@brunno_aires</a>
                    </p>
            </div>
        </header>
    )
}

export default Header