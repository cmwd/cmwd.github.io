import React from 'react';
import classNames from 'classnames';

export const getIconClass = ({ className, iconName }) => 
  classNames(className, `ui__icon fa fa-${iconName}`);

function Icon(props) {
  const {
    as: ElementType = 'i',
    className,
    iconName,
    ...rest,
  } = props;

  return (
    <ElementType
      {...rest}
      className={getIconClass({ className, iconName })}
      aria-hidden
    />
  );
}

export default Icon;
