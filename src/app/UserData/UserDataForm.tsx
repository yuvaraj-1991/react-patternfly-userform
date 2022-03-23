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
import { func } from 'prop-types';

export const UserDataForm = () => {
  // const initialDefaultValues = {
  //   fullName: '',
  //   gender: '',
  //   age: 0,
  //   favMonth: '',
  // };

  // const [users, setUsers] = useState(initialDefaultValues);

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [month, setFavMon] = useState('');

  //Function to handle name input
  function setFullName(value) {
    setName(value);
  }

  // Function to submit form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, age, gender, month);
    // usersArray.push(users);
  }

  // Function to clear form
  function clearForm() {
    console.log('cleared');
  }

  const onChangeGender = (_: boolean, event: FormEvent<HTMLInputElement>) => {
    setGender(event.target['value']);
  };

  function setAgeCount(ageValue) {
    setAge(ageValue);
  }
  const setFavMonth = (selection) => {
    setFavMon(selection);
  };
  // console.log(usersArray);
  return (
    <>
      <div>
        <Form>
          <FormGroup label="Full Name" isRequired fieldId="fullName">
            <TextInput
              id="fullName"
              type="text"
              name="fullName"
              value={name}
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
              isChecked={gender['Female']}
              label="Female"
              id="radio-button"
              name="gender-radio-button"
              value="Female"
              onChange={onChangeGender}
            ></Radio>

            <Radio
              isChecked={gender['Male']}
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
