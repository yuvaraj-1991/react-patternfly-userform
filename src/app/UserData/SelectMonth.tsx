import React from 'react';
import { Select, SelectOption } from '@patternfly/react-core';

function SelectMonth({ setFavMonth }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);

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

  const onToggle = (isOpen) => setIsOpen(isOpen);

  const onSelect = (event, selection, isPlaceholder) => {
    setSelected(selection);
    setFavMonth(selection);
    setIsOpen(false);
  };

  // const clearSelection = () => {
  //   setSelected('');
  //   setFavMonth(null);
  //   setIsOpen(false);
  // };

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
        isOpen={isOpen}
        aria-labelledby={titleId}
      >
        {options}
      </Select>
    </div>
  );
}

export default SelectMonth;
