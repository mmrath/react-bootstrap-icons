import React from 'react';
import PropTypes from 'prop-types';

const ReplyAllFill = (props) => {
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
      <path d="M10.079 13.9l4.568-3.281a.719.719 0 000-1.238L10.079 6.1A.716.716 0 009 6.719V8c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z" />
      <path
        fillRule="evenodd"
        d="M12.868 6.293a.5.5 0 01.7-.106l3.993 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a.5.5 0 11-.593-.805l4.012-2.954a.523.523 0 01.042-.028.147.147 0 000-.252.512.512 0 01-.042-.028l-4.012-2.954a.5.5 0 01-.106-.699z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReplyAllFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ReplyAllFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ReplyAllFill;