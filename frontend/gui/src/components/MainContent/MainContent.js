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
            ],
            sectionColors: [
                "red",
                "blue",
                "green",
                "black",
                "yellow",
                "orange",
                "lightblue"
            ]
        }
    }

    render() {

        const sections = this.state.sectionNames.map((name) => (<Section title={name} color='blue' />))

        return (
            <div>
                {sections}
            </div>
        )
    }
}
