import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownRight = (props) => {
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
        d="M12 7.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H7a.5.5 0 010-1h4.5V8a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M2.646 3.646a.5.5 0 01.708 0l9 9a.5.5 0 01-.708.708l-9-9a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownRight.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ArrowDownRight;
