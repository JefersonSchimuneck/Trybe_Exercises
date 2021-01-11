import React from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const commitments = ['Revisar', 'Estudar', 'Praticar', 'Ler'];

class CreateTaskList extends React.Component {
    render () {
        return commitments.map(commitment => task(commitment));
    }
}



export default CreateTaskList;