import React from 'react';
import PropTypes from 'prop-types';

const AlertTriangleFill = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M9.022 3.566a1.13 1.13 0 011.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H3.144c-.889 0-1.437-.99-.98-1.767L9.022 3.566zM9.002 14a1 1 0 112 0 1 1 0 01-2 0zM10 7a.905.905 0 00-.9.995l.35 3.507a.553.553 0 001.1 0l.35-3.507A.905.905 0 0010 7z"
        clipRule="evenodd"
      />
    </svg>
  );
};

AlertTriangleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlertTriangleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default AlertTriangleFill;