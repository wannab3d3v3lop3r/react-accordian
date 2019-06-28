import React, { Component } from 'react'
import './Accordian.css'

export default class Accordian extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentSectionIndex: null
        }
    }

    handleClick = index => {
        this.setState({currentSectionIndex: index})
    }

    accordianListRender = () => {
        const currentSection = this.props.sections[this.state.currentSectionIndex];
        return this.props.sections.map((section,index) => { 
            return <li key={index}>
                <button
                    className='sectionBtn'
                    type="button" 
                    onClick={e => this.handleClick(index)}>
                    {section.title}
                </button>
                <p className='textEdit'>{(this.state.currentSectionIndex === index) && currentSection.content}</p>
            </li>
        })
    }

    render() {
        return (
            <div>
                <ul className='bulletRmv'>
                    {this.accordianListRender()}
                </ul>
            </div>
        )
    }
}

Accordian.defaultProps = {
    sections: []
}