import React from 'react';
import PropTypes from 'prop-types';

const VolumeDown = (props) => {
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
        d="M11.717 5.55A.5.5 0 0112 6v8a.5.5 0 01-.812.39L8.825 12.5H6.5A.5.5 0 016 12V8a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zM11 7.04L9.312 8.39A.5.5 0 019 8.5H7v3h2a.5.5 0 01.312.11L11 12.96V7.04zm1.584.237a138.303 138.303 0 00.832-.554l.002.002.003.005.01.016a4.871 4.871 0 01.16.264c.1.175.233.425.366.724.262.59.543 1.415.543 2.266 0 .85-.28 1.675-.543 2.266a8.14 8.14 0 01-.526.988l-.01.016-.003.005-.001.001s-.001.001-.417-.276a119.43 119.43 0 00-.416-.277v-.002l.007-.01a7.121 7.121 0 00.452-.852c.238-.534.457-1.21.457-1.859 0-.65-.22-1.325-.457-1.86a7.122 7.122 0 00-.452-.852l-.006-.01h-.001z"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VolumeDown.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default VolumeDown;