import React, { Component } from 'react'

import './MainContent.scss'

import Section from '../Section/Section'

export default class MainContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sectionNames: [
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

        const sections = this.state.sectionNames.map((name) => (<Section title={name} />))

        return (
            <div className='mainContent'>
                {sections}
            </div>
        )
    }
}
