import React, { Component } from 'react'

import './NavItem.scss'

export default class NavItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title
        }

    }


    render() {
        return (
            <div className="navItem" >
                <p className="navItemText">
                    <a>
                        {this.state.title}
                    </a>
                </p>
            </div>
        )
    }
}
