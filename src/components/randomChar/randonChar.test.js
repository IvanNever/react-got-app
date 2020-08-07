import React from 'react';
import RandomChar from './randomChar';
import {shallow} from 'enzyme';

describe ('Testing <RandomChar/>', () => {

    const char = shallow(<RandomChar/>);

    describe('Testing snap & state', () => {

        it('RandomChar have rendered correctly', () => {
            expect(char).toMatchSnapshot();
        })

        it('RandomChar state "char" is empty object', () => {
            expect(char.state().char).toBeObject();
        })

        it('RandomChar state "loading" is true', () => {
            expect(char.state().loading).toBeTrue();
        })

        it('RandomChar state "error" is false', () => {
            expect(char.state().error).toBeFalse();
        })
    });

    describe('Handlers tests', () => {

        it('testing onCharLoaded', () => {
            char.instance().onCharLoaded();
            expect(char.state().loading).toBeFalse();
        })

        it('testing onError', () => {
            char.instance().onError();
            expect(char.state().loading).toBeFalse();
            expect(char.state().error).toBeTrue();
        })

        it('testing updateChar', () => {
            char.instance().updateChar();
            expect(char.state().loading).toBeFalse();
        })
    });
})