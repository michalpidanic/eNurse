import React, { Component } from 'react'

import './Navbar.scss'

import NavItem from '../NavItem/NavItem'

export default class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navItemsName: [
                "O ambulancii",
                "Ordinačné hodiny",
                "Kontakty",
                "Cenník",
                "Predpis liekov",
                "Objednať sa",
                "Oznamy"
            ]
        }
    }


    render() {

        const navItems = this.state.navItemsName.map((name) => (<NavItem title={name} />))

        return (
            <nav className="navbar">
                {navItems}
            </nav>
        )
    }
}
