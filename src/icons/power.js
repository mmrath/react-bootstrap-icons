import React from 'react';
import PropTypes from 'prop-types';

const Power = (props) => {
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
        d="M5.578 4.437a5 5 0 104.922.044l.5-.866a6 6 0 11-5.908-.053l.486.875z"
        clipRule="evenodd"
      />
      <path fillRule="evenodd" d="M7.5 8V1h1v7h-1z" clipRule="evenodd" />
    </svg>
  );
};

Power.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Power.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Power;
