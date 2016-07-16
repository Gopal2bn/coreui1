import React from 'react';
import SelectListInput from '../../src/components/SelectListInput';
import checking from 'checkers/mocha';
import { expect } from 'chai';
import sd from 'skin-deep';

const gen = checking.gen;

describe('SelectListInput', () => {
  it('should render a ReactElement', () => {
    const tree = sd.shallowRender(
      <SelectListInput data={['orange', 'red', 'blue', 'purple']} defaultValue={['orange']} />
    );
    const vdom = tree.getRenderOutput();
    expect(vdom).to.have.property('type');
  });
});
