// @flow

import React from 'react';
import { format } from 'date-fns';

type PropTypesT = {
  start: number;
  end?: number;
  format: string;
  endLabel: string;
};

export default function DateRangeComponent(props: PropTypesT) {
  const start: string = format(props.start, props.format);
  const end: string = props.end
    ? format(props.end, props.format)
    : props.endLabel;

  return (
    <span>{`${end} - ${start}`}</span>
  );
}

DateRangeComponent.defaultProps = {
  current: false,
  format: 'MM-YYYY',
  endLabel: 'current',
};
