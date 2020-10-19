import React, {useEffect, useState} from 'react';
import './NavBar.css';

function NavBar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav-bar ${show && "nav-bar__black"}`}>
            <h2 className="nav-bar__heading">
                My App
            </h2>
        </div>
    )
}

export default NavBar;
