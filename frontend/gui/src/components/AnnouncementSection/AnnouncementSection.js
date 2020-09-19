import React, { Component } from 'react'
import axios from 'axios'

import './AnnouncementSection.scss'

import Announcement from '../Announcement/Announcement'

export default class AnnouncementSection extends Component {

    constructor(props) {
        super()
        this.state = {
            announcements: []
        }

        this.updateAnnouncementList = this.updateAnnouncementList.bind(this)
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then((response) => {
                this.setState({
                    announcements: response.data
                })
            })
    }

    updateAnnouncementList(id) {
        axios.delete(`http://127.0.0.1:8000/api/${id}`).then(() => {
            axios.get('http://127.0.0.1:8000/api/')
                .then((response) => {
                    this.setState({
                        announcements: response.data
                    })
                })
        })
    }

    render() {

        const announcements = this.state.announcements.map((data) =>
            <Announcement title={data.title}
                date={data.date}
                text={data.announcement}
                author={data.author}
                key={data.id}
                id={data.id}
                delete={this.updateAnnouncementList} />)

        return (
            <div>
                <div className='announcementContainer'>
                    {announcements}
                </div>

            </div>
        )
    }
}
