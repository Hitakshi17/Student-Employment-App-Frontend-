import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header className="nav flex-row navbar-dark bg-dark" >
                    <NavLink className=" navbar navbar-brand nav-link " to="/">
                        Student Employment App
                    </NavLink>
                    <NavLink className="navbar navbar-brand nav-link" to="/student">
                        Student
                    </NavLink>
                    <NavLink className="navbar navbar-light navbar-brand nav-link " to="/company">
                        Company
                    </NavLink>
                    <NavLink className="navbar navbar-light navbar-brand nav-link " to="/about">
                        About
                    </NavLink>
                    <NavLink className="navbar navbar-light navbar-brand nav-link " to="/contact">
                        Contact
                    </NavLink>
                    <NavLink id="login" className="navbar navbar-light navbar-brand nav-link " to="/login">
                        Login
                    </NavLink>
                </header>
            </div>
        )
    }
}

export default HeaderComponent