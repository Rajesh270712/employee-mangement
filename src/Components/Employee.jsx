import { Checkbox, Input, Radio, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: '',
    dob: '',
    hobbies: [],
  });

  const { name, email, mobile, gender, dob, hobbies } = employeeData;

  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name == 'hobbies') {
      setEmployeeData({ ...employeeData, [name]: [...hobbies, value] });
    } else {
      setEmployeeData({ ...employeeData, [name]: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('https://jsonserverlive.herokuapp.com/employee', {
      method: 'POST',
      body: JSON.stringify(employeeData),
      headers: {
        'Content-Type': 'Application/json',
      },
    })
    .then(()=>alert("Employee Details Added Successfully!"))
  }

  return (
    <div>
        <center><Text fontSize="5xl" fontFamily="cursive" > Employee Form </Text></center>
      <form style={{ width: '70%', margin: 'auto' }} action="">
        <Input
          variant="outline"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          m={2}
        />
        <Input
          type="email"
          variant="outline"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
          m={2}
        />
        <Input
          type="number"
          variant="outline"
          placeholder="Mobile"
          name="mobile"
          value={mobile}
          onChange={handleInputChange}
          m={2}
        />
        <Stack direction="row" m={2}>
          <label htmlFor=""> Gender : </label>
          <Radio name="gender" value="male" onChange={handleInputChange}>
            Male
          </Radio>
          <Radio name="gender" value="female" onChange={handleInputChange}>
            Female
          </Radio>
        </Stack>

        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          name="dob"
          value={dob}
          onChange={handleInputChange}
          m={2}
        />
        <Stack direction="row" m={2}>
          <label htmlFor=""> Gender : </label>
          <Checkbox name="hobbies" value="Coding" onChange={handleInputChange}>
            Coding
          </Checkbox>
          <Checkbox name="hobbies" value="Reading" onChange={handleInputChange}>
            Reading
          </Checkbox>
          <Checkbox
            name="hobbies"
            value="Traveling"
            onChange={handleInputChange}
          >
            Traveling
          </Checkbox>
          <Checkbox name="hobbies" value="Writing" onChange={handleInputChange}>
            Writing
          </Checkbox>
        </Stack>
        <Input
          onClick={handleSubmit}
          type="submit"
          colorScheme="linkedin"
          value="Save"
          m={2}
        />
      </form>
    </div>
  );
};

export default EmployeeForm;
