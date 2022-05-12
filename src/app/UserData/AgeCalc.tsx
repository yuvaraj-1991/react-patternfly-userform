import React, { useState } from 'react';
import { Button } from '@patternfly/react-core';
import { Form, FormGroup, TextInput, TextArea } from '@patternfly/react-core';

export const AgeCalc = ({ setAgeCount, age }) => {
  // let [count, setCount] = useState(0);

  function decreement() {
    if (age <= 0) {
      setAgeCount = 0;
    } else {
      setAgeCount(age - 1);
    }
  }
  function increement() {
    setAgeCount(age + 1);
  }

  return (
    <div>
      <Button variant="primary" onClick={decreement}>
        -
      </Button>
      <TextInput id="age-count" type="number" value={age}></TextInput>
      <Button variant="primary" onClick={increement}>
        +
      </Button>
    </div>
  );
};
