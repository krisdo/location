import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../components/map.jsx';


import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
describe('Renders Components', () => {
  let component;
  beforeEach( () => {
    component = shallow(<Map lat={34.052235} lng={-118.243683}/>)
  });

  test("should render initial layout", () => {
    const component = shallow(<Map />);
    expect(component.getElements()).toMatchSnapshot();
  });

  test("should create a map in component state", ()=> {
    expect(component.contains(<Map />)).toBe(false)
  });

 
});


