import {useState} from 'react';

const App = () => {
  const initialEmployees = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bobby Hadz'},
  ];
  const [employees, setEmployees] = useState(initialEmployees);

  // 👇️ check if array contains object
  const found = employees.find(element => {
    return element.id === 1;
  });

  if (found) {
    // 👇️ {id: 2, name: 'Bobby Hadz'}
    console.log('✅ object found', found);
  }
};

export default App;