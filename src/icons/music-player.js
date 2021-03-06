import React from 'react';
import PropTypes from 'prop-types';

const MusicPlayer = (props) => {
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
        d="M12 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1zM4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M11 3H5v3h6V3zM5 2a1 1 0 00-1 1v3a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1H5zm3 11a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z"
        clipRule="evenodd"
      />
      <circle cx="8" cy="11" r="1" />
    </svg>
  );
};

MusicPlayer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MusicPlayer.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default MusicPlayer;
