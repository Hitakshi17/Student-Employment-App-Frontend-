import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import "../App.css"

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
                    <NavLink className=" navbar navbar-brand nav-link " activeClassName="selected" to="/">
                        Student Employment App
                    </NavLink>
                    <NavLink className="navbar navbar-brand nav-link" activeClassName="selected" to="/student">
                        Student 
                    </NavLink>
                    <NavLink className="navbar navbar-light navbar-brand nav-link" activeClassName="selected" to="/company">
                        Company 
                    </NavLink>
                </header>
            </div>
        )
    }
}

export default HeaderComponent