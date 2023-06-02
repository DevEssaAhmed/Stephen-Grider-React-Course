import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  if (primary && secondary) {
    throw new Error(
      'Only One of primary and secondary prop should be provided '
    );
  }

  const classes = classnames(
    rest.className,
    'flex items-center px-3 py-1.5 border m-4',
    {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-500  bg-yellow-400  text-white': warning,
      'border-red-600 bg-red-600 text-white': danger,
      'rounded-full': rounded,
      '!text-blue-500': outline && primary,
      '!text-gray-500': outline && secondary,
      '!text-green-500 bg-white': outline && success,
      '!text-yellow-400': outline && warning,
      '!text-red-500': outline && danger,
      '!bg-white': outline,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkButtonType: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        'Only one of primary,secondary,success,warning,danger can be true'
      );
    }
  },
};

export default Button;
