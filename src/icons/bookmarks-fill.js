import React from 'react';
import PropTypes from 'prop-types';

const BookmarksFill = (props) => {
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
        d="M2 4a2 2 0 012-2h6a2 2 0 012 2v12l-5-3-5 3V4z"
        clipRule="evenodd"
      />
      <path d="M14 14l-1-.6V2a1 1 0 00-1-1H4.268A2 2 0 016 0h6a2 2 0 012 2v12z" />
    </svg>
  );
};

BookmarksFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BookmarksFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BookmarksFill;
