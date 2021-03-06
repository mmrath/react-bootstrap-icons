import React from 'react';
import PropTypes from 'prop-types';

const Union = (props) => {
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
      <path d="M4 5.5A1.5 1.5 0 015.5 4h9A1.5 1.5 0 0116 5.5v9a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 014 14.5v-9z" />
      <path d="M0 1.5A1.5 1.5 0 011.5 0h9A1.5 1.5 0 0112 1.5v9a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 010 10.5v-9z" />
    </svg>
  );
};

Union.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Union.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Union;
