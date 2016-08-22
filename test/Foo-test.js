import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Foo, Bar } from '../src/Foo';

describe("A suite", () => {
  it("contains spec with an expectation", () => {
    expect(shallow(<Foo />).contains(<div className="foo" />)).toBe(true);
  });

  it("contains spec with an expectation", () => {
    expect(mount(<Foo />).find('.foo').length).toBe(1);
  });

  it("can run an expectation with render", () => {
    expect(render(<Foo />).find('.foo').length).toBe(1);
  });

  it("contains spec with an expectation", () => {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it("has bar too", () => {
    expect(render(<Bar />).find('div').text()).toBe('this is cool');
  })

});
