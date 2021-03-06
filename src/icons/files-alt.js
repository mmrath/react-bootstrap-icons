import React from 'react';
import PropTypes from 'prop-types';

const FilesAlt = (props) => {
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
        d="M3 1h8a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H3z"
        clipRule="evenodd"
      />
      <path d="M13 4V3a2 2 0 012 2v6a2 2 0 01-2 2v-1a1 1 0 001-1V5a1 1 0 00-1-1z" />
    </svg>
  );
};

FilesAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FilesAlt.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FilesAlt;
