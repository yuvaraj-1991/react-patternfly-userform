import React from 'react';
import { Select, SelectOption } from '@patternfly/react-core';

function SelectMonth({ onToggle, onSelect, selected, isMonthOpen }) {
  const options = [
    <SelectOption key={0} value="Please Choose" isPlaceholder />,
    <SelectOption key={1} value="January" />,
    <SelectOption key={2} value="February" />,
    <SelectOption key={3} value="March" />,
    <SelectOption key={4} value="April" />,
    <SelectOption key={5} value="May" />,
    <SelectOption key={6} value="June" />,
    <SelectOption key={7} value="July" />,
    <SelectOption key={8} value="August" />,
    <SelectOption key={9} value="September" />,
    <SelectOption key={10} value="October" />,
    <SelectOption key={11} value="November" />,
    <SelectOption key={12} value="December" />,
  ];

  const titleId = 'placeholder-style-select-option-id';

  return (
    <div>
      <Select
        // variant={SelectVariant.single}
        hasPlaceholderStyle
        aria-label="Select input"
        onToggle={onToggle}
        onSelect={onSelect}
        // onClear={clearSelection}
        selections={selected}
        isOpen={isMonthOpen}
        aria-labelledby={titleId}
      >
        {options}
      </Select>
    </div>
  );
}

export default SelectMonth;
