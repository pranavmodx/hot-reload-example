"use strict";

const expect = require('expect');
const enzyme = require('enzyme');
const React = require('react');

const Component = require('../src/ui/Component.jsx');

let props = {text: 'My Text'};

describe('component', () => {

    it('should render text', () => {
        const component = enzyme.shallow(<Component {...props} />);
        expect(component.text()).toInclude('My Text');
    });
});
