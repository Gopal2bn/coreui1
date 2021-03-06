import React, { PropTypes } from 'react';
import Shared from '../../Shared';
import defaultTheme from '../../theme/components/Label';
import cx from 'classnames/dedupe';
import mapProps from 'recompose/mapProps';
import { merge } from 'ramda';

const systemStyles = { };

const LabelContainer = mapProps(({ className, sheet, style, theme, ...rest }) => ({
  className: cx(sheet.classes.label, theme.classes.label, className),
  style: merge(theme.styles.label, style),
  ...rest,
}))('label');

const StyledLabel = Shared.useSheet(LabelContainer, systemStyles);

const Label = (props) =>
  <StyledLabel {...props}>{props.children}</StyledLabel>;

const classes = defaultTheme.classes;
const options = defaultTheme.options;
const styles = defaultTheme.styles;

Label.defaultProps = { theme: { classes, options, styles } };

Label.displayName = 'Label';

Label.propTypes = {
  children: PropTypes.node,

  theme: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

Shared.registerComponent('Label', Label);

export default Label;
