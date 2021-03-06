import React from 'react';
import PropTypes from 'prop-types';

const Columns = (props) => {
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
      <path
        fillRule="evenodd"
        d="M15 2H1v12h14V2zM1 1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V2a1 1 0 00-1-1H1z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Columns.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Columns.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Columns;
