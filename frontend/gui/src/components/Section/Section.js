import React, { Component } from 'react'

import './Section.scss'

export default class Section extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title
        }

    }

    render() {
        return (
            <div className='section'>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}
