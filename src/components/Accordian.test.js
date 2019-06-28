import React from 'react';
import { shallow } from 'enzyme';
import Accordian from './Accordian';
import toJson from 'enzyme-to-json';

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

describe('Accordian testing', () => {

    // The component renders an empty li when the sections prop is not supplied
    it('renders an empty li when sections prop is not supplied',() => {
        const wrapper = shallow(<Accordian />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    // The component renders no sections as active by default
    it('renders no section as active by default', () => {
        const wrapper = shallow(<Accordian sections={sections} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    // The component opens a clicked section
    it('component opens a clicked section', () => {
        const wrapper = shallow(<Accordian sections={sections}/>)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    // The component only opens the last section when multiple sections have been clicked.
    it('component only opens the last section when multiple sections have been clicked', () => {
        const wrapper = shallow(<Accordian sections={sections} />);
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})