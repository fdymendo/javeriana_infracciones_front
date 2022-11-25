import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => { showButton() }, []);
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        SIMIT <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/infraccion' className='nav-links' onClick={closeMobileMenu}>
                            Registrar Multa
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/citas' className='nav-links' onClick={closeMobileMenu}>
                            Registrar Citas
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/consulta' className='nav-links' onClick={closeMobileMenu}>
                            Consultar Infracciones
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar