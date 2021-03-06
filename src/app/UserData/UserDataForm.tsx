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
  Modal,
} from '@patternfly/react-core';
import SelectMonth from './SelectMonth';
import { AgeCalc } from './AgeCalc';
import { func } from 'prop-types';

export const UserDataForm = () => {
  interface Data {
    userName: string;
    userAge: number;
    userGender: boolean;
    userFavMon: string;
  }
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
  const [isOpen, setIsOpen] = useState(false);
  const [isEnab, setIsEnab] = useState(false);
  const [isMonthOpen, setIsMonthOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('');

  const onToggle = (isMonthOpen) => setIsMonthOpen(isMonthOpen);

  const onSelect = (event, selection, isPlaceholder) => {
    setSelected(selection);
    setIsMonthOpen(false);
  };

  //  Function to handle Modal
  function handleModalToggle() {
    if (isOpen == true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  //Function to handle name input
  function setFullName(value) {
    setName(value);
  }

  // Function to submit form
  function handleSubmit() {
    console.log(name, age, gender, selected);
    // usersArray.push(users);
  }

  // Function to clear form
  function clearForm() {
    setName('');
    setAge(0);
    setGender('');

    console.log('cleared');
  }

  const onChangeGender = (_: boolean, event: FormEvent<HTMLInputElement>) => {
    setGender(event.target['value']);
  };

  function setAgeCount(ageValue) {
    setAge(ageValue);
  }
  // const setFavMonth = (selection) => {
  //   setFavMon(selection);
  // };

  function submitBtnHandle() {
    if (name && age && gender && selected != '') {
      console.log('all the data is filled');
      setIsEnab(true);
    }
  }

  function checkVal() {
    console.log(name.length);
    console.log(age);
    console.log(selected);
    if (name.length && age && selected != '') {
      return false;
    } else {
      return true;
    }
  }

  function modalClearUserForm() {
    setName('');
    setAge(0);
    setGender('');
    setSelected('');
    console.log('cleared');
    setIsOpen(false);
  }
  // console.log(usersArray);
  return (
    <>
      <Modal
        title="Are you Sure?"
        isOpen={isOpen}
        actions={[
          <Button key="confirm" variant="primary" onClick={modalClearUserForm}>
            Confirm
          </Button>,
          <Button key="cancel" variant="link" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>,
        ]}
        onClose={handleModalToggle}
      >
        Are you sure you want to clear the form Input details please confirm.
      </Modal>
      <div>
        <Form>
          <FormGroup label="Name" isRequired fieldId="name">
            <TextInput
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(value) => {
                setFullName(value);
              }}
            ></TextInput>
          </FormGroup>

          <FormGroup label="Age" isRequired fieldId="ageField">
            <AgeCalc setAgeCount={setAge} age={age} />
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
            <SelectMonth
              // setFavMonth={setFavMonth}
              onSelect={onSelect}
              onToggle={onToggle}
              isMonthOpen={isMonthOpen}
              selected={selected}
            />
          </FormGroup>

          <ActionGroup>
            {/* <Button disabled={isEnab} variant="primary" type="submit" onClick={handleSubmit}> */}
            <Button isDisabled={checkVal()} variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="primary" onClick={handleModalToggle}>
              Clear
            </Button>
          </ActionGroup>
        </Form>
      </div>
    </>
  );
};
