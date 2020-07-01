import React from 'react';
import renderer from 'react-test-renderer';
import About from '../components/About.jsx';


import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
describe('Renders Components', () => {
  let component;
  let closeButton;
  beforeEach( () => {
    component = shallow(<About />)
   
  });

  test("should render initial layout", () => {
    const component = shallow(<About />);
    expect(component.getElements()).toMatchSnapshot();
  });

  test("should create a About modal in component state", ()=> {
    expect(component.contains(<About />)).toBe(false)
  });

  test("should close modal when clicked", ()=> {
    let overlay = component.find('#modal').find('.overlay');
    console.log(component);
    // expect(overlay.length).to.equal(1)

  });

  xtest("should close modal when clicked", ()=> {
    closeButton = component
      .find('.overlay')
      .find('.content')
      .find('#modal_close');
 
    // expect(closeButton.length).to.equal(1)
    closeButton.simulate('click');
    expect(component.state.showModal).toBe(false);
  });

 
});


