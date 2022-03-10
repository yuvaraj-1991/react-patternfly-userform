import React, { FormEvent, useState } from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  FormSelect,
  FormSelectOption,
  Button,
  Radio,
  Select,
  SelectOption,
  SelectVariant,
  ActionGroup,
} from '@patternfly/react-core';
import SelectMonth from './SelectMonth';
import { AgeCalc } from './AgeCalc';

export const UserDataForm = ({ usersArray }) => {
  const initialDefaultValues = {
    fullName: '',
    gender: '',
    age: 0,
    favMonth: '',
  };

  const [users, setUsers] = useState(initialDefaultValues);

  //Function to handle name input
  function setFullName(value) {
    setUsers({
      ...users,
      fullName: value,
    });
  }

  // Function to submit form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(users);
    usersArray.push(users);
  }

  // Function to clear form
  function clearForm() {
    setUsers({
      fullName: '',
      gender: '',
      age: 0,
      favMonth: '',
    });
  }

  const onChangeGender = (_: boolean, event: FormEvent<HTMLInputElement>) => {
    // debugger;
    // console.log(event.target.value);
    // const { value } = event.target;
    setUsers({ ...users, gender: event.target['value'] });
  };

  function setAgeCount(ageValue) {
    console.log(ageValue);
    setUsers({
      ...users,
      age: ageValue,
    });
  }
  const setFavMonth = (selection) => {
    setUsers({ ...users, favMonth: selection });
  };
  console.log(usersArray);
  return (
    <>
      <div>
        <Form>
          <FormGroup label="Full Name" isRequired fieldId="fullName">
            <TextInput
              id="fullName"
              type="text"
              name="fullName"
              value={users.fullName}
              onChange={(value) => {
                setFullName(value);
              }}
            ></TextInput>
          </FormGroup>

          <FormGroup label="Age" isRequired fieldId="ageField">
            <AgeCalc setAgeCount={setAgeCount} />
          </FormGroup>

          <FormGroup label="Gender" fieldId="GenderField" isRequired helperText="Please provide your gender">
            <Radio
              isChecked={users.gender['Female']}
              label="Female"
              id="radio-button"
              name="gender-radio-button"
              value="Female"
              onChange={onChangeGender}
            ></Radio>

            <Radio
              isChecked={users.gender['Male']}
              label="Male"
              id="radio-button"
              name="gender-radio-button"
              value="Male"
              onChange={onChangeGender}
            ></Radio>
          </FormGroup>

          <FormGroup label="Drop Down Favourite Month" isRequired fieldId="setFavMonthField">
            <SelectMonth setFavMonth={setFavMonth} />
          </FormGroup>

          <ActionGroup>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="primary" onClick={clearForm}>
              Clear
            </Button>
          </ActionGroup>
        </Form>
      </div>
    </>
  );
};
