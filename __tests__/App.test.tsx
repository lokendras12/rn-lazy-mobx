/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('snapshot test', () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot();
});

it('test function', () => {
  const add = (a: number, b: number) => {
    return a + b;
  };
  expect(add(2, 3)).toEqual(5);
});

it('button press', () => {
  const snap = renderer.create(<App />);
  const button = snap.root.findByProps({testID: 'button1'}).props;
  act(() => button.onPress());
  const text = snap.root.findByProps({testID: 'text1'}).props;
  expect(text.children).toEqual('App');
});
