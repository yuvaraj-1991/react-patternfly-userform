import React, { useState } from 'react';
import { Button } from '@patternfly/react-core';
import { Form, FormGroup, TextInput, TextArea } from '@patternfly/react-core';

export const AgeCalc = ({ setAgeCount }) => {
  let [count, setCount] = useState(0);

  function decreement() {
    if (count <= 0) {
      count = 0;
    } else {
      setCount(count - 1);
    }
  }
  function increement() {
    setCount(count + 1);
  }

  return (
    <div>
      <Button variant="primary" onClick={decreement}>
        -
      </Button>
      <TextInput id="age-count" type="number" value={count}></TextInput>
      <Button variant="primary" onClick={increement}>
        +
      </Button>
    </div>
  );
};
