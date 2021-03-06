import React from 'react';
import { mount } from 'enzyme';

import WizardFooter from './WizardFooter';

const mockNext = jest.fn();
const mockBack = jest.fn();
const mockSubmit = jest.fn();
const mockCancel = jest.fn();

const commonFooterProps = {
  onNext: mockNext,
  onBack: mockBack,
  onSubmit: mockSubmit,
  onCancel: mockCancel,
  backLabel: 'Back',
  nextLabel: 'Next',
  cancelLabel: 'Cancel',
  submitLabel: 'Add',
};

describe('WizardFooter', () => {
  test('check footer buttons', () => {
    const cancelAndNextButtons = mount(<WizardFooter {...commonFooterProps} hasPrev={false} />);
    // should only have Cancel and Next button
    expect(cancelAndNextButtons.find('.bx--btn')).toHaveLength(2);
    const cancelBackAndNextButtons = mount(<WizardFooter {...commonFooterProps} />);
    // should have Cancel Back and Next button
    expect(cancelBackAndNextButtons.find('.bx--btn')).toHaveLength(3);
    const cancelBackAndAddButtons = mount(<WizardFooter {...commonFooterProps} hasNext={false} />);
    // should have Cancel Back and Add button
    expect(cancelBackAndAddButtons.find('.bx--btn')).toHaveLength(3);
    expect(
      cancelBackAndAddButtons
        .find('.bx--btn')
        .at(2)
        .text()
    ).toContain('Add');
  });
});
