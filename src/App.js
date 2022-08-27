import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import FakeData from './Components/fakeData';
import EmployeeForm from './Components/Employee';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <EmployeeForm/>
        <FakeData/>
    </ChakraProvider>
  );
}

export default App;
