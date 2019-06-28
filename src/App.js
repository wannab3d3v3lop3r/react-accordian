import React, { Component } from 'react'
import Accordian from './components/Accordian'

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

export class App extends Component {

  render() {

    return (
      <div>
        <Accordian sections={sections}/>
      </div>
    )
  }
}

export default App
