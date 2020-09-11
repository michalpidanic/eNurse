import React, { Component } from 'react'
import axios from 'axios'

import './MainContent.scss'

import Section from '../Section/Section'
import Announcement from '../Announcement/Announcement'

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
            obj: {}
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/1').then(
            res => {
                this.setState(this.state.obj = res)
            })
    }



    render() {

        const sections = this.state.sectionNames.map((name) => (<Section title={name} />))

        return (
            <div className='mainContent'>
                {sections}
                <p>{this.state.obj.data.title}</p>
            </div>
        )
    }
}
