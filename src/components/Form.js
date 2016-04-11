import React, { PropTypes } from 'react';
import RFForm, {
  addInputTypes, Button, Context, Field, Message, Summary, Trigger,
} from 'react-formal';
import Shared from '../Shared';
import { merge, partial } from 'ramda';
import compose from 'recompose/compose';
import getContext from 'recompose/getContext';
import lifecycle from 'recompose/lifecycle';
import mapProps from 'recompose/mapProps';

const handleSubmit = (props, e) =>
  console.log(props);

const setup = () => {
  const {
    CalendarInput, ComboboxInput, DateTimePickerInput, DropdownListInput,
    MultiselectInput, NumberPickerInput, SelectListInput, TextInput,
  } = Shared.getRegisteredComponents();

  const inputs = [
    { component: CalendarInput, types: ['calendar'] },
    { component: ComboboxInput, types: ['combobox'] },
    { component: DateTimePickerInput, types: ['datetimepicker', 'timepicker'] },
    { component: DropdownListInput, types: ['dropdownlist'] },
    { component: MultiselectInput, types: ['array', 'multiselect'] },
    { component: NumberPickerInput, types: ['number'] },
    { component: SelectListInput, types: ['selectlist'] },
    {
      component: TextInput,
      types: ['email', 'password', 'search', 'string', 'tel', 'text', 'url'],
    },
  ];

  inputs.forEach(({ component, types }) => {
    if (component) { types.forEach((t) => addInputTypes({ [t]: component })); }
  });
};

const Form = compose(
  mapProps((props) => merge(props, { onSubmit: (e) => handleSubmit(props, e) })),
  getContext({ coreuiModalContext: PropTypes.object }),
  lifecycle(setup, Function.prototype)
)(RFForm);

Form.addInputTypes = addInputTypes;
Form.Button = Button;
Form.Context = Context;
Form.Field = Field;
Form.Message = Message;
Form.Summary = Summary;
Form.Trigger = Trigger;

Shared.registerComponent('Form', Form);

export { addInputTypes, Button, Context, Field, Message, Summary, Trigger };

export default Form;
