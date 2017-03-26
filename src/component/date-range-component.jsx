// @flow

import React from 'react';
import dateFns from 'date-fns';

type PropTypesT = {
  start: number;
  end?: number;
  format?: string;
  endLabel?: string;
};

export default function DateRangeComponent(props: PropTypesT) {
  if (typeof props.start !== 'number') { return null; }

  const {
    format = 'MM-YYYY',
    endLabel = 'current',
  } = props;

  const start: string = dateFns.format(props.start, format);
  const end: string = props.end
    ? dateFns.format(props.end, format)
    : endLabel;

  return (
    <span>{`${end} - ${start}`}</span>
  );
}
