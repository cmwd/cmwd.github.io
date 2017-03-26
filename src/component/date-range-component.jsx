// @flow

import React from 'react';
import { format } from 'date-fns';

type PropTypesT = {
  start: number;
  end?: number;
  format?: string;
  endLabel?: string;
};

export default function DateRangeComponent(props: PropTypesT) {
  if (typeof props.start !== 'number') { return null; }

  const {
    format: dateFormat = 'MM-YYYY',
    endLabel = 'current',
  } = props;

  const start: string = format(props.start, dateFormat);
  const end: string = props.end
    ? format(props.end, dateFormat)
    : endLabel;

  return (
    <span>{`${end} - ${start}`}</span>
  );
}
