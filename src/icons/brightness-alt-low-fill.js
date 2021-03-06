import React from 'react';
import PropTypes from 'prop-types';

const BrightnessAltLowFill = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M8.5 5.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 6a.5.5 0 110-1 .5.5 0 010 1zm-11 0a.5.5 0 110-1 .5.5 0 010 1zm9.743-4.036a.5.5 0 11-.707-.707.5.5 0 01.707.707zm-8.486 0a.5.5 0 11.707-.707.5.5 0 01-.707.707z" />
      <path
        fillRule="evenodd"
        d="M4 11a4 4 0 118 0 .5.5 0 01-.5.5h-7A.5.5 0 014 11z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BrightnessAltLowFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BrightnessAltLowFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BrightnessAltLowFill;
