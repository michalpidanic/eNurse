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
            ]
        }
    }

    // axios.get('http://127.0.0.1:8000/api/').then(
    //     res => {
    //         const annItem = () => <Announcement title={res.title} date={res.date} text={res.announcement} />
    //     })


    render() {

        const sections = this.state.sectionNames.map((name) => (<Section title={name} />))

        return (
            <div className='mainContent'>
                {sections}
            </div>
        )
    }
}
